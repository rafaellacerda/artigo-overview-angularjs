(function () {
    'use strict';

    function configRotas($routeProvider) {
        // O $routeProvider é usado para configurar as rotas, fazemos isso usando o .when(), 
        // Definimos a rota (url) e depois um objeto com o templateUrl (url da view) e qual nome do controller correspondente.
        $routeProvider
            .when('/', {
                templateUrl: '/app/modulos/cliente/cliente.html',
                /*
                    Definindo o controller na rota, não precisamos utilizar o ng-controller na view.
                    A grande vantagem disso é na manutenabilidade, pois se formos alterar nome dos controllers, está tudo em um único lugar,
                      não precisando ir em várias views alterar 
                */
                controller: 'ClienteController',
                controllerAs: 'vm'
            })
    }

    configRotas.$inject = ['$routeProvider'];

    angular.module('aplicacaoExemplo').config(configRotas, configRotas);
})();