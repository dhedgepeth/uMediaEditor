angular.module("umbraco").controller("UMediaDashController", function ($scope, mediaResource) {
    var vm = this;

    /* variables used to hide sliders in ng-hide directive
     * all sliders are hidden when the page is first loaded */
    $scope.hideColorSliders = true;
    $scope.hideDetailSliders = true;
    $scope.hideLightSliders = true;

    $('#areaa').on('input', function () {
        if ($('#areaa').val().length > 1) { //checks that the input is a valid length before handling as an image link
            let stringArr = $('#areaa').val().split('/'); //splits link by '/', image id is always last in the array
            console.log(stringArr);

            mediaResource.getById(stringArr[stringArr.length - 1]).then(function (media) {
                jquery.getLink(media.mediaLink, media.name + '-edit.png'); //function call to global jquery function to pass link and name of media item
            });
        }
        $('#areaa').val(''); //reset the input to default value
    });

    /* show and hide sliders */
    $scope.showColorSliders = function () {
        $scope.hideColorSliders = !$scope.hideColorSliders;
        $('#colorToggle').toggleClass('no-rotated-image rotated-image');
    }

    $scope.showDetailSliders = function () {
        $scope.hideDetailSliders = !$scope.hideDetailSliders;
        $('#detailToggle').toggleClass('no-rotated-image rotated-image');
    }

    $scope.showLightSliders = function () {
        $scope.hideLightSliders = !$scope.hideLightSliders;
        $('#lightToggle').toggleClass('no-rotated-image rotated-image');
    }

});