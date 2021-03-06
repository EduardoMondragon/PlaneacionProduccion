'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ScgCtrl
 * @description
 * # ScgCtrl
 * Controller of the testApp
 */
angular.module('pApp')
    .controller('ScgCtrl', function () {
        var vm = this;
        vm.language = false;
        $(document).ready(function ($) {
            if ($(window).width() < 724) {
                 $(".flagsSgc").css({
                    "margin-right":"-20px",
                    "padding-left":"10px",
                    "width":"30px",
                    "margin-top":"-4px"
                });
                $("#flags").removeClass("pull-right")
                $(".banner").css({
                    "margin": "0px",
                    "margin-top": "3px",
                    "padding": "14px",
                    " width":"30px"
                });
                $("#imgMision").removeClass("visibilityHidden").addClass("sgcImages");
                $("#textMision").removeClass("visibilityHidden").addClass("colXs6Responsive sgcTextImages");
                $("#imgVision").removeClass("visibilityHidden").addClass("sgcImages");
                $("#textVision").removeClass("visibilityHidden").addClass("colXs6Responsive sgcTextImages");
                $("#imgPoliticaDeCalidad").removeClass("visibilityHidden").addClass("sgcImages");
                $("#textPoliticaDeCalidad").removeClass("visibilityHidden").addClass("colXs6Responsive sgcTextImages");
                $("#imgObjetivosDeCalidad").removeClass("visibilityHidden").addClass("sgcImages");
                $("#textObjetivosDeCalidad").removeClass("visibilityHidden").addClass("colXs6Responsive sgcTextImages");
            } else {
                window.onscroll = function () { sgc() }; //  this function  active all scroll animation's 
                var firstTime = true;
                function sgc() {

                    /*
                    ====================
                        MISION
                    ====================
                    */
                    if (document.body.scrollTop > 200 || document.documentElement.scrollTop
                        > 200) {
                        document.getElementById("imgMision").className = "animated inImgVision visibilityVisible sgcImages";
                        document.getElementById("textMision").className = "col-xs-6 animated inRightTextVision visibilityVisible sgcTextImages colXs6Responsive";
                        firstTime = false;
                    } else {
                        if (!firstTime) {
                            document.getElementById("imgMision").className = "animated outImgVision";
                            document.getElementById("textMision").className = "col-xs-6 animated outTextVision";
                        }
                    }
                    /*
                    ====================
                        VISION
                    ====================
                    */
                    if (document.body.scrollTop > 550 || document.documentElement.scrollTop
                        > 550) {
                        document.getElementById("imgVision").className = "animated inImgVision visibilityVisible sgcImages";
                        document.getElementById("textVision").className = "col-xs-6 animated inTextVision visibilityVisible sgcTextImages colXs6Responsive";
                        firstTime = false;
                    } else {
                        if (!firstTime) {
                            document.getElementById("imgVision").className = "animated outImgVision";
                            document.getElementById("textVision").className = "col-xs-6 animated outTextVision";
                        }
                    }
                    /*
                    ====================
                    POLITICA DE CALIDAD
                    ====================
                    */
                    if (document.body.scrollTop > 900 || document.documentElement.scrollTop
                        > 900) {
                        document.getElementById("imgPoliticaDeCalidad").className = "animated inImgVision visibilityVisible sgcImages";
                        document.getElementById("textPoliticaDeCalidad").className = "col-xs-6 animated inRightTextVision visibilityVisible sgcTextImages colXs6Responsive";
                        firstTime = false;
                    } else {
                        if (!firstTime) {
                            document.getElementById("imgPoliticaDeCalidad").className = "animated outImgVision";
                            document.getElementById("textPoliticaDeCalidad").className = "col-xs-6 animated outTextVision";
                        }
                    }
                    /*
                    ====================
                    OBJETIVOS DE CALIDAD
                    ====================
                    */
                    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop
                        > 1300) {
                        document.getElementById("imgObjetivosDeCalidad").className = "animated inImgVision visibilityVisible sgcImages";
                        document.getElementById("textObjetivosDeCalidad").className = "col-xs-6 animated inTextVision visibilityVisible sgcTextImages colXs6Responsive";
                        firstTime = false;
                    } else {
                        if (!firstTime) {
                            document.getElementById("imgObjetivosDeCalidad").className = "animated outImgVision";
                            document.getElementById("textObjetivosDeCalidad").className = "col-xs-6 animated outTextVision";
                        }
                    }
                }
            }
        });

        vm.flagAnimationClik = () => {
        $('#flags').addClass("animated flipInX");
        setTimeout( function(){
            $('#flags').removeClass("animated flipInX");            
        },700)
        
    }


    });

