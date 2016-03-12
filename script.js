var height = 400, width = 600, barWidth = 50, barOffset = 5;

var bardata = [];

for(var i = 0; i<50; i++){
  bardata.push(Math.round(Math.random() * 30) + 5);
}

var colors = d3.scale.linear()
              .domain([0, d3.max(bardata)])
              .range(['#ffb832', '#c61c6f']);

var yScale = d3.scale.linear()
              .domain([0, d3.max(bardata)])
              .range([0, height]);

var xScale = d3.scale.ordinal()
             .domain(d3.range(0, bardata.length))
             .rangeBands([0, width]);

var tooltip = d3.select('body').append('div')
  .style('position', 'absolute')
  .style('padding', '4px 6px')
  .style('background', 'white')
  .style('opacity', 0)
  .style('font-family', 'sans-serif')

var myChart = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
      .style('fill', colors)
      .attr('width', xScale.rangeBand())
      .attr('height', 0)
      .attr('x', function(d, i){
         return xScale(i);
      })
      .attr('y', height)
    .on('mouseover', function(d){

      tooltip.transition()
        .style('opacity', 1);
      tooltip.html(d)
        .style('left', (d3.event.pageX - 35)+'px')
        .style('top', (d3.event.pageY - 30)+'px');

      d3.select(this).style('opacity', 0.5);
    })
    .on('mouseout', function(d){
      d3.select(this).style('opacity', 1);
    })

myChart.transition()
  .attr('height', function(d){
    return yScale(d);
  })
  .attr('y', function(d){
    return height - yScale(d);
  })
  .delay(function(d, i){
  return i*20;
})
  .duration(1000)
  .ease('elastic')

d3.select('svg').on('mouseout', function(){
  tooltip.transition().style('opacity', 0);
});
