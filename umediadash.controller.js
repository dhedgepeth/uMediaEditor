angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;
    $scope.hideColorSliders = true;
    $scope.hideDetailSliders = true;

    $scope.getMediaLink = function () {
        if ($scope.mediaId == undefined) {
            alert('Please enter an Image ID')
        } else {
            mediaResource.getById($scope.mediaId).then(function (media) {
                jquery.getLink(media.mediaLink); //function call to global jquery function
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