angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;
    $scope.hideSlider = true;

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
        $scope.hideSlider = !$scope.hideSlider;
    }

});