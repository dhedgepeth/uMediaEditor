angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

    //by default the menues are closed
    $scope.hideColorSliders = true;
    $scope.hideDetailSliders = true;
    $scope.hideLightSliders = true;

    $scope.getMediaLink = function () {
        if ($scope.mediaId == undefined) {
            alert('Please enter an Image ID')
        } else {
            mediaResource.getById($scope.mediaId).then(function (media) {
                jquery.getLink(media.mediaLink, media.name + '-edit.png'); //function call to global jquery function to pass link to media library
            });
        }
    }

    //---------------Nix work---------------//
    $scope.showColorSliders = function () {
        $scope.hideColorSliders = !$scope.hideColorSliders;
        var img = document.getElementById("colorToggle");   
        if (!$scope.hideColorSliders) { // if the slider menu is opened rotate img
            img.setAttribute("class", "rotated-image");
        }
        else { // else rotate back
            img.setAttribute("class", "no-rotated-image");
        }  
    }

    $scope.showDetailSliders = function () {
        $scope.hideDetailSliders = !$scope.hideDetailSliders;
        var img = document.getElementById("detailToggle");
        if (!$scope.hideDetailSliders) { // if the slider menu is opened rotate img
            img.setAttribute("class", "rotated-image");
        }
        else { // else rotate back
            img.setAttribute("class", "no-rotated-image");
        }  
    }

    $scope.showLightSliders = function () {
        $scope.hideLightSliders = !$scope.hideLightSliders;
        var img = document.getElementById("lightToggle");
        if (!$scope.hideLightSliders) { // if the slider menu is opened rotate img
            img.setAttribute("class", "rotated-image");
        }
        else { // else rotate back
            img.setAttribute("class", "no-rotated-image");
        }  
    }

});