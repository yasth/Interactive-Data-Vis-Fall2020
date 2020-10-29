/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 };

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;

/**
 * APPLICATION STATE
 * */
let state = {
  geojson: null,
  extremes: null,
  hover: {
    latitude: null,
    longitude: null,
    state: null,
  },
};

/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([
  d3.json("../data/usState.json"),
  d3.csv("./data.csv", d3.autoType),
]).then(([geojson, centers]) => {
  state.geojson = geojson;
  state.centers = centers;
  // console.log("state: ", state);
  init();
});

/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  // our projection and path are only defined once, and we don't need to access them in the draw function,
  // so they can be locally scoped to init()
  const projection = d3.geoAlbersUsa().fitSize([width, height], state.geojson);
  const path = d3.geoPath().projection(projection);
  let scroll = scroller().container(d3.select('#container'))
scroll()

  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .selectAll(".state")
    // all of the features of the geojson, meaning all the states as individuals
    .data(state.geojson.features)
    .join("path")
    .attr("d", path)
    .attr("class", "state")
    .attr("fill", "transparent")
    .on("mouseover", d => {
      // when the mouse rolls over this feature, do this
      state.hover["state"] = d.properties.NAME;
      draw(); // re-call the draw function when we set a new hoveredState
    });

  // EXAMPLE 1: going from Lat-Long => x, y
  // for how to position a dot
  const GradCenterCoord = { latitude: 40.7423, longitude: -73.9833 };
  svg
    .selectAll("circle.popDot")
    .data(state.centers)
    .join("circle")
    .attr("class","popDot")
    .attr("r", 2)
    .attr('opacity',.5)
    .attr("fill", "steelblue")
    .attr("transform", d => {
      const [x, y] = projection([d.PopLONGITUDE, d.PopLATITUDE]);
      return `translate(${x}, ${y})`;
    });

    svg
    .selectAll("circle.dot")
    .data(state.centers)
    .join("circle")
    .attr("class","dot")
    .attr("r", 2)
    .attr("fill", "red")
    .attr('opacity',.5)
    .attr("transform", d => {
      const [x, y] = projection([d.GeoLongitude, d.GeoLatitude]);
      return `translate(${x}, ${y})`;
    });

  // EXAMPLE 2: going from x, y => lat-long
  // this triggers any movement at all while on the svg
  svg.on("mousemove", () => {
    // we can use d3.mouse() to tell us the exact x and y positions of our cursor
    const [mx, my] = d3.mouse(svg.node());
    // projection can be inverted to return [lat, long] from [x, y] in pixels
    const proj = projection.invert([mx, my]);
    state.hover["longitude"] = proj[0];
    state.hover["latitude"] = proj[1];
    draw();
  });

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // return an array of [key, value] pairs
  hoverData = Object.entries(state.hover);

  d3.select("#hover-content")
    .selectAll("div.row")
    .data(hoverData)
    .join("div")
    .attr("class", "row")
    .html(
      d =>
        // each d is [key, value] pair
        d[1] // check if value exist
          ? `${d[0]}: ${d[1]}` // if they do, fill them in
          : null // otherwise, show nothing
    );
}

function scroller(){
  let container = d3.select('body')
  let dispatch = d3.dispatch('active', 'progress');
  let sections = d3.selectAll('.step')
  let sectionPositions
 
  let currentIndex = -1
  let containerStart = 0;

  function scroll(){
      d3.select(window)
          .on('scroll.scroller', position)
          .on('resize.scroller', resize)

      resize();

      let timer = d3.timer(function() {
          position();
          timer.stop();
      });
  }

  function resize(){
      sectionPositions = [];
      let startPos;
  
      sections.each(function(d, i) {
          let top = this.getBoundingClientRect().top;
      
          if (i === 0 ){
              startPos = top;
          }
          sectionPositions.push(top - startPos)
      });
  }

  function position() {
      let pos = window.pageYOffset - 300 - containerStart;
      let sectionIndex = d3.bisect(sectionPositions, pos);
      sectionIndex = Math.min(sections.size()-1, sectionIndex);
  
      if (currentIndex !== sectionIndex){
          dispatch.call('active', this, sectionIndex);
          currentIndex = sectionIndex;
      }
  
      let prevIndex = Math.max(sectionIndex - 1, 0);
      let prevTop = sectionPositions[prevIndex]
      let progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
      dispatch.call('progress', this, currentIndex, progress)
  }

  scroll.container = function(value) {
      if (arguments.legth === 0){
          return container
      } 
      container = value 
      return scroll 
  }

  scroll.on = function(action, callback){
      dispatch.on(action, callback)
  };

  return scroll;
}

