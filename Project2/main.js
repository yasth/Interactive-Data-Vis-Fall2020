/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 }, color = "steelblue",
  highlightColor = "firebrick";
let svg;
let tooltip;

/**
 * APPLICATION STATE
 * */
let state = {
  // + INITIALIZE STATE
  Education: {}
};

/**
 * LOAD DATA
 * */
d3.csv("./EducationMedia.csv",  d3.autoType).then(data => {
  state.Education.EducationMedia = data;
});
d3.csv("./EducationUS.csv",  d3.autoType).then(data => {
  state.Education.EducationUS = data;
  init();
}
)
/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  initEducationUS();
  initEducationMedia();
  // + INITIALIZE TOOLTIP IN YOUR CONTAINER ELEMENT

  // + CREATE YOUR ROOT HIERARCHY NODE

  // + CREATE YOUR LAYOUT GENERATOR

  // + CALL YOUR LAYOUT FUNCTION ON YOUR ROOT DATA

  // + CREATE YOUR GRAPHICAL ELEMENTS

  draw(); // calls the draw function
}
function initEducationUS() {
  const container = d3.select("#leftEducation")
  container.html('');

  svg = container
    .append("svg")
    .attr("height",400)
    .attr("width","100%")
    .attr("viewBox", [0, 0, width, height]);
  let data = state.Education.EducationUS;
  x = d3.scaleBand()
    .domain((d3.range(data.length)))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].Education).tickSizeOuter(0));
  yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.value))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(data.y))
  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

    svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("fill",d=>d.Education == state.Education.selectedEducation ? highlightColor: color)
    .attr("width", x.bandwidth());


}
function initEducationMedia() {
  const container = d3.select("#rightEducation")
  container.html('');
  svg = container
    .append("svg")
    .attr("height",400)
    .attr("width","100%")
    .attr("viewBox", [0, 0, width, height]);
  let data = state.Education.EducationMedia;
  x = d3.scaleBand()
    .domain((d3.range(data.length)))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].Education).tickSizeOuter(0));
  yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.value))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill",  "currentColor")
      .attr("text-anchor", "start")
      .text(data.y))
  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

    svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("fill",d=>d.Education == state.Education.selectedEducation ? highlightColor: color)
    .attr("width", x.bandwidth());
}
function changeEducation(e){
  state.Education.selectedEducation = e.target.value;
  init();
}

function initSelectivityUS() {
  const container = d3.select("#leftSelectivty")
  container.html('');

  svg = container
    .append("svg")
    .attr("height",400)
    .attr("width","100%")
    .attr("viewBox", [0, 0, width, height]);
  let data = state.Selectivity.SelectivityUS;
  x = d3.scaleBand()
    .domain((d3.range(data.length)))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].Education).tickSizeOuter(0));
  yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.value))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(data.y))
  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

    svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("fill",d=>d.Education == state.Education.selectedEducation ? highlightColor: color)
    .attr("width", x.bandwidth());


}
/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // + UPDATE TOOLTIP
}
