d3.csv("./data/all-states-history.csv").then(data => {
    window.data = d3.nest().key(f=>f.date).entries(data);
    window.columns = data.columns;
    setup(window.data);
});  
function setup(data){
    let append = d3.select("#scrubber").append("input").attr("type","range").attr("style","width:350px").attr("max",data.length-1, min = 0).attr("value",0).on("change",
    evt => {
        d3.event.cancelbubble = true;
        window.displayPane(d3.event.target.value)
    });
    window.table = d3.select("#safeSpot");
    const header= table.append("thead").append("tr").selectAll("th").data(window.columns).join("th").text(d=>d);
    window.tbody = table.append("tbody");
    window.headline = d3.select("#dateline");
    this.displayPane(0);
}

function displayPane(index){
    let activeData = window.data[index].values.sort((a,b)=>a["state"].localeCompare(b["state"]));
    tbody.selectAll(".row").remove();
    let dateline = document.getElementById("dateline")
    var txtDate = activeData[0]["date"];
    dateline.innerText = new Date(txtDate.slice(0,4),txtDate.slice(4,6)-1,txtDate.slice(6,8)).toDateString();
    max = [];
    window.columns.map(k=> max.push(d3.max(activeData.map(f=>Number(f[k])))));
    const rows = tbody.selectAll(".row").data(activeData).join("tr").attr("class","row");
    rows.selectAll(".cell").data(d=>Object.values(d)).join("td")
    .attr("style",(d,i) =>isFinite(d)&& i>0? "color:"+(max[i])+";background-color:rgb(255,"+(1-Math.max((d/max[i]-.7),0))*255+","+(1-Math.max((d/max[i]-.7),0))*255+")" : "").attr("class", "cell").text(d=>d);
    console.log(data);
}