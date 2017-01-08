angular
    .module('PokemonApp')
    .factory('PokemonsService', function($resource, $http) {

        //return $resource('https://api.backendless.com/v1/data/pokemon/:pokemonId/', {
        return $resource('http://pokeapi.co/api/v2/pokemon', {
            pokemonId: '@pokemonId'
        }, {
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: function(responseData) {
                    //return angular.fromJson(responseData).results;
                    return angular.fromJson(responseData).data;
                }
            },
            update: {
                method: 'PUT'
            }
        })
    });
