google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
 ['Год', 'Собственные', 'Заёмные'],
 ['2018', 28735400, 17504184],
 ['2020', 19520000, 8223000],
 ['2019', 12310000, 4780986]
]);
var options = {
 title: '',
 hAxis: {title: ''},
 vAxis: {title: ''},
 legend: { position: "bottom" }
};
var chart = new google.visualization.ColumnChart(document.getElementById('oil'));
chart.draw(data, options);
}