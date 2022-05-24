angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

    $scope.pickImg = function () { 
        var y;
        
        mediaResource.getById($scope.input).then(function (media) {
            y = media.mediaLink;
            $scope.img = '<img src="' + media.mediaLink + '" />'
        });
    }
});