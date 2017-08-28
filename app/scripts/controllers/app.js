'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:BlogCtrl
 * @description 
 * # BlogCtrl
 * Controller of the pApp
 */
angular.module('pApp')
  .controller('AppCtrl', function () {
   var vm = this;



   
    //======================================================================================
    //                                   * MENU RESPONSIVE *                                //
    //======================================================================================
        jQuery(document).ready(function ($) {
      jQuery('#main-nav').stellarNav({
        'theme': 'dark',
        'phoneBtn': '6890100',
        'locationBtn': "https://www.google.com.mx/maps/place/UES+Universidad+Estatal+de+Sonora/@29.0714662,-110.9571351,17z/data=!3m1!4b1!4m5!3m4!1s0x86ce844e084a0607:0xf9058e8eb5fc3269!8m2!3d29.0714662!4d-110.9549464",
      });
      if ($(window).width() < 742) {
        $("#imgDesktopMenu").css("display", "none");
        $("#hideCommingSoon1").css("display","none");
        $("#hideCommingSoon2").css("display","none");
        if($(".unique").on("click", function(){
            console.log("ventana cerrada")
            $("ul").css("display","none");
            $(".fa-plus").css("transform","rotate(90deg)");      

          })){
          
        }
        
      } else {
        $("#imgDesktopMenu").css("display", "block");
      }

  });


  
    //======================================================================================



    //======================================================================================
    //                      * FIREBASE RECUPERAR NOTICIA TRADICIONAL *                    //
    //======================================================================================
   
    //======================================================================================

   
  
    //BLOCK DECLARATION
  
});