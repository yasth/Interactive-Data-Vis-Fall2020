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
  Education: {},
  Selectivity: {},
  Speaker:{},
  College:{}
};

/**
 * LOAD DATA
 * */
Promise.all([
  d3.csv("./educationUS.csv", d3.autoType),
  d3.csv("./selectivityUS.csv", d3.autoType),
  d3.json("./collegeData.json"),
  d3.json("./speakerData.json"),
]).then(([educationUS,selectivityUS,college,speaker]) => {
  state.Education.EducationUS = educationUS;
  state.Selectivity.SelectivityUS = selectivityUS;
  state.College = college;
  state.Speaker = speaker;
  // console.log("state: ", state);
  init();
});

/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  initEducationUS();
  initEducationMedia();
  initSelectivityUS();
  initSelectivityMedia();
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
    .domain([0, 60]).nice()
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
  let speakerData = Object.keys(state.Speaker);
  if(state.Education.selectedEducationNetwork && state.Education.selectedEducationNetwork!= "All"){
    speakerData = speakerData.filter(x=> state.Speaker[x][2] == state.Education.selectedEducationNetwork)
  } 
  let rollup = d3.rollup(speakerData,v=>v.length,d=>state.Speaker[d][3]);
  let total = d3.sum(rollup.values());
  let data = Object.assign(state.Education.EducationUS);
  container.html('');

  svg = container
    .append("svg")
    .attr("height",400)
    .attr("width","100%")
    .attr("viewBox", [0, 0, width, height]);
  x = d3.scaleBand()
    .domain((d3.range(data.length)))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  y = d3.scaleLinear()
    .domain([0, 60]).nice()
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
    .attr("y", d => y(rollup.get(d.Education)/total*100))
    .attr("height", d => y(0) - y(rollup.get(d.Education)/total*100)||0)
    .attr("fill",d=>d.Education == state.Education.selectedEducation ? highlightColor: color)
    .attr("width", x.bandwidth());
}
function changeEducation(e){
  state.Education.selectedEducation = e.target.value;
  initEducationMedia();
  initEducationUS();
}
function changeEducationNetwork(e){
  state.Education.selectedEducationNetwork = e.target.value;
  initEducationMedia();
}
function changeSelectivityNetwork(e){
  state.Selectivity.selectedSelectivityNetwork = e.target.value;
  initSelectivityMedia();
}
function changeSelectivity(e){
  state.Selectivity.selectedSelectivity = e.target.value;
  initSelectivityUS();
  initSelectivityMedia();
}

function initSelectivityUS() {
  const container = d3.select("#leftSelectivity")
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
    .domain([0, 100]).nice()
    .range([height - margin.bottom, margin.top]);
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].Selectivity).tickSizeOuter(0));
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
    .attr("y", (d,i) => y(d.value))
    .attr("height", (d,i) => y(0) - y(d.value))
    .attr("fill",d=>d.Selectivity == state.Selectivity.selectedSelectivity ? highlightColor: color)
    .attr("width", x.bandwidth());


}

function initSelectivityMedia() {
  const container = d3.select("#rightSelectivity")
  container.html('');
  let speakerData = Object.keys(state.Speaker);
  if(state.Selectivity.selectedSelectivityNetwork && state.Selectivity.selectedSelectivityNetwork!= "All"){
    speakerData = speakerData.filter(x=> state.Speaker[x][2] == state.Selectivity.selectedSelectivityNetwork)
  } 
  svg = container
    .append("svg")
    .attr("height",400)
    .attr("width","100%")
    .attr("viewBox", [0, 0, width, height]);
  var speakerColleges = speakerData.map(k=>state.Speaker[k][4]);
  var speakerValues = speakerColleges.map(k=>{
    if(state.College[k]){
      return state.College[k][0] 
    }
    return null
  });
  var total = d3.count(speakerValues);
  let bins = d3.bin().thresholds([50,70,85])(speakerValues);
  let data = state.Selectivity.SelectivityUS;
  x = d3.scaleBand()
    .domain((d3.range(data.length)))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  y = d3.scaleLinear()
    .domain([0, 100]).nice()
    .range([height - margin.bottom, margin.top]);
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].Selectivity).tickSizeOuter(0));
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
    .attr("y", (d,i) => y((bins[i]?.length||0) /total *100))
    .attr("height", (d,i) => y(0) - y((bins[i]?.length||0) /total *100))
    .attr("fill",d=>d.Selectivity == state.Selectivity.selectedSelectivity ? highlightColor: color)
    .attr("width", x.bandwidth());


}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // + UPDATE TOOLTIP
}
