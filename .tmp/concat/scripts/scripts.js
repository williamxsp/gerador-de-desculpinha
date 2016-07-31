'use strict';

/**
 * @ngdoc overview
 * @name geradorApp
 * @description
 * # geradorApp
 *
 * Main module of the application.
 */
angular
  .module('geradorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name geradorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geradorApp
 */
angular.module('geradorApp')
  .controller('MainCtrl', ['$scope', 'desculpas', function ($scope, desculpas) {
  	$scope.tipoDesculpas = [
  	{
  		id:0,
  		descricao:"Para não sair de Casa"
  	},
  	{
  		id:1,
  		descricao:"Para faltar no trabalho"
  	}];

  	$scope.tipoDesculpaSelecionado = 0;

  	$scope.desculpaSelecionada = "";

  	$scope.selecionarDesculpa = function(){
  		var tipoDesculpa = desculpas.getDesculpas()[$scope.tipoDesculpaSelecionado];
  		$scope.desculpaSelecionada = tipoDesculpa[Math.floor(Math.random()*tipoDesculpa.length)];
  		$scope.copiado = false;
  	}

  	$scope.copiado = false;

  	$scope.copiar = function(){
  		var clipboard = new Clipboard('#desculpa');
  		$scope.copiado = true;

		clipboard.on('success', function(e) {
		    console.info('Action:', e.action);
		    console.info('Text:', e.text);
		    console.info('Trigger:', e.trigger);

		    e.clearSelection();
		});

  	}
   
  }]);

'use strict';

/**
 * @ngdoc function
 * @name geradorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geradorApp
 */
angular.module('geradorApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc service
 * @name geradorApp.desculpas
 * @description
 * # desculpas
 * Factory in the geradorApp.
 */
angular.module('geradorApp')
  .factory('desculpas', function () {

    var desculpas = [["Eu tenho um tempo de descanso programado.",
"UHH O TRABALHO FOI TÃO DESGASTANTE.",
"Tenho que fazer yoga. Namastê, fdp.",
"Acho que eu tenho que ficar em casa e ter uma crise existencial.",
"Tem muita TV para ser assistida.",
"… Não, é sério. Eu tenho que me atualizar até domingo.",
"Estou exatamente no meio deste capítulo.",
"… Tá bom, eu não estou, mas estou TENTANDO estar exatamente no meio deste capítulo.",
"Eu tenho um encontro quente com um pedaço de pizza.",
"Eu tenho que abraçar meu gatinho de pelúcia até me sentir melhor.",
"Hum, internet? Talvez você tenha ouvido falar sobre isso?",
"Se eu não lavar a roupa, eu vou literalmente ter que sair de casa pelado amanhã.",
"Meu amigo precisa de um ombro para chorar.",
"Vou passar um tempinho na banheira com espuma!",
"Tenho que organizar minha coleção.",
"Tenho que comer toda a comida que tenho. Pode demorar um pouco.",
"Netflix.",
"Estou devendo um Tempo Para Mim Mesmo.",
"Eu tenho que treinar uma jogada.",
"Estou construindo uma fortaleza.",
"Que tal: ‘EU SIMPLESMENTE NÃO QUERO’??"],
["Oi chefe, quero ir hoje não tá!?",
"O Marcos não vai poder ir hoje, ele morreu, mas ressuscita amanhã.\
– Você acha que eu acredito nisso?\
–  Eu também fiquei boba, mas o médico disse que esse é o segundo caso no mundo.",
"No dia que você me pagar um salário justo, eu volto!",
"Briguei com todos os motoristas de ônibus e nenhum quis parar pra mim.",
"Meu cachorro fez uma carinha de triste quando fui sair que eu até chorei.",
"Acordei com Ergofobia hoje, procura no google que você vai entender.",
"Minha filha arrancou o primeiro dente de leite hoje e vou ficar aqui por precaução.",
"O jogo do Brasil vai passar bem no meio do expediente.",
"Aluguei três filmes ontem e não deu pra ver nenhum ainda.",
"O dia do trabalho é só 1º de maio."]];


    // Public API here
    return {
      getDesculpas: function () {
        return desculpas;
      }
    };
  });

angular.module('geradorApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<a href=\"http://twitter.com/williamxsp\" target=\"_BLANK\">@williamxsp</a>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h3>Preciso de uma desculpinha</h3> <select class=\"form-control text-center\" name=\"tipoDesculpa\" ng-options=\"td.id as td.descricao for td in tipoDesculpas\" ng-model=\"tipoDesculpaSelecionado\"> </select> <br> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\" ng-click=\"selecionarDesculpa()\">Gerar <span class=\"glyphicon glyphicon-refresh\"></span></a></p> </div> <div class=\"row desculpa-selecionada text-center\" ng-if=\"desculpaSelecionada != ''\"> <p class=\"lead text-center\"><span>{{desculpaSelecionada}}</span> <button id=\"desculpa\" ng-click=\"copiar()\" data-clipboard-text=\"{{desculpaSelecionada}}\" class=\"btn btn-xs\" ng-class=\"{'btn-default':copiado, 'btn-danger':!copiado}\">{{copiado ? \"Copiado!\" : \"Copiar\"}}</button> </p> </div>"
  );

}]);
