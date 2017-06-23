'use strict';
/**
 * @ngdoc function 
 * @name pApp.controller:BlogAdministratorCtrl
 * @description 
 * # BlogAdministratorCtrl
 * Controller of the pApp
 */
angular.module('pApp')
.controller('BlogAdministratorCtrl', function ($scope, $rootScope, $timeout) {
    var vm = this;

    //BLOCK DECLARATION
    vm.switchButton = true;   
    vm.switch = true;
    vm.switchLogin = false;

    //PUBLIC FUNCTIONS
    vm.FocusSwitch = FocusSwitch;
    vm.addNewsImportant = addNewsImportant;
    vm.addNewsSimple = addNewsSimple;
    vm.login = login;
    vm.logOut = logOut;

    $timeout(function(){
        $rootScope.$apply();
    },1000);
    $('#load').on('click', function() {
        var $this = $(this);
        $this.button('loading');
        setTimeout(function() {
            $this.button('reset');
        }, 2000);
    });
    function login(){
        
        firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(error.message);
        });
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log("logeado exitoso con id :", firebaseUser.uid);
                vm.switchLogin = true;
                $rootScope.$apply();
            } else {
                console.log("valio verga we!")
            }
        })
            
        
    }
  
    function logOut(){
        firebase.auth().signOut();
        vm.switchLogin = false;
        $rootScope.$apply();
    }
   

    
    //========================================================
    //          * AFTER PAGE LOAD buttons switch *           //
    //========================================================
    $(document).ready(function(){                            //
        $("#left").css("border-bottom","3px solid #faa636"); //
        $("#left").css("color","#bdc3c7");                   //
    });                                                      //
    //========================================================


    //========================================================
    //               * UPLOAD IMAGE PRINCIPAL*               //
    //========================================================                     
    $('#upload').on('click',function(){                      //
        $('#inpImage').click();                              //
    })                                                       //
    //========================================================
    

    //========================================================
    //                  * UPLOAD IMAGE SIMPLE*               //
    //========================================================                     
    $('#uploadSimple').on('click',function(){                //
        $('#inpImageSimple').click();                        //
    })                                                       //
    //========================================================

    //PRIVATE FUNCTIONS
    function FocusSwitch(){
        if(vm.switchButton  == true){
            $("#left").css("border-bottom","3px solid #faa636");
            $("#left").css("color","#bdc3c7");
            $("#right").css("border-bottom","3px solid transparent");
            $("#right").css("color","#ecf0f1");
        }else{
            $("#right").css("border-bottom","3px solid #faa636");
            $("#right").css("color","#bdc3c7");
            $("#left").css("border-bottom","3px solid transparent");
            $("#left").css("color","#ecf0f1");
        }
    }//end FocusSwitch()

    function addNewsImportant(){
        //blogFire.addNews(vm.newsTitle, vm.newsImage, vm.autorName, vm.newsText);
         var news = firebase.database().ref('blog/' +'NoticiaPrincipal/' + 'unicaNoticia');
        news.update({
            image: vm.newsImage,
            title: vm.newsTitle,
            author: vm.autorName,
            text: vm.newsText
        });
        swal({
            title: "Noticia Publicada !",
            text: "Puedes comprobar tu noticia en la sección Blog",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }

    function addNewsSimple(){
         var newsSimple = firebase.database().ref('blog/' +'NoticiaTradicional/' + vm.newsTitleSimple);
        newsSimple.update({
            image: vm.newsImageSimple,
            title: vm.newsTitleSimple,
            author: vm.autorNameSimple,
            text: vm.newsTextSimple
        });
        swal({
            title: "Noticia Publicada !",
            text: "Puedes comprobar tu noticia en la sección Blog",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }
    vm.readFile = readFile;
    function readFile(file) {
  
        if (file.files && file.files[0]) {
            var FR= new FileReader();
            FR.addEventListener("load", function(e, imageConverted) {

                document.getElementById("img").src = e.target.result;
                document.getElementById("imgModal").src = e.target.result;
                imageConverted = document.getElementById("b64").innerHTML = e.target.result;
                vm.newsImage = imageConverted;
            }); 
            FR.readAsDataURL( file.files[0] );
        }
        $('.imgSelect').css("display","block");
        $('.imgSelect').addClass("animated imgBlog");
    }
    // document.getElementById("inpImage").addEventListener("change", readFile);
    vm.readFileTradicional = readSimpleFile;
    function readSimpleFile(file) {
  
        if (file.files && file.files[0]) {
            var FR= new FileReader();
            FR.addEventListener("load", function(e, imageConverted) {

                document.getElementById("imgSimple").src = e.target.result;
                document.getElementById("imgModalSimple").src = e.target.result;
                imageConverted = document.getElementById("b64Simple").innerHTML = e.target.result;
                vm.newsImageSimple = imageConverted;
            }); 
            FR.readAsDataURL( file.files[0] );
        }
        $('.imgSelectSimple').css("display","block");
        $('.imgSelectSimple').addClass("animated imgBlog");
    }
    // document.getElementById("inpImageSimple").addEventListener("change", readSimpleFile);
});