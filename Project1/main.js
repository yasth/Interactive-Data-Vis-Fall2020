
const speakerData = {
  "DONALD TRUMP, PRESIDENT OF THE UNITED STATES:": ["RECORDED", "M"],
  "DONALD TRUMP , PRESIDENT OF THE UNITED STATES:": ["RECORDED", "M"],
  "DONALD TRUMP, President of the United States:": ["RECORDED", "M"],
  "DONALD J. TRUMP, PRESIDENT OF THE UNITED STATES:": ["RECORDED", "M"],
  "TRUMP:": ["RECORDED", "M"],
  "PRESIDENT DONALD TRUMP:": ["RECORDED", "M"],
  "JEROME POWELL , FEDERAL RESERVE CHAIRMAN:": ["RECORDED", "M"],
  "POWELL:": ["RECORDED", "M"],
  "NEIL CAVUTO, FOX NEWS ANCHOR::": ["ANCHOR", "M"],
  "CAVUTO:": ["ANCHOR", "M"],
  "BURMAN:": ["IN-HOUSE", "M"],
  "SEN. JOHN THUNE (R-SD)::": ["GUEST", "M"],
  "SCOTT MARTIN, KINGSVIEW ASSET MANAGEMENT:": ["GUEST", "M"],
  "LT. GENERAL MARK HERTLING (RET.), CNN MILITARY ANALYST:": ["GUEST", "M"],
  "HERTLING:": ["GUEST", "M"],
  "ERIN BURNETT, CNN HOST:": ["ANCHOR", "M"],
  "BURNETT:": ["ANCHOR", "F"],
  "REP. ADAM SCHIFF (D-CA):": ["RECORDED", "M"],
  "ADAM SCHIFF:": ["RECORDED", "M"],
  "SCHIFF:": ["RECORDED", "M"],
  "NPR - All Things Considered SCHIFF:": ["GUEST", "M"],
  "(BEGIN VIDEO CLIP) SCHIFF:": ["RECORDED", "M"],
  "MADDOW:": ["ANCHOR", "F"],
  "RACHEL MADDOW, MSNBC HOST:": ["ANCHOR", "F"],
  "ANDERSON COOPER, CNN HOST:": ["ANCHOR", "M"],
  "COOPER:": ["ANCHOR", "M"],
  "HEALEY:": ["GUEST", "F"],
  "LAWRENCE O`DONNELL, MSNBC HOST:": ["ANCHOR", "M"],
  "O`DONNELL:": ["ANCHOR", "M"],
  "ELLEN NAKASHIMA, NATIONAL SECURITY REPORTER, THE WASHINGTON POST:": ["GUEST", "F"],
  "NAKASHIMA:": ["GUEST", "F"],
  "HIMES:": ["GUEST", "M"],
  "GOV. GAVIN NEWSOM (D-CA):": ["RECORDED", "M"],
  "GOV. GAVIN NEWSOM:": ["GUEST", "M"],
  "JEFFREY TOOBIN, CNN CHIEF LEGAL ANALYST:": ["IN-HOUSE", "M"],
  "TOOBIN:": ["IN-HOUSE", "M"],
  "ASHA RANGAPPA, CNN LEGAL & NATIONALA SECURITY ANALYST:": ["IN-HOUSE", "F"],
  "RANGAPPA:": ["IN-HOUSE", "F"],
  "AUBREY:": ["ANCHOR", "F"],
  "BLITZER:": ["ANCHOR", "M"],
  "WOLF BLITZER, CNN HOST:": ["ANCHOR", "M"],
  "MAGGIE HABERMAN, CNN POLITICAL ANALYST:": ["IN-HOUSE", "F"],
  "HABERMAN:": ["IN-HOUSE", "M"],
  "FAREED ZAKARIA, CNN HOST, \"FAREED ZAKARIA GPS\":": ["ANCHOR", "M"],
  "ZAKARIA:": ["ANCHOR", "M"],
  "DAVID AXELROD, CNN SENIOR POLITICAL COMMENTATOR:": ["IN-HOUSE", "M"],
  "AXELROD:": ["IN-HOUSE", "M"],
  "HOWARD DEAN, (D) FORMER VERMONT GOVERNOR:": ["GUEST", "M"],
  "DEAN:": ["GUEST", "M"],
  "JOHN KASICH, CNN SENIOR POLITICAL COMMENTATOR:": ["IN-HOUSE", "M"],
  "KASICH:": ["IN-HOUSE", "M"],
  "CHRIS CUOMO, CNN HOST:": ["ANCHOR", "M"],
  "CUOMO:": ["ANCHOR", "M"],
  "COMMANDER DAVID FRAVOR, U.S. NAVY PILOT (RET.):": ["RECORDED", "M"],
  "FRAVOR:": ["RECORDED", "M"],
  "RANDI KAYE, CNN CORRESPONDENT (voice-over):": ["IN-HOUSE", "M"],
  "KAYE:": ["IN-HOUSE", "M"],
  "KAYE (on camera):": ["IN-HOUSE", "M"],
  "UNIDENTIFIED MALE:": ["RECORDED", "M"],
  "EVAN PEREZ, CNN SENIOR JUSTICE CORRESPONDENT:": ["GUEST", "M"],
  "PEREZ:": ["GUEST", "M"],
  "DAVID GERGEN, FORMER ADVISER TO FOUR PRESIDENTS:": ["GUEST", "M"],
  "GERGEN:": ["GUEST", "M"],
  "ANNE MILGRAM, FORMER FEDERAL PROSECUTOR:": ["GUEST", "F"],
  "MILGRAM:": ["GUEST", "M"],
  "BOB BAER, CNN Intelligence & Security Analyst:": ["IN-HOUSE", "M"],
  "BAER:": ["IN-HOUSE", "M"],
  "MANU RAJU, CNN SENIOR CONGRESSIONAL CORRESPONDENT:": ["IN-HOUSE", "M"],
  "RAJU:": ["IN-HOUSE", "M"],
  "REP. MAXINE WATERS (D-CA):": ["GUEST", "F"],
  "WATERS:": ["GUEST", "F"],
  "VAN JONES, CNN POLITICAL COMMENTATOR:": ["IN-HOUSE", "M"],
  "JONES:": ["IN-HOUSE", "M"],
  "KEITH BOYKIN, FORMER WHITE HOUSE AIDE UNDER PRESIDENT BILL CLINTON :": ["GUEST", "M"],
  "BOYKIN:": ["GUEST", "M"],
  "REP. HAKEEM JEFFRIES (D-NY):": ["RECORDED", "M"],
  "JEFFRIES:": ["RECORDED", "M"],
  "COREY LEWANDOWSKI , FORMER TRUMP CAMPAIGN MANAGER:": ["RECORDED", "M"],
  "LEWANDOWSKI:": ["RECORDED", "M"],
  "REP. ERIC SWALWELL (D-CA):": ["RECORDED", "M"],
  "REP. STEVE COHEN (D-TN):": ["RECORDED", "M"],
  "COHEN:": ["RECORDED", "M"],
  "ROBERT JOHNSON, BET FOUNDER:": ["RECORDED", "M"],
  "BOB JOHNSON, BET FOUNDER:": ["RECORDED", "M"],
  "REP. BETO O'ROURKE (D-TX), PRESIDENTIAL CANDIDATE:": ["RECORDED", "M"],
  "SEN. CORY BOOKER (D-NJ), PRESIDENTIAL CANDIDATE:": ["GUEST", "M"],
  "BOOKER:": ["GUEST", "M"],
  "XAVIER BECERRA (D), ATTORNEY GENERAL OF CALIFORNIA:": ["GUEST", "M"],
  "BECERRA:": ["GUEST", "M"],
  "MIKE POMPEO , SECRETARY OF STATE :": ["GUEST", "M"],
  "MARK ZANDI, CHIEF ECONOMIST, MOODY'S ANALYSTICS:": ["GUEST", "M"],
  "ZANDI:": ["GUEST", "M"],
  "JEROME POWELL , FEDERAL RESERVE CHAIRMAN:": ["RECORDED", "M"],
  "NEIL CAVUTO, FOX NEWS ANCHOR:": ["ANCHOR", "M"],
  "CAVUTO:": ["ANCHOR", "M"],
  "BLAKE BURMAN, FOX NEWS CORRESPONDENT:": ["IN-HOUSE", "M"],
  "SEN. JOHN THUNE (R-SD):": ["GUEST", "M"],
  "THUNE:": ["GUEST", "M"],
  "DANIELLE SHAY, SIMPLER TRADING:": ["GUEST", "F"],
  "SHAY:": ["GUEST", "M"],
  "SUSAN LI, FOX NEWS CORRESPONDENT:": ["IN-HOUSE", "F"],
  "LI:": ["GUEST", "M"],
  "SCOTT MARTIN, KINGSVIEW ASSET MANAGEMENT:": ["GUEST", "M"],
  "MARTIN:": ["GUEST", "M"],
  "SEN. JAMES RISCH (R-ID):": ["GUEST", "M"],
  "CATHERINE HERRIDGE, FOX CHIEF INTELLIGENCE CORRESPONDENT:": ["IN-HOUSE", "F"],
  "HERRIDGE:": ["IN-HOUSE", "F"],
  "REP. MARK MEADOWS (R-NC):": ["RECORDED", "M"],
  "MEADOWS:": ["RECORDED", "M"],
  "MICHAEL HOROWITZ, INSPECTOR GENERAL:": ["RECORDED", "M"],
  "HOROWITZ:": ["RECORDED", "M"],
  "REP. JODY HICE (R-GA):": ["GUEST", "F"],
  "HICE:": ["GUEST", "F"],
  "REP. TULSI GABBARD (D-HI), PRESIDENTIAL CANDIDATE:": ["GUEST", "F"],
  "GABBARD:": ["GUEST", "F"],
  "ED RENSI, FORMER MCDONALD'S USA CEO:": ["GUEST", "M"],
  "RENSI:": ["GUEST", "M"],
  "STEPHEN COLBERT, HOST, \"THE LATE SHOW WITH STEPHEN COLBERT\":": ["RECORDED", "M"],
  "COLBERT:": ["RECORDED", "M"],
  "SEN. ELIZABETH WARREN (D-MA), PRESIDENTIAL CANDIDATE:": ["RECORDED", "F"],
  "WARREN:": ["RECORDED", "F"],
  "KATHERINE TIMPF, FOX NEWS CONTRIBUTOR:": ["IN-HOUSE", "F"],
  "TIMPF:": ["IN-HOUSE", "F"],
  "KEVIN CORKE, FOX NEWS WHITE HOUSE CORRESPONDENT:": ["IN-HOUSE", "M"],
  "CORKE:": ["IN-HOUSE", "M"],
  "BEN RHODES, FORMER OBAMA DEPUTY NATIONAL SECURITY ADVISOR:": ["GUEST", "M"],
  "BEN RHODES, FMR OBAMA DEPUTY NATIONAL SECURITY ADVISOR:": ["GUEST", "M"],
  "RHODES:": ["GUEST", "M"],
  "NED PRICE, FORMER CIA ANALYST:": ["GUEST", "M"],
  "PRICE:": ["GUEST", "M"],
  "NICHOLAS KRISTOF, THE NEW YORK TIMES:": ["GUEST", "M"],
  "NICHOLAS KRISTOFF, COLUMNIST, THE NEW YORK TIMES:": ["GUEST", "M"],
  "KRISTOF:": ["GUEST", "M"],
  "KRISTOFF:": ["GUEST", "M"],
  "REP. DAVID CICILLINE (D-RI):": ["RECORDED", "M"],
  "BARRY BERKE, JUDICIARY COMMITTEE COUNSEL, DEMOCRATS:": ["RECORDED", "M"],
  "BERKE:": ["RECORDED", "M"],
  "COREY LEWANDOWSKI, FMR 2016 CAMPAIGN MANAGER FOR TRUMP:": ["RECORDED", "M"],
  "LEWANDOWSKI:": ["RECORDED", "M"],
  "JOYCE VANCE, FORMER FEDERAL PROSECUTOR:": ["GUEST", "F"],
  "VANCE:": ["GUEST", "F"],
  "JENNIFER RUBIN, OPINION WRITER, THE WASHINGTON POST:": ["GUEST", "F"],
  "RUBIN:": ["GUEST", "F"],
  "CHRIS HAYES:": ["ANCHOR", "M"],
  "HAYES:": ["ANCHOR", "M"],
  "CAROL LEONNIG, INVESTIGATIVE REPORTER, THE WASHINGTON POST (via telephone):": ["GUEST", "F"],
  "LEONNIG:": ["GUEST", "F"],
  "REPORTER:": ["IN-HOUSE", "X"],
  "REP. JOHN GARAMENDI (D-CA):": ["GUEST", "M"],
  "GARAMENDI:": ["GUEST", "M"],
  "AUDIE CORNISH, HOST:": ["ANCHOR", "F"],
  "CORNISH:": ["ANCHOR", "F"],
  "BRIAN WILLIAMS:": ["RECORDED", "M"],
  "ARI SHAPIRO, HOST:": ["ANCHOR", "M"],
  "SHAPIRO:": ["ANCHOR", "M"],
  "UNIDENTIFIED REPORTER:": ["RECORDED", "X"],
  "NANCY PELOSI:": ["RECORDED", "F"],
  "LINDSEY GRAHAM:": ["RECORDED", "M"],
  "HAKEEM JEFFRIES:": ["RECORDED", "M"],
  "CANDY LATSIS:": ["GUEST", "F"],
  "LATSIS:": ["GUEST", "F"],
  "TONY ORR:": ["GUEST", "M"],
  "ORR:": ["GUEST", "M"],
  "TODD BECKER:": ["GUEST", "M"],
  "BECKER:": ["GUEST", "M"],
  "CHRIS RUDDY:": ["GUEST", "M"],
  "RUDDY:": ["GUEST", "M"],
  "NELL GREENFIELDBOYCE, BYLINE:": ["IN-HOUSE", "F"],
  "GREENFIELDBOYCE:": ["IN-HOUSE", "F"],
  "JUAN CARLOS MORALES:": ["GUEST", "M"],
  "MORALES:": ["GUEST", "M"],
  "ALAN BOSS:": ["GUEST", "M"],
  "BOSS:": ["GUEST", "M"],
  "RYAN LUCAS, BYLINE:": ["IN-HOUSE", "M"],
  "LUCAS:": ["IN-HOUSE", "M"],
  "SUSAN DAVIS, BYLINE:": ["IN-HOUSE", "F"],
  "DAVIS:": ["IN-HOUSE", "F"],
  "SARA SEAGER:": ["GUEST", "F"],
  "KEVIN MCCARTHY:": ["RECORDED", "M"],
  "DAVID SCHAPER, BYLINE:": ["IN-HOUSE", "M"],
  "SCHAPER:": ["IN-HOUSE", "M"],
  "ROBERT SUMWALT:": ["GUEST", "M"],
  "SUMWALT:": ["GUEST", "M"],
  "JUDY GARLAND:": ["RECORDED", "F"],
  "GARLAND:": ["RECORDED", "F"],
  "RENEE ZELLWEGER:": ["RECORDED", "F"],
  "ZELLWEGER:": ["RECORDED", "F"],
  "UNIDENTIFIED ACTOR #1:": ["RECORDED", "X"],
  "UNIDENTIFIED ACTOR #2:": ["RECORDED", "X"],
  "UNIDENTIFIED ACTOR #3:": ["RECORDED", "X"],
  "UNIDENTIFIED ACTOR #4:": ["RECORDED", "X"],
  "JOSEPH MAGUIRE:": ["RECORDED", "M"],
  "BARBARA WALTERS:": ["RECORDED", "F"],
  "ALLISON AUBREY, BYLINE:": ["IN-HOUSE", "F"],
  "AUBREY:": ["IN-HOUSE", "F"],
  "ANNE SCHUCHAT:": ["GUEST", "F"],
  "SCHUCHAT:": ["GUEST", "F"],
  "RAJA KRISHNAMOORTHI:": ["GUEST", "M"],
  "KRISHNAMOORTHI:": ["GUEST", "M"],
  "DINA TEMPLE-RASTON, BYLINE:": ["IN-HOUSE", "F"],
  "TEMPLE-RASTON:": ["IN-HOUSE", "F"],
  "NEIL:": ["GUEST", "M"],
  "UNIDENTIFIED PERSON #1:": ["RECORDED", "X"],
  "UNIDENTIFIED PERSON #2:": ["RECORDED", "X"],
  "SCOTT PELLEY:": ["RECORDED", "M"],
  "ERIC ROSENBACH:": ["GUEST", "M"],
  "JUDY WOODRUFF:": ["ANCHOR", "F"],
  "WOODRUFF:": ["ANCHOR", "F"],
  "ANDREW PERSHING, CHIEF SCIENTIST, GULF OF MAINE RESEARCH INSTITUTE:": ["GUEST", "M"],
  "JEROME POWELL, FEDERAL RESERVE CHAIRMAN:": ["GUEST", "M"],
  "AVIGDOR LIEBERMAN, LEADER, YISRAEL BEITEINU PARTY (THROUGH TRANSLATOR):": ["GUEST", "M"],
  "XAVIER BECERRA (D), CALIFORNIA ATTORNEY GENERAL:": ["GUEST", "M"],
  "BINYAMIN APPELBAUM, THE NEW YORK TIMES:": ["GUEST", "M"],
  "BINYAMIN APPELBAUM:": ["GUEST", "M"],
  "YAMICHE ALCINDOR:": ["IN-HOUSE", "F"],
  "COL. TURKI AL-MALIKI, Saudi-led Coalition Spokesperson (through translator):": ["RECORDED", "M"],
  "COL. TURKI AL-MALIKI:": ["RECORDED", "M"],
  "HASSAN ROUHANI, Iranian President (through translator):": ["RECORDED", "M"],
  "HASSAN ROUHANI:": ["RECORDED", "M"],
  "ROBERT MALLEY, INTERNATIONAL CRISIS GROUP:": ["GUEST", "M"],
  "ROBERT MALLEY:": ["GUEST", "M"],
  "DANIELLE PLETKA, American Enterprise Institute:": ["GUEST", "F"],
  "DANIELLE PLETKA:": ["GUEST", "F"],
  "MILES O`BRIEN:": ["IN-HOUSE", "M"],
  "STEVE TRAIN, Lobsterman:": ["GUEST", "M"],
  "STEVE TRAIN:": ["GUEST", "M"],
  "ANDREW PERSHING:": ["GUEST", "M"],
  "JESICA WALLER, Maine Department of Marine Resources:": ["GUEST", "F"],
  "JESICA WALLER:": ["GUEST", "F"],
  "DAVID FIELDS, Bigelow Laboratory for Ocean Sciences:": ["GUEST", "M"],
  "DAVID FIELDS:": ["GUEST", "M"],
  "FRED DE SAM LAZARO:": ["IN-HOUSE", "M"],
  "MONYRATH YOS, Cambodian Ministry of Mines and Energy (through translator):": ["GUEST", "M"],
  "MONYRATH YOS (through translator):": ["GUEST", "M"],
  "LES KAUFMAN, Boston University:": ["GUEST", "M"],
  "LES KAUFMAN:": ["GUEST", "M"],
  "VANNAK HUN, Mother Nature Cambodia (through translator):": ["GUEST", "M"],
  "VANNAK HUN (through translator):": ["GUEST", "M"],
  "MOM MUT, Cambodia (through translator):": ["GUEST", "F"],
  "MOM MUT (through translator):": ["GUEST", "F"],
  "SAROM THORN, Cambodia (through translator):": ["GUEST", "F"],
  "SAROM THORN (through translator):": ["GUEST", "F"],
  "SREYNOCH SONG, Fish Seller (through translator):": ["GUEST", "F"],
  "SREYNOCH SONG (through translator):": ["GUEST", "F"],
  "RONNIE MENDEZ, Student:": ["RECORDED", "M"],
  "CARLOS WYLDE-GLADBACH, Student:": ["RECORDED", "M"],
  "MADI MARKS, Student:": ["RECORDED", "X"],
  "MADI MARKS:": ["RECORDED", "X"],
  "CHRISTOPHER JAIMES, Student:": ["RECORDED", "X"],
  "BRIAN JACKSON, Student:": ["RECORDED", "M"],
  "BRIAN JACKSON:": ["RECORDED", "M"],
  "WHITNEY HENTSCH, Student:": ["RECORDED", "X"],
  "ALEX PATE, Big Sky High School Student:": ["RECORDED", "X"],
  "FREJA LOVATO, Big Sky High School Student:": ["RECORDED", "X"],
  "TAYLOR BAYLISS, Big Sky High School Student:": ["RECORDED", "X"],
  "HALLE HAWKINS, Big Sky High School Student:": ["RECORDED", "X"],
  "JAYDEN BEED, Big Sky High School Student:": ["RECORDED", "X"],
  "ALLISON JACOBS, Student:": ["RECORDED", "X"],
  "ESTEFANY CORTES, Student:": ["RECORDED", "X"],
  "ALDRINE SSENTONGO, Student:": ["RECORDED", "X"],
  "KELSEY JOSEPHSON, Student:": ["RECORDED", "X"],
  "ANNETTE ROONEY, Student:": ["RECORDED", "X"],
  "JAMES THOMPSON, Student:": ["RECORDED", "X"],
  "GWYNETH COLLART, Student:": ["RECORDED", "X"],
  "RISCH:": ["GUEST", "M"],
  "RISCH:": ["GUEST", "M"],

}


let state = {
  data: [],
  dataAccessor : 0,
  dataYAccessor : 1,
  colorAccessor: 0 
}
const width = window.innerWidth * 0.7,
  height = 10000,
  margin = { top: 20, bottom: 50, left: 60, right: 40 },
  radius = 5;
d3.json("transcripts.json", d3.autoType).then(raw_data => {
  console.log("raw_data", raw_data);
  state.data = raw_data;
  init();
});


  const selectDataElement = d3.select("#selectData").on("change", function () {
    console.log("new selected region is", this.value);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    if(this.value == "Length of Speech"){
      state.dataAccessor = 0;
      state.dataYAccessor = 1;
    }else{
      state.dataAccessor = 3;
      state.dataYAccessor = 4;
    }
    draw(); // re-draw the graph based on this new selection
  });

  // add in dropdown options from the unique values in the data
  selectDataElement
    .selectAll("option")
    .data(["Length of Speech", "Length of Longest Word"]) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);

    const selectColorElement = d3.select("#selectColor").on("change", function () {
      console.log("new selected region is", this.value);
      // `this` === the selectElement
      // this.value holds the dropdown value a user just selected
      if(this.value == "Role"){
        state.colorAccessor = 0;
      }else{
        state.colorAccessor = 1;
      }
      draw(); // re-draw the graph based on this new selection
    });
  
    // add in dropdown options from the unique values in the data
    selectColorElement
      .selectAll("option")
      .data(["Role", "Gender"]) // unique data values-- (hint: to do this programmatically take a look `Sets`)
      .join("option")
      .attr("value", d => d)
      .text(d => d);
  


var svg = d3.select("#binder").append("svg")
  .attr("width", "100%")
  .attr("height", "5000px")


function init() {
  d3.select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('style', 'position: absolute; opacity: 0; color:white');
 
  svg.on('mousemove', function (event) {
    d3.select('#tooltip')
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY + 10) + 'px')
  });
  draw();
}
function draw(){
  let transcriptIds = state.data.map(x => x[0])
  xScale = d3
    .scalePoint().domain(transcriptIds).range([50, 1000])
  var xAxis = d3.axisTop(xScale);
  svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(4,30)") 
    .call(xAxis);
  colors = d3.scaleOrdinal(d3.schemeCategory10);
  let maxOfData = d3.max(state.data.map(x=>d3.max(x[1].map(i=>i[1][state.dataYAccessor])))) 
  maxOfData +=  d3.max(state.data.map(x=>d3.max(x[1].map(i=>i.length)))) * maxOfData/10
  maxOfData *= 4
  yScale = d3
    .scaleLinear()
    .domain([0, maxOfData])// d3.extent(state.data.filter(s=> state.services.reduce((p,service) => p || s[service],false)), d => getValue(d, state.selectedRater))[1]])
    .range([0, 10000]);
  for (let l = 0; l < state.data.length; l++) {
    let ourData = state.data[l];
    svg.selectAll("rect.trans" + l).data(ourData[1]).join("rect").attr("class", "trans" + l).attr("x", xScale(ourData[0]) - 24).attr("y", (d, i) => (yScale(d[1][state.dataYAccessor] - d[1][state.dataAccessor] + (i *  maxOfData/1000)) + 50) || 1)
      .attr("width", 50).attr("height", d => yScale(d[1][state.dataAccessor]) || 1).attr("fill", d => colors(speakerData[d[0]] && speakerData[d[0]][state.colorAccessor] || "undefined"))
      .on('mouseover', function (e,d) {
        if (d != null) {
          d3.select('#tooltip').style('opacity', .8).style("background-color", colors(speakerData[d[0]] && speakerData[d[0]][state.colorAccessor] || "undefined")).text(`${d[0]} ${speakerData[d[0]] && speakerData[d[0]][0] || "undefined"} ${speakerData[d[0]] && speakerData[d[0]][1] || "undefined"} Longest: ${d[1][2]}`)
        }
      }).on('mouseout', function () {
        d3.select('#tooltip').style('opacity', 0)
      });
;
  }
}
