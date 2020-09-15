// data load
// reference for d3.autotype: https://github.com/d3/d3-dsv#autoType
d3.csv("./data/beer.csv", d3.autoType).then(data => {
    console.log(data);
  
    /** CONSTANTS */
    // constants help us reference the same values throughout our code
    let width = "4",
      height = "4",
      paddingInner = 0.2,
      margin = { top: .2, bottom: .2, left: .2, right: .2 };
  
    /** SCALES */
    // reference for d3.scales: https://github.com/d3/d3-scale
    let yScale = d3
      .scaleBand()
      .domain(data.map(d => d.beer))
      .range([margin.left, width - margin.right])
      .paddingInner(paddingInner);
    
    let xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .range([0,4])
    window.xscale = xScale
      window.data = (data);
    console.log(xScale)
    // reference for d3.axis: https://github.com/d3/d3-axis
    let xAxis = d3.axisBottom(xScale).ticks(data.length);
  
    /** MAIN CODE */
    let dddcanvas = d3.select("#third-graph")
    dddcanvas.append("viewpoint").attr("position","0.65839 3.50450 15.28358").attr("orientation","-0.94049 -0.03011 -0.33848 0.11370")
    .attr("zNear","7.73895").attr("zFar","24.72948").attr("centerOfRotation","0.67790 1.97345 1.02561").attr("fieldOfView","0.78540")
     let transforms = dddcanvas
      .selectAll("transform.shape")
      .data(data)
      .join("transform")
      .attr("class","shape")
      .attr("translation",(d,i)=>   3 - xScale(d.count) + " " + yScale(d.beer) +  " " + 0)
      .attr("scale", (d ) =>  xScale(d.count)  + "," + .5 +","+ 1.0) 
      let textTransforms = dddcanvas
      .selectAll("transform.text")
      .data(data)
      .join("transform")
      .attr("class","text")
      .attr("translation",(d,i)=>   3 + " " + yScale(d.beer) +  " " + 1.6)
      let textShapes = textTransforms.append("shape");
      textShapes.append("appearance").append("material").attr("diffuseColor", (d,i) =>  "0,0,0")
      textShapes.append("text").attr("string", d=> d.beer).append("fontstyle").attr("family","'Times'").attr("size",.8)
      // append rects
      let shapes =   transforms.append("shape");
   // shapes.append("box").attr("size",  ( d , i )=>{ console.log(d,i); return xScale(d.count)  + "," +  yScale.bandwidth() +","+ xscale(d.count);} )//yScale.bandwidth()  + "," + xScale(d.count)  )
    shapes.append("box").attr("size",  ( d , i )=>{ console.log(d,i); yScale.bandwidth() +"," + yScale.bandwidth()  + "," + yScale.bandwidth()}  )
    shapes.append("appearance").append("material").attr("diffuseColor", (d,i) =>  (i == 0 ? 1 : 0) + " " + (i == 1? 1: 0 )+ " "+ (i == 2? 1:0))
   
    x3dom.reload();
    // // append text
    // let text = dddcanvas
    //   .selectAll("text")
    //   .data(data)
    //   .join("text")
    //   .attr("class", "label")
    //   // this allows us to position the text in the center of the bar
    //   .attr("x", d => xScale(d["Common"]) + (xScale.bandwidth() / 2))
    //   .attr("y", d => yScale(d.count))
    //   .text(d => d.count)
    //   .attr("dy", "1.25em");
  
    //   dddcanvas
    //   .append("g")
    //   .attr("class", "axis")
    //   .attr("transform", `translate(0, ${height - margin.bottom})`)
    //   .call(xAxis);

    });
d3.csv("./data/butterfly.csv", d3.autoType).then(data => {
    window.butterflyData = data;
    
    /** CONSTANTS */
    // constants help us reference the same values throughout our code
    let width = "400",
      height = "400",
      paddingInner = 0.2,
      margin = { top: 20, bottom: 40, left: 40, right: 40 };
  
    /** SCALES */
    // reference for d3.scales: https://github.com/d3/d3-scale
    let xScale = d3
      .scaleBand()
      .domain(data.map(d => d.CommonName))
      .range([margin.left, width - margin.right])
      .paddingInner(paddingInner);
    
    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .range([height - margin.bottom, margin.top]);
  
    // reference for d3.axis: https://github.com/d3/d3-axis
    let xAxis = d3.axisBottom(xScale).ticks(data.length);
  
    /** MAIN CODE */
    let svg = d3
      .select("#second-graph")
      .append("svg")
      .attr("class","nope")
      .attr("width",width)
      .attr("height", height)
  
    // append rects
    let rect = svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("y", d => yScale(d.count))
      .attr("x", d => xScale(d.CommonName))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - margin.bottom - yScale(d.count))
      .attr("fill", "steelblue")
  
    // append text
    let text = svg
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("class", "label")
      // this allows us to position the text in the center of the bar
      .attr("x", d => xScale(d["CommonName"]) + (xScale.bandwidth() / 2))
      .attr("y", d => yScale(d.count))
      .text(d => d.count)
      .attr("dy", "1.25em");
  
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    });
    d3.csv("../data/squirrelActivities.csv", d3.autoType).then(data => {
        console.log(data);
      
        /** CONSTANTS */
        // constants help us reference the same values throughout our code
        let width = "400",
          height = "400",
          paddingInner = 0.2,
          margin = { top: 20, bottom: 40, left: 40, right: 40 };
      
        /** SCALES */
        // reference for d3.scales: https://github.com/d3/d3-scale
        let xScale = d3
          .scaleBand()
          .domain(data.map(d => d.activity))
          .range([margin.left, width - margin.right])
          .paddingInner(paddingInner);
      
        let yScale = d3
          .scaleLinear()
          .domain([0, d3.max(data, d => d.count)])
          .range([height - margin.bottom, margin.top]);
      
        // reference for d3.axis: https://github.com/d3/d3-axis
        let xAxis = d3.axisBottom(xScale).ticks(data.length);
      
        /** MAIN CODE */
        let svg = d3
          .select("#first-graph")
          .append("svg")
          .attr("width",width)
          .attr("height", height)
      
        // append rects
        let rect = svg
          .selectAll("rect")
          .data(data)
          .join("rect")
          .attr("y", d => yScale(d.count))
          .attr("x", d => xScale(d.activity))
          .attr("width", xScale.bandwidth())
          .attr("height", d => height - margin.bottom - yScale(d.count))
          .attr("fill", "steelblue")
      
        // append text
        let text = svg
          .selectAll("text")
          .data(data)
          .join("text")
          .attr("class", "label")
          // this allows us to position the text in the center of the bar
          .attr("x", d => xScale(d.activity) + (xScale.bandwidth() / 2))
          .attr("y", d => yScale(d.count))
          .text(d => d.count)
          .attr("dy", "1.25em");
      
        svg
          .append("g")
          .attr("class", "axis")
          .attr("transform", `translate(0, ${height - margin.bottom})`)
          .call(xAxis);
    
        });
      
  function firstGraphShift(event){
      console.log(event);
    $(event.target).hide();
    document.getElementById("first-graph").classList.add("rotateGraph");
    $("#firstShow").show();
    $(".firstHide").hide()
    
  }
  function secondGraphShift(event){
    base = d3
      .select("#second-graph");
    base.select("svg").remove();
    this.butterflyGraph(base.append("svg"),false);
    this.butterflyGraph(base.append("svg"),true);
    $("#secondShow").show();
    $(".secondHide").hide()
  }
  function butterflyGraph(element, reverse){
    
    /** CONSTANTS */
    // constants help us reference the same values throughout our code
    let width = "200",
      height = "400",
      paddingInner = 0.2,
      margin = { top: 20, bottom: 40, left: 40, right: 40 };
  
    /** SCALES */
    // reference for d3.scales: https://github.com/d3/d3-scale
    let bandScale = d3
      .scaleBand()
      .domain(window.butterflyData.map(d => d.CommonName))
      .range([margin.bottom, height - margin.top])
      .paddingInner(paddingInner);
    
    let linScale = d3
      .scaleLinear()
      .domain([0, d3.max(window.butterflyData, d => d.count)])
      .range([width - margin.left, margin.right]);
  
    // reference for d3.axis: https://github.com/d3/d3-axis
    let xAxis = d3.axisBottom(bandScale).ticks(data.length);
  
    /** MAIN CODE */
    let svg =element.attr("class","second")
      .attr("width",width)
      .attr("height", height)
  
    // append rects
    let rect = svg
      .selectAll("rect")
      .data(window.butterflyData)
      .join("rect")
      .attr("y", d => bandScale(d.CommonName))
      .attr("x", d => reverse?0:linScale(d.count))
      .attr("width", d => width - margin.top - linScale(d.count))
      .attr("height", bandScale.bandwidth() )
      .attr("fill", "gold")
  
    // append text
     let text = svg
      .selectAll("text")
      .data(window.butterflyData)
      .join("text")
      .attr("class", "label")
      // this allows us to position the text in the center of the bar
      .attr("x", d => reverse?0:Math.min(linScale(d.count),60))
      .attr("y", d => bandScale(d["CommonName"]) + (bandScale.bandwidth() / 2))
      .text(d => d.Family + "("+ d.count+")"  )
      .attr("dy", "1.25em");
  
    // svg
    //   .append("g")
    //   .attr("class", "axis")
    //   .attr("transform", `translate(0, ${height - margin.bottom})`)
    //   .call(xAxis);

  }
  function thirdGraphShift(event){
    console.log(event);
    $(event.target).hide();
    document.getElementById("third-graph")
  }