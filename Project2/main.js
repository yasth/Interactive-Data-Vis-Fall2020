/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 }, color = "steelblue",
  highlightColor = "firebrick";
let svg;
let tooltip;
const format = d3.format(",d")

/**
 * APPLICATION STATE
 * */
let state = {
  // + INITIALIZE STATE
  Education: {},
  Selectivity: {},
  Speaker:{},
  College:{},
  Qualia:{}

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
  initQualia();
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
    .attr("height",500)
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
  drawEducationMedia();
  svg = container
    .append("svg")
    .attr("height",400)
    .attr("width","100%")
    .attr("viewBox", [0, 0, width, height]);
}
function drawEducationMedia(){
  const svg = d3.select("#rightEducation > svg")
  let speakerData = Object.keys(state.Speaker);
  if(state.Education.selectedEducationNetwork && state.Education.selectedEducationNetwork!= "All"){
    speakerData = speakerData.filter(x=> state.Speaker[x][2] == state.Education.selectedEducationNetwork)
  } 
  let rollup = d3.rollup(speakerData,v=>v.length,d=>state.Speaker[d][3]);
  let total = d3.sum(rollup.values());
  let data = Object.assign(state.Education.EducationUS);

  
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
  drawEducationMedia();
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
function changeQualiaNetwork(e){
  state.Qualia.selectedSelectivityQualia = e.target.value;
  initQualia();
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
function initQualia() {
  const container = d3.select("#Qualia");
  container.html('');
  let speakerData = Object.keys(state.Speaker);
  if(  state.Qualia.selectedSelectivityQualia &&   state.Qualia.selectedSelectivityQualia!= "All"){
    speakerData = speakerData.filter(x=> state.Speaker[x][2] ==   state.Qualia.selectedSelectivityQualia)
  } 
  svg = container .append("svg")
  .attr("height",500)
  .attr("width","100%")
  .attr("viewBox", [0, 0, 1000, 500]);

  var speakerColleges = speakerData.map(k=>state.Speaker[k][4]);
  var speakerValues = speakerColleges.map(k=>{
    if(state.College[k]){
      return state.College[k]
    }
    return null
  });

  window.rollup = d3.nest().key((d)=>d[1]).key((d)=>d[2]).rollup(v=>v.length).entries(speakerValues).sort((a,b)=>a.key > b.key);
  


  treemap = data => d3.treemap()
    .tile(d3.treemapSquarify)
    .size([1000, 500])
    .padding(1)
    .round(true)(d3.hierarchy(data,v => { return Array.isArray(v) ? v :  v.values}).sum(d => d.value));

  let root = treemap(rollup);
  

  const color = d3.scaleOrdinal(d3.schemeCategory10);
  color("Private");
  color("Public");
  const leaf = svg.selectAll("g")
  .data(root.leaves())
  .join("g")
    .attr("transform", d => `translate(${d.x0},${d.y0})`);
    leaf.append("title")
    .text(d => `${d.ancestors().reverse().map(d => d.data.key).join("/")}\n${format(d.data.value)}`);
  leaf.append("rect")
//      .attr("id", d => (d.leafUid ="leaf").id)
      .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.key); })
      .attr("fill-opacity", 0.6)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0);

    leaf.append("text")
      .attr("clip-path", d => d.clipUid)
    .selectAll("tspan")
    .data(d =>  new Array(d.data.key  + " " +  format(d.data.value)))
    .join("tspan")
      .attr("x", 3)
      .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
      .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
      .text(d => d);
 
    
    const size = 20;
    const border_padding = 15;
    const item_padding = 5;
    const text_offset = 2;
    const domains = ["Private","Public"]
    const legend = svg.append("g")
    // Apply a translation to the entire group 
    .attr("transform", "translate(800, 400)")
    // Border
    legend
      .append('rect')
      .attr("width", 120)
      .attr("height", 75)
      .style("fill", "rgba(255,255,255,.5)")
      .style("stroke-width", 1)
      .style("stroke", "black");
    
    // Boxes
    legend.selectAll("boxes")
      .data(domains)
      .enter()
      .append("rect")
        .attr("x", border_padding)
        .attr("y", (d, i) => border_padding + (i * (size + item_padding)))
        .attr("width", size)
        .attr("height", size)
        .style("fill", (d) => color(d));
    
    // Labels
    legend.selectAll("labels")
      .data(domains)
      .enter()
      .append("text")
        .attr("x", border_padding + size + item_padding)
        .attr("y", (d, i) => border_padding + i * (size + item_padding) + (size / 2) + text_offset)
        // .style("fill", (d) => color(d))
        .text((d) => d)
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .style("font-family", "sans-serif");
}
/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // + UPDATE TOOLTIP
}
