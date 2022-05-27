angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;
    $scope.hideColorSliders = true;
    $scope.hideDetailSliders = true;

    $scope.pickImg = function () {

        if ($scope.input == undefined) {
            alert('Please enter an Image ID')
        } else {
            mediaResource.getById($scope.input).then(function (media) {
                console.log(media.mediaLink);
                $scope.img = '<img src="' + media.mediaLink + '" />' //create img tag with media source
            });
        }
    }

    $scope.showColorSliders = function () {
        $scope.hideColorSliders = !$scope.hideColorSliders;
    }

    $scope.showDetailSliders = function () {
        $scope.hideDetailSliders = !$scope.hideDetailSliders;
    }

});