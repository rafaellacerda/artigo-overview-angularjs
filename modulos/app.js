(function () {
    'use strict';

    // Como citado no post, teremos um módulo diferente para nossas diretivas.
    angular.module('componentes', []);

    // Aqui definimos o módulo padrão da aplicação. Sempre que vamos criar um módulo, devemos usar o [] que são os injetores.
    // O módulo externo ngRoute, só é necessário ser injetado uma vez em toda aplicação.
    angular.module('aplicacaoExemplo', ['ngRoute','componentes']);

})();