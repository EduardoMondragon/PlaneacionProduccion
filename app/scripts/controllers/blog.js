'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:BlogCtrl
 * @description 
 * # BlogCtrl
 * Controller of the pApp
 */
angular.module('pApp')
  .controller('BlogCtrl', function ($timeout, $rootScope, $firebaseArray) {
   var vm = this;
   
   
    //======================================================================================
    //                        * FIREBASE RECUPERAR NOTICIA PRINCIPAL *                    //
    //======================================================================================
    var noticiaPrincipal = firebase.database().ref('blog/NoticiaPrincipal/unicaNoticia'); //
    noticiaPrincipal.on('value', function(snapshot){                                      //
      vm.noticia = snapshot.val();                                                        //
    });                                                                                   //
    //======================================================================================



    //======================================================================================
  //                        * FIREBASE RECUPERAR NOTICIA TRADICIONAL *                    //
    //======================================================================================
    var noticiaTradicional = firebase.database().ref('blog/NoticiaTradicional');
    vm.dataArray = $firebaseArray(noticiaTradicional);                                    //
    // noticiaTradicional.on('value', function(snapshot){                                    //
    //   vm.noticiaTradicional = snapshot.val();                                             //
    //   console.log(vm.noticiaTradicional);
    //   $rootScope.$apply();                                                                 //
    // });                                                                                   //
    //======================================================================================

   
  
    //BLOCK DECLARATION
    vm.newsPublicationDate = new Date();
     vm.selectNew = selectNew;

    function selectNew(newT){
      vm.currentNew = newT;
    }
});