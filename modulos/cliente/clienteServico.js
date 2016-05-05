(function () {
    'use strict';

    function ClienteServico($http) {

       //Estou usando uma api criada no mongolab e é necessário enviar a APIKEY em todas as requisições.
        var apiKey = 'M5MMlEoEwwEobl_LyRxQgxmFIvQGEonF';

        function obterClientes() {
            return $http({
                url: 'https://api.mlab.com/api/1/databases/exemplos/collections/clientes',
                method: 'GET',
                params: { apiKey: apiKey }
            });
        };

        function incluirCliente(cliente) {
            return $http({
                url: 'https://api.mlab.com/api/1/databases/exemplos/collections/clientes',
                method: 'POST',
                params: { apiKey: apiKey },
                data: cliente
            });
        };

        function alterarCliente(cliente) {
            return $http({
                url: 'https://api.mlab.com/api/1/databases/exemplos/collections/clientes/' + cliente._id,
                method: 'PUT',
                params: { apiKey: apiKey },
                data: cliente
            });
        };

        function excluirCliente(id) {
            return $http({
                url: 'https://api.mlab.com/api/1/databases/exemplos/collections/clientes/' + id,
                method: 'DELETE',
                params: { apiKey: apiKey }
            });
        };

        //Aqui selecionamos as funções do serviço que queremos deixar "acessível" de fora.
        return {
            obterClientes: obterClientes,
            incluirCliente: incluirCliente,
            alterarCliente: alterarCliente,
            excluirCliente: excluirCliente
        }
    }

    ClienteServico.$inject = ['$http'];

    angular.module('aplicacaoExemplo')
        .service('ClienteServico', ClienteServico);

})();