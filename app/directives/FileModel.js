import angular from 'angular';

const app = angular.module('app');

app.directive('fileModel', [ '$parse', $parse => {
    return {
      // A means this directive can only be used as attribute of html tag
      // Defaults to EA (Element | Attribute)
      restrict: 'A',
      link(scope, element, attrs) {

        // Parses to which user set variable to set values
        const model = $parse(attrs.fileModel);
        const modelSetter = model.assign;

        element.bind('change', () => {
          scope.$apply(() => {
            if (attrs.multiple) {
              modelSetter(scope, element[0].files);
            }
            else {
              modelSetter(scope, element[0].files[0]);
            }
          });
        });
      }
    };
  }
]);