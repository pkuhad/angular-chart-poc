angular.module('helloApp')

.controller('TableCtrl', ['$scope', function($scope){
	$scope.take_action = function(row_args){
		console.log(row_args);
		alert('hi');
	}
}])

.directive('scrollTable', ['$q', function($q){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			scrollTableCallback: '&',
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs) {
			var ROW_START_INDEX = 0;
			var table = {
				'row_max': 0,
				'selected_row': ROW_START_INDEX,
				'row_elements': element.find('tbody tr'),
			}

			//Init
			table.row_max = element.find('tbody tr').length;
			table.row_elements.eq(table.selected_row).addClass('selected-row');
			table.row_args = table.row_elements.eq(table.selected_row).data('row-args');
			element[0].focus();


			//Event Handlers
			element.on('keydown', function(e){
				if (e.keyCode == 40){
					if (table.selected_row != table.row_max-1){
						table.row_elements.eq(table.selected_row).removeClass('selected-row');
						table.selected_row += 1;
						table.row_args = table.row_elements.eq(table.selected_row).data('row-args');
						table.row_elements.eq(table.selected_row).addClass('selected-row');
					}
				}
				else if (e.keyCode == 38){
					if (table.selected_row !=ROW_START_INDEX){
						table.row_elements.eq(table.selected_row).removeClass('selected-row');
						table.selected_row -= 1;
						table.row_args = table.row_elements.eq(table.selected_row).data('row-args');
						table.row_elements.eq(table.selected_row).addClass('selected-row');
					}
				}
				else if (e.keyCode == 13){
					console.log(table.row_args);
					scope.scrollTableCallback({row_args: table.row_args});
				}
				console.log(e.keyCode);
			});
			console.log(element.find('tbody tr').length);
		}
	};
}]);