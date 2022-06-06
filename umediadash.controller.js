angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

    //by default the menues are closed
    $scope.hideColorSliders = true;
    $scope.hideDetailSliders = true;
    $scope.hideLightSliders = true;

    $('#areaa').on('input', function () {
        console.log('angular?');

        let stringArr = $('#areaa').val().split('/');
        console.log(stringArr);

        mediaResource.getById(stringArr[stringArr.length - 1]).then(function (media) {
            console.log(media);
            jquery.getLink(media.mediaLink, media.name + '-edit.png'); //function call to global jquery function to pass link and name of media item
        });
        $('#areaa').val('');
    });

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