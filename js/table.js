angular.module('helloApp')

.controller('TableCtrl', ['$scope', function($scope){
	$scope.last_key_code = null;
}])

.directive('scrollTable', ['$q', function($q){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs) {
			var table = {
				'row_max': 0,
				'selected_row': 0,
			}
			table.row_max = element.find('tbody tr').length;

			element[0].focus();
			element.on('keydown', function(e){
				console.log(e.keyCode);
				scope.last_key_code = e.keyCode;
				scope.$apply();
			});
			console.log(element.find('tbody tr').length);
			console.log(element.find('tbody tr'));
			console.log('hello world');
			console.log(element[0]);
		}
	};
}]);