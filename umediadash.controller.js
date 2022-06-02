angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

    $scope.hideColorSliders = true;
    $scope.hideDetailSliders = true;
    $scope.hideLightSliders = true;

    $scope.getMediaLink = function () {
        if ($scope.mediaId == undefined) {
            alert('Please enter an Image ID')
        } else {
            mediaResource.getById($scope.mediaId).then(function (media) {
                jquery.getLink(media.mediaLink); //function call to global jquery function to pass link to media library
                jquery.imageName = media.name + '-edit'; //holds the file name for local downloads
            });
        }
    }

    //---------------Nix work---------------//
    $scope.showColorSliders = function () {
        $scope.hideColorSliders = !$scope.hideColorSliders;
        var img = document.getElementById("colorToggle");   
        if (!$scope.hideColorSliders) {
            img.setAttribute("class", "rotated-image");
        }
        else {
            img.setAttribute("class", "no-rotated-image");
        }  
    }

    $scope.showDetailSliders = function () {
        $scope.hideDetailSliders = !$scope.hideDetailSliders;
        var img = document.getElementById("detailToggle");
        if (!$scope.hideDetailSliders) {
            img.setAttribute("class", "rotated-image");
        }
        else {
            img.setAttribute("class", "no-rotated-image");
        }  
    }

    $scope.showLightSliders = function () {
        $scope.hideLightSliders = !$scope.hideLightSliders;
        var img = document.getElementById("lightToggle");
        if (!$scope.hideLightSliders) {
            img.setAttribute("class", "rotated-image");
        }
        else {
            img.setAttribute("class", "no-rotated-image");
        }  
    }

});