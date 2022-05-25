angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

    $scope.pickImg = function () {         
        mediaResource.getById($scope.input).then(function (media) {
            $scope.img = '<img src="' + media.mediaLink + '" />'
        });
    }
});