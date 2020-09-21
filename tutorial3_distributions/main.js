/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 },
  radius = 5;

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;
let xScale;
let yScale;

/**
 * APPLICATION STATE
 * */

const ColorSources = ["Runtime", "Service"
]

const Services = ["Hulu", "Netflix", "Prime Video", "Disney+"]

let state = {
  data: [],
  selectedRater: "IMDb",
  startYear: 2000,
  endYear: 2020,
  colorSource: "Service",
  services: Object.assign(Services),
  genres: ["Film-Noir", "Musical"]
};

/**
 * LOAD DATA
 * */
d3.csv("./data/MoviesOnStreamingPlatforms_updated.csv", d3.autoType).then(raw_data => {
  console.log("raw_data", raw_data);
  state.data = raw_data;
  state.data.map(line => line.Genres?.split(",")?.map(genre => genres.add(genre)))
  init();
});

function getValue(line, source) {
  switch (source) {
    case "Rotten Tomatoes":
      return Number(line["Rotten Tomatoes"]?.replace("%", "") ?? 0) / 10
    case "Critical Darlings":
      return Number(line["Rotten Tomatoes"]?.replace("%", "") ?? 0) / 10 - (line["IMDb"] ?? 10)
    case "Critical Misses":
     return  line["IMDb"] -  Number(line["Rotten Tomatoes"]?.replace("%", "") ?? 100) / 10 
  }
  return line[source]
}
var genres = new Set();

d3.select('body')
  .append('div')
  .attr('id', 'tooltip')
  .attr('style', 'position: absolute; opacity: 0; color:white');
/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  // SCALES
  xScale = d3
    .scaleLinear().domain(d3.extent(state.data.filter(s => state.services.reduce((p, service) => p || s[service], false)), d => d.Year))
    .range([margin.left, width - margin.right])

  yScale = d3
    .scaleLinear()
    .domain([0, 10])// d3.extent(state.data.filter(s=> state.services.reduce((p,service) => p || s[service],false)), d => getValue(d, state.selectedRater))[1]])
    .range([height - margin.bottom, margin.top]);

  // AXES
  const xAxis = d3.axisBottom(xScale).tickFormat((d)=>d.toString());;
  const yAxis = d3.axisLeft(yScale);



  // UI ELEMENT SETUP
  // add dropdown (HTML selection) for interaction
  // HTML select reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
  const selectElement = d3.select("#dropdown").on("change", function () {
    console.log("new selected region is", this.value);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    state.selectedRater = this.value;
    draw(); // re-draw the graph based on this new selection
  });

  // add in dropdown options from the unique values in the data
  selectElement
    .selectAll("option")
    .data(["IMDb", "Rotten Tomatoes", "Critical Darlings", "Critical Misses"]) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);


  d3.select("#genreFieldList").selectAll("li").data(Array.from(window.genres)).join("li").append("label").text(d => d)
    .append("input").attr("type", "CheckBox").attr("value", d => d).property("checked", d => state.genres.indexOf(d) >= 0).on("change",
      () => {
        !d3.event.target.checked ? state.genres = state.genres.filter(f => f != d3.event.target.value) : state.genres.push(d3.event.target.value);
        draw();
      }
    );
  d3.select("#streamingServiceList").selectAll("li").data(Array.from(Services)).join("li").append("label").attr("style", d => "color:" + serviceColor(d))
    .text(d => d).append("input").attr("type", "CheckBox").attr("value", d => d).property("checked", d => state.services.indexOf(d) >= 0).on("change",
      () => {
        !d3.event.target.checked ? state.services = state.services.filter(f => f != d3.event.target.value) : state.services.push(d3.event.target.value);
        draw();
      }
    );

  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "70%")
    .attr("viewBox", `0 0 ${width}, ${height}`);

  // add the xAxis
  svg
    .append("g")
    .attr("class", "axis x-axis")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(xAxis)
    .append("text")
    .attr("class", "axis-label")
    .attr("x", "50%")
    .attr("dy", "3em")
    .text("Year");

  // add the yAxis
  svg
    .append("g")
    .attr("class", "axis y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis)
    .append("text")
    .attr("class", "axis-label")
    .attr("y", "50%")
    .attr("dx", "-3em")
    .attr("writing-mode", "vertical-rl")
    .text("Market");

  draw(); // calls the draw function
}

function colorMatchingServices(line) {
  let matchingServices = state.services.reduce((acc, service) => { if (line[service]) { acc.push(service) } return acc; }, [])
  if (matchingServices.length > 1) {
    return "purple";
  } else if (matchingServices.length == 1) {
    return serviceColor(matchingServices[0])
  }
  return "grey";
}
function serviceColor(service) {
  switch (service) {
    case "Hulu":
      return "#1ce783"
    case "Netflix":
      return "#E50914"
    case "Disney+":
      return "blue";
    case "Prime Video":
      return "#FF9900";
  }
  return "grey";
}
/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // filter the data for the selectedParty
  let filteredData = state.data.filter(s => state.services.reduce((p, service) => p || s[service], false)
    && getValue(s, state.selectedRater) > 0
    && s?.Genres?.split(",")?.reduce((acc, genre) => acc || state.genres.indexOf(genre) >= 0, false));
  // if there is a selectedParty, filter the data before mapping it to our elements
  // if (state.selectedRegion !== "All") {
  //   filteredData = state.data.filter(d => d.party === state.selectedRegion);
  // }

  const dot = svg
    .selectAll(".dot")
    .data(filteredData, d => d.Title) // use `d.name` as the `key` to match between HTML and data elements
    .join(
      enter =>
        // enter selections -- all data elements that don't have a `.dot` element attached to them yet
        enter
          .append("circle")
          .attr("class", "dot") // Note: this is important so we can identify it in future updates
          .attr("stroke", "lightgrey")
          .attr("opacity", 0.1)
          .attr("fill", d => {
            return colorMatchingServices(d)
          })
          .attr("r", radius*2)
          .attr("cy", d => yScale(getValue(d, state.selectedRater)))
          .attr("cx", d => xScale(d.Year)) // initial value - to be transitioned
          .call(enter =>
            enter
              .transition() // initialize transition
              .delay(d => 10 * (d.Year-1900)) // delay on each element
              .duration(500) // duration 500ms
              .attr("r", d => radius)
              .attr("opacity", 0.5)
          ),
      update =>
        update.call(update =>
          // update selections -- all data elements that match with a `.dot` element
          update
           .transition()
           .delay(250)
           .attr("cy", d => yScale(getValue(d, state.selectedRater)))
           .attr("fill", d => {
            return colorMatchingServices(d)
          })
      ),
      exit =>
        exit.call(exit =>
          // exit selections -- all the `.dot` element that no longer match to HTML elements
          exit
             .transition()
             .delay(d => 10 * (d.Year-1900)) // delay on each element
              .duration(500) // duration 500ms
              .attr("r", d => radius*4)
              .attr("fill", "gray")
              .attr("opacity", 0)
            .remove()
        )).on("click", (d) => window.open(
          "https://www.imdb.com/search/title/?title=" + d.Title, "_blank")).on('mouseover', function (d) {
            if (d != null) {
              d3.select('#tooltip').style('opacity', .8).style("background-color", colorMatchingServices(d)).text(`${d["Title"]} ${d.Year}`)
            }
          }).on('mouseout', function () {
            d3.select('#tooltip').style('opacity', 0)
          });



  svg.on('mousemove', function () {
    d3.select('#tooltip')
      .style('left', (d3.event.pageX + 10) + 'px')
      .style('top', (d3.event.pageY + 10) + 'px')
  });


}
