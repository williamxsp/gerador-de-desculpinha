angular.module('geradorApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<a href=\"http://twitter.com/williamxsp\" target=\"_BLANK\">@williamxsp</a>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h3>Preciso de uma desculpinha</h3> <select class=\"form-control text-center\" name=\"tipoDesculpa\" ng-options=\"td.id as td.descricao for td in tipoDesculpas\" ng-model=\"tipoDesculpaSelecionado\"> </select> <br> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\" ng-click=\"selecionarDesculpa()\">Gerar <span class=\"glyphicon glyphicon-refresh\"></span></a></p> </div> <div class=\"row desculpa-selecionada text-center\" ng-if=\"desculpaSelecionada != ''\"> <p class=\"lead text-center\"><span>{{desculpaSelecionada}}</span> <button id=\"desculpa\" ng-click=\"copiar()\" data-clipboard-text=\"{{desculpaSelecionada}}\" class=\"btn btn-xs\" ng-class=\"{'btn-default':copiado, 'btn-danger':!copiado}\">{{copiado ? \"Copiado!\" : \"Copiar\"}}</button> </p> </div>"
  );

}]);
