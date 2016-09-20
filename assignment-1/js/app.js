(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.feedbackResult = "";

    $scope.feedbackFunction = function () {
        var string = $scope.lunchNames || " ";
        $scope.feedbackResult = countWords(string);
    };

    function countWords(string){
        var count = 0;
        var t = true;
        var trimmed = string.trim();

        if(trimmed == ""){
            $scope.resultStyle = {"color" : "red"};
            $scope.boxStyle = {"border": "2px solid red"};
            return "Please enter data first"
        }
        for (var i = 0; i < string.length; i++){
            if (string[i] != "," && string[i] != " "){
                if (t)
                    count += 1;
                t = false;
            };
            if (string[i] == ","){
                t = true;
            };
        };

        if (count == 0){
            $scope.resultStyle = {"color" : "red"};
            $scope.boxStyle = {"border": "2px solid red"};
            return "Please enter data first";
        }
        else if (count <= 3){
            $scope.resultStyle = {"color" : "green"};
            $scope.boxStyle = {"border": "2px solid green"};
            return "Enjoy!"
        }
        else if (count > 3){
            $scope.resultStyle = {"color" : "green"};
            $scope.boxStyle = {"border": "2px solid green"};
            return "Too much!";
        }
        else
            return "Invalid input";
    };
}
})();