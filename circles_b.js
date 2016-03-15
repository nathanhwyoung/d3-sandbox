//Width and height
var w = 1000;
var h = 100;

var dataset = [5, 10, 15, 20, 25];

// creates a variable reference to the body dom object
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

// creates empty circle references for all data elements, binds the dataset
// with those elements, and adds them to the DOM
var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
        return (i * 50) + 25;
    })
    .attr("cy", h / 2)
    .attr("r", function(d) {
        return d;
    })
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", function(d) {
        return d / 2;
    });
