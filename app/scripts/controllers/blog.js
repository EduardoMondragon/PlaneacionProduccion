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
   vm.switchLoader = false;
   
    //======================================================================================
    //                       * MOBILE VIEW - CARD AND LOADER SIZE  *                      //
    //======================================================================================
    $(document).ready(function($){                                                        //
        if($(window).width() < 724){                                                      //
          $("#loader").css({                                                              //
            "margin-left":"33%",                                                          //
            "margin-top": "50%"                                                           //
          });                                                                             //
          $(".myContainer").css({                                                         //
            "margin":"10px",                                                              //
          });                                                                             //
          $(".modalImage").css("width","100%");                                           //
        }                                                                                 //
    });                                                                                   //
    //======================================================================================


    //======================================================================================
    //                        * FIREBASE RECUPERAR NOTICIA PRINCIPAL *                    //
    //======================================================================================
    var noticiaPrincipal = firebase.database().ref('blog/NoticiaPrincipal/unicaNoticia'); //
    noticiaPrincipal.on('value', function(snapshot){                                      //
      vm.noticia = snapshot.val();                                                        //
      /*loader blog*/                                                                     //
      do {                                                                                //
        $('#loader').addClass("hide-loaderBlog");                                         //
        $('#backgroundLoaderBlog').addClass("hide-loaderBlog");                           //
      }                                                                                   //
      while(!vm.noticia);                                                                 //
      vm.switchLoader = !vm.switchLoader;                                                 //
    });                                                                                   //
    //======================================================================================



    //======================================================================================
    //                      * FIREBASE RECUPERAR NOTICIA TRADICIONAL *                    //
    //======================================================================================
    var noticiaTradicional = firebase.database().ref('blog/NoticiaTradicional');          //
    vm.dataArray = $firebaseArray(noticiaTradicional);                                    //
    // noticiaTradicional.on('value', function(snapshot){                                 //
    //   vm.noticiaTradicional = snapshot.val();                                          //
    //   console.log(vm.noticiaTradicional);                                              //
    //   $rootScope.$apply();                                                             //
    // });                                                                                //
    //======================================================================================

   
  
    //BLOCK DECLARATION
    vm.newsPublicationDate = new Date();
     vm.selectNew = selectNew;

    function selectNew(newT){
      vm.currentNew = newT;
    }
});