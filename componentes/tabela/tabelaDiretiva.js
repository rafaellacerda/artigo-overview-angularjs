(function () {
    'use strict';

    function ntTabela() {
        var diretiva = {
            //O Restrict é quem diz o tipo que sua diretiva será, ele é necessário e há quatro possíveis argumentos que podem ser passados ​​para ele:
            //E: Elemento. Exemplo de uso: <minha-diretiva> </minha-diretiva >
            //A : Atributo. Exemplo de uso: <div minha-diretiva ></ div>
            //C : Class. Exemplo de uso: <div class = minha-diretiva "> </ div>
            //M : Comentário. Exemplo de uso: <- directive: minha-diretiva ->
            //link: A função de ligação é responsável por adicionar ouvintes de eventos e atualizar o dom.
            restrict: 'E',
            scope: {
                dados: '=',
                datasource: '=',
                alterar:'='
            },
            replace: false,
            link: function ($scope, elem, attrs, ngModel) {
               // Qualquer interação com DOM, deve ser feita aqui dentro.
            },
            controller: function ($scope) {
                $scope.selecionar = function (item) {
                    $scope.dados = item;
                    $scope.alterar = true;
                }
            },
            template: '<table class="table table-bordered table-responsive table-hover">' +
                        '<thead>' +
                            '<tr>' +
                                '<th>Código</th>' +
                                '<th>Nome</th>' +
                                '<th>Idade</th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody>' +
                        '<tr ng-repeat="item in datasource track by $index" ng-click="selecionar(item)">' +
                            '<td>{{item._id}}</td>' +
                            '<td>{{item.nome}}</td>' +
                            '<td>{{item.idade}}</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>'
        }
        return diretiva;
    }

    angular.module('componentes')
            .directive('ntTabela', ntTabela);
})();