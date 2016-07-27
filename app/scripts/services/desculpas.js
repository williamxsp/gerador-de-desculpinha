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
