(function () {
    'use strict';

    function ClienteController(clienteServico) {
        var vm = this;

        vm.cliente;
        vm.alterarVisivel;
        vm.listaClientes = [];

        vm.inicializarTela = function () {
            vm.cliente = {};
            vm.alterarVisivel = false;

            clienteServico.obterClientes()
            .then((item) => {
                vm.listaClientes = item.data;
            })
            .catch(() => {
                alert('Não foi possível obter seus clientes!');
            });
        };

        vm.incluirCliente = function (cliente) {

            if (clientePreenchido(cliente)) {
                alert('Campo nome é obrigatório');

                return;
            }

            cliente._id = obterIDAtual();

            clienteServico.incluirCliente(cliente)
            .then(() => {
                alert('Cliente salvo com sucesso!');
                vm.inicializarTela();
            })
            .catch(() => {
                alert('Não foi possível salvar cliente!');
            });
        };

        vm.alterarCliente = function (cliente) {

            if (clientePreenchido(cliente)) {
                alert('Necessário preencher todos os campos do cliente');

                return;
            }

            clienteServico.alterarCliente(cliente)
            .then(() => {
                alert('Cliente alterado com sucesso!');
                vm.inicializarTela();
            })
            .catch(() => {
                alert('Não foi possível alterar cliente!');
            });
        };

        vm.excluirCliente = function (cliente) {

            clienteServico.excluirCliente(cliente._id)
            .then(() => {
                alert('Cliente excluído com sucesso!');
                vm.inicializarTela();
            })
            .catch(() => {
                alert('Não foi possível excluir cliente!');
            });
        };

        vm.cancelar = function () {
            vm.alterarVisivel = false;
            vm.cliente = {};
        };

        //O angular possui uma forma bem melhor para validar campos preenchidos, mas isso fica para um próximo artigo.
        function clientePreenchido(cliente) {
            if (cliente.nome)
                return false;

            return true;
        };

        function obterIDAtual() {
            return (vm.listaClientes.length + 1).toString();
        };

        vm.inicializarTela();
    }

    ClienteController.$inject = ['ClienteServico'];

    angular.module('aplicacaoExemplo')
        .controller('ClienteController', ClienteController);

})();