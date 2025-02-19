/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {
  "use strict";

  // Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".card-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999,
  });
  $(".connectedSortable .card-header, .connectedSortable .nav-tabs-custom").css(
    "cursor",
    "move"
  );

  // jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999,
  });

  // bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  $(".daterange").daterangepicker(
    {
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
      startDate: moment().subtract(29, "days"),
      endDate: moment(),
    },
    function (start, end) {
      window.alert(
        "You chose: " +
          start.format("MMMM D, YYYY") +
          " - " +
          end.format("MMMM D, YYYY")
      );
    }
  );

  /* jQueryKnob */
  $(".knob").knob();

  // jvectormap data
  var visitorsData = {
    IR: 400, //Iran
    SA: 400, //Saudi Arabia
    IQ: 1000, //Iraq
    PK: 500, //Pakistan
    SY: 760, //Syria
    AF: 300, //Afghanistan
    YE: 700, //Yemen
    TM: 600, //Turkmenistan
    TJ: 800, //Tajikistan
    TR: 320, //Turkey
    RU: 400, //Russia
    CN: 500, //China
    LB: 1500, //Lebanon
    EG: 1000, //Egypt
    OM: 300, //Oman
  };
  // World map by jvectormap
  $("#world-map").vectorMap({
    map: "world_mill_en",
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "rgba(255, 255, 255, 0.7)",
        "fill-opacity": 1,
        stroke: "rgba(0,0,0,.2)",
        "stroke-width": 1,
        "stroke-opacity": 1,
      },
    },
    series: {
      regions: [
        {
          values: visitorsData,
          scale: ["#ffffff", "#0154ad"],
          normalizeFunction: "polynomial",
        },
      ],
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ": " + visitorsData[code] + " بازدید جدید");
    },
  });

  // Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $("#sparkline-1").sparkline(myvalues, {
    type: "line",
    lineColor: "#92c1dc",
    fillColor: "#ebf4f9",
    height: "50",
    width: "80",
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $("#sparkline-2").sparkline(myvalues, {
    type: "line",
    lineColor: "#92c1dc",
    fillColor: "#ebf4f9",
    height: "50",
    width: "80",
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $("#sparkline-3").sparkline(myvalues, {
    type: "line",
    lineColor: "#92c1dc",
    fillColor: "#ebf4f9",
    height: "50",
    width: "80",
  });

  // The Calender
  $("#calendar").datepicker();

  // SLIMSCROLL FOR CHAT WIDGET
  $("#chat-box").slimScroll({
    height: "250px",
  });

  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element: "revenue-chart",
    resize: true,
    data: [
      { y: "1399 Q1", item1: 2666, item2: 2666 },
      { y: "1399 Q2", item1: 2778, item2: 2294 },
      { y: "1399 Q3", item1: 4912, item2: 1969 },
      { y: "1399 Q4", item1: 3767, item2: 3597 },
      { y: "1400 Q1", item1: 6810, item2: 1914 },
      { y: "1400 Q2", item1: 5670, item2: 4293 },
      { y: "1400 Q3", item1: 4820, item2: 3795 },
      { y: "1400 Q4", item1: 15073, item2: 5967 },
      { y: "1401 Q1", item1: 10687, item2: 4460 },
      { y: "1401 Q2", item1: 8432, item2: 5713 },
    ],
    xkey: "y",
    ykeys: ["item1", "item2"],
    labels: ["فقره ۱", "فقره ۲"],
    lineColors: ["#495057", "#007cff"],
    hideHover: "auto",
  });
  var line = new Morris.Line({
    element: "line-chart",
    resize: true,
    data: [
      { y: "1399 Q1", item1: 2666 },
      { y: "1399 Q2", item1: 2778 },
      { y: "1399 Q3", item1: 4912 },
      { y: "1399 Q4", item1: 3767 },
      { y: "1400 Q1", item1: 6810 },
      { y: "1400 Q2", item1: 5670 },
      { y: "1400 Q3", item1: 4820 },
      { y: "1400 Q4", item1: 15073 },
      { y: "1401 Q1", item1: 10687 },
      { y: "1401 Q2", item1: 8432 },
    ],
    xkey: "y",
    ykeys: ["item1"],
    labels: ["فقره ۱"],
    lineColors: ["#efefef"],
    lineWidth: 2,
    hideHover: "auto",
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10,
  });

  // Donut Chart
  var donut = new Morris.Donut({
    element: "sales-chart",
    resize: true,
    colors: ["#007bff", "#dc3545", "#28a745"],
    data: [
      { label: "فروش بارگیری برخط", value: 12 },
      { label: "فروش حضوری", value: 30 },
      { label: "فروش رایانامه‌ای", value: 20 },
    ],
    hideHover: "auto",
  });

  // Fix for charts under tabs
  $(".box ul.nav a").on("shown.bs.tab", function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });
});
