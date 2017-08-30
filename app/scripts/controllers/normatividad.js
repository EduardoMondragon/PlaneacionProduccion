'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:NormatividadCtrl
 * @description
 * # NormatividadCtrl
 * Controller of the pApp
 */
angular.module('pApp')
    .controller('NormatividadCtrl', function () {
        var vm = this;

        $(document).ready(function ($) { //  this function send top page after load
            $(window).scrollTop(0);
            if ($(window).width() < 724) {
                $(".imgNormatividad").css({
                    "width": "90%",
                    "height": "350px",
                });
                $(".myContainerResponsive").css("margin", "10px");
            } else {
                $(".myContainerResponsive").css("margin-top", "80px");
                if ($(window).width() > 1400) {
                    $(".imgNormatividad").css({
                        "width": "100%",
                        "height": "350px",
                    });
                };
            }
        });
        vm.pdf = [
            {
                titulo: "Normatividad Institucional",
                src: "pdf/normatividad/Normatividad.zip",
                img: "images/normatividad/normatividad.png"
            },
            {
                titulo: "Manual de Procedimientos",
                src: "pdf/normatividad/MPUES2014.pdf",
                img: "images/normatividad/proc.jpg"
            },
            {
                titulo: "Manual de Organización",
                src: "http://www.ues.mx/docs/conocenos/planeacion/MANUALDEORGANIZACION2016.pdf",
                img: "images/normatividad/org.jpg"
            },
            {
                titulo: "Reglamento de Planeación",
                src: "http://www.ues.mx/docs/conocenos/normatividad/reglamentos/ReglamentoDePlaneacioonYEvaluacion2016.pdf",
                img: "images/normatividad/abc.jpg"
            }
        ];

    });