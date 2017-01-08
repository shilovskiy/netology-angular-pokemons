/**
 * Created by Олег Шиловский on 08.01.2017.
 */

//http://pokeapi.co/api/v2/berry/?limit=5
angular
    .module('PokemonApp')
    .factory('BerriesService', function($resource, $http) {

        return $resource('http://pokeapi.co/api/v2/berry/:bid', {
            bid: '@bid'
        }, {
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: function(responseData) {
                    return angular.fromJson(responseData).results;
                }
            }
        })
    });
