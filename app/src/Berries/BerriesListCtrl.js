/**
 * Created by Олег Шиловский on 08.01.2017.
 */
//BerriesListCtrl
'use strict';

pokemonApp.controller('BerriesListCtrl', function($scope, BerriesService) {

    $scope.berries = BerriesService.query();
});