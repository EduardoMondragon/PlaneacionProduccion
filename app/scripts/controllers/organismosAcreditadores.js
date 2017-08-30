'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:OrganismoAcreditadorCtrl
 * @description
 * # OrganismoAcreditadorCtrl
 * Controller of the pApp
 */

angular.module('pApp')
.controller('OrganismoAcreditadorCtrl', function() {
var vm = this;

$(document).ready(function () { //  this function send top page after load
        $(window).scrollTop(0);
}); 
if($(window).width() < 724){ 
    $(".responsive").css("width","100%");

    $(".myContainer").css({
        "margin-left": "10px",
        "margin-right": "10px",
    });
}

vm.caceca = "El CACECA es la institución certificada como Organización Acreditadora de la Educación Superior con el aval del Consejo para la Acreditación de la Educación Superior (COPAES), instancia capacitada y reconocida por el Gobierno Federal, a través de la Secretaría de Educación Pública (SEP), para conferir reconocimiento formal a favor de organizaciones cuyo fin sea acreditar programas académicos de educación superior, en este caso en las áreas Contables y Administrativas."
vm.cacecaHover = true;
vm.cacecaSwitch = true;

vm.ciees = "Los Comités Interinstitucionales para la Evaluación de la Educación Superior (CIEES) son nueve cuerpos colegiados, integrados por distinguidos académicos de instituciones de educación superior representativos de las diversas regiones del país, que tienen a su cargo la evaluación interinstitucional de programas, funciones, servicios y proyectos ubicados en el quehacer sustantivo de las instituciones.";
vm.cieesHover = true;
vm.cieesSwitch = true;

vm.coapehum = "El Consejo para la Acreditación de Programas Educativos en Humanidades, A.C. (COAPEHUM) se encuentra facultado por el Consejo para la Acreditación de la Educación Superior, A.C. para llevar a cabo la revisión y análisis de los programas relativos a las Humanidades en México.";
vm.coapehumHover = true;
vm.coapehumSwitch = true;

vm.concapren = "El Consejo Nacional para la Calidad de los Programas Educativos en Nutriología, A.C. (CONCAPREN) es un organismo acreditador con una firme convicción de la importancia que representa la calidad de los programas educativos en Nutriología en el país; con la finalidad de contar con preceptos claros, específicos y suficientes para llevar a cabo el proceso de Acreditación de un programa educativo, se establece el Marco de Referencia para el Proceso de Acreditación de los Programas educativos en Nutriología por el Consejo Nacional Para la Calidad de Programas Educativos en Nutriología, A.C. alineado al Marco General de Referencia para los Procesos de Acreditación de Programas Académicos de Tipo Superior (Ver. 3.0) COPAES.";
vm.concaprenHover = true;
vm.concaprenSwitch = true;

vm.caceb = "Dada la importancia que para el desarrollo de nuestro País representan las actividades en la formación de recursos humanos capacitados, en el ámbito Biológico, a través de las instituciones de educación tanto de nivel superior como medio superior y técnico profesional, se  constituye el Comité de Acreditación de la Licenciatura en Biología, CACEB, A. C. En este contexto el Comite de Acreditacion de la Licenciatura en Biologia, CACEB, A. C., se registra en la Notarias Publicas No. 186 y 217 del D. F., a traves de la escritura 31,498 del 26 de mayo del 2003.";
vm.cacebHover = true;
vm.cacebSwitch = true;

vm.ampromar = "Dada la importancia que para el desarrollo de nuestro País representan las actividades que se realizan en el ámbito Marítimo-Pesquero, Acuícola y de las Ciencias del Mar y específicamente la formación de recursos humanos capacitados a través de las instituciones de educación tanto de nivel superior como medio superior y técnico, la Asociación Nacional de Profesionales del Mar, ANPROMAR, A. C., constituye el Comité de Acreditación y Certificación de los Programas Educativos del sector Marítimo Pesquero, Acuícola y de Ciencias del Mar.";
vm.ampromarHover = true;
vm.ampromarSwitch = true;

vm.conaic = "El CONAIC es una asociación civil con personalidad propia con la única y total responsabilidad de aplicar los procesos y que se basan en estándares y normas establecidas por diferentes organismos evaluadores.";
vm.conaicHover = true;
vm.conaicSwitch = true;

vm.acomeaa = "La Asociación Mexicana de Educación Agrícola Superior A.C. (AMEAS), de común acuerdo con el Comité de Ciencias Agropecuarias de los CIEES impulsaron en forma decidida la creación de un organismo especializado que promueve, evalúa y asegura la calidad y desarrollo de la educación agrícola del país: el Comité Mexicano para la Acreditación de la Educación Agronómica, A.C. (COMEAA) es el cuarto organismo de acreditación, que fue reconocido por el Consejo para la Acreditación de la Educación Superior, A.C. (COPAES).";
vm.acomeaaHover = true;
vm.acomeaaSwitch = true;

vm.cacei = "El Consejo de Acreditación de la Enseñanza de la Ingeniería, A.C., (CACEI) es una asociación civil sin fines de lucro. Su objetivo primordial es, mediante la acreditación de los programas educativos en el área de las ingenierías, promover que las instituciones de educación superior (IES) ofrezcan educación de calidad a los futuros egresados. El CACEI opera desde julio de 1994, es el primer organismo acreditador de programas de estudios de licenciatura en México y está reconocido por el Consejo para la Acreditación de la Educación Superior, A. C., (Copaes). Actualmente cuenta con el reconocimiento a nivel internacional del Washington Accord, el cual forma parte de la International Engineering Alliance (IEA), es miembro de la Red Iberoamericana de Aseguramiento de la Calidad para la Educación Superior (RIACES), y del Acuerdo de Lima; el cual procura las buenas prácticas en la acreditación de programas en Iberoamérica.";
vm.caceiHover = true;
vm.caceiSwitch = true;
});