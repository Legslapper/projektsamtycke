google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Årskurs', 'Ålderskillnad'],
    [ 1,      7],
    [ 2,      6],
    [ 3,     5],
    [ 1,      4],
    [ 2,      3],
    [ 3,    2]
  ]);

  var options = {
    title: 'Årskurs vs Åldersskillnad',
    hAxis: {title: 'Årskurs', minValue: 0, maxValue: 3},
    vAxis: {title: 'Åldersskillnad', minValue: 0, maxValue: 7},
    legend: 'none'
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
