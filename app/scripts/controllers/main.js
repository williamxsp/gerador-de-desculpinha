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
