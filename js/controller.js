angular.module('helloApp')

.controller('IndexCtrl', ['$scope', function($scope){
	$scope.chart = {};
	$scope.chart.data = {
		series: ['Sales', 'Income', 'Expense'],
		data : [
		{
			x : "Jan",
			y: [100,210, 384],
			tooltip:"this is tooltip",
			something:'something'
		},
		{
			x : "Feb",
			y: [300, 289, 456]
		},
		{
			x : "March",
			y: [351, 170, 255]
		},
		{
			x : "April",
			y: [54, 341, 879]
		},
		{
			x : "May",
			y: [100,210, 384],
			tooltip:"this is tooltip"
		},
		{
			x : "June",
			y: [300, 289, 456]
		},
		{
			x : "July",
			y: [351, 170, 255]
		},
		{
			x : "August",
			y: [54, 341, 879]
		}
		]     
	};

	$scope.chart.chartType = 'line';

	$scope.funcFirst = function(){
		alert('hello world');
	};

	$scope.chart.config = {
		labels: false,
		title : "Rupees",
		legend : {
			display: true,
			position:'right'
		},
		click : function(d) {
			console.log(d);
			var func = d.entityName;
			$scope.$apply($scope[func]());
		},
		mouseover : function(d) {
		},
		mouseout : function(d) {
		},
		colors: [
            '#5BC876',
            '#87D685',
            '#C14446',
            'rgb(70,132,238)',
            'rgb(73,66,204)',
            'rgb(0,128,0)'
         ]
	};
}]);