﻿angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

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
});