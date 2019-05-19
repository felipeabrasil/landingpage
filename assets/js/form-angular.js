var App = angular.module('vsApp', []);

App.controller('dabCtrl', function ($scope, $http) {



    $scope.btnName = "Enviar";


    //Cadastrar Formulario
       $scope.inserir = function () {


           if ($scope.form.$valid) {

               $scope.email = $('.email').text();
               $scope.name = $('.name').text();
               $scope.message = $('.message').text();


               $scope.msg = "Cadastrado " + $scope.name + " com sucesso.";
               $scope.avisoclass = "show create";

$scope.AvisoMsg();

           }else if ($scope.form.$invalid) {
             $scope.email = $('.email').text();
             $scope.name = $('.name').text();
             $scope.message = $('.message').text();


             $scope.msg = "Erro ao cadastrar " + $scope.name + ".";
             $scope.avisoclass = "show create";
             $scope.AvisoMsg();
           }

       };
       //fim


        //Animacao da mensagem de aviso
        $scope.AvisoMsg = function () {
            // Get the snackbar DIV
            var x = document.getElementById("aviso");

            // Add the "show" class to DIV
            x.className = $scope.avisoclass;

            // After 3 seconds, remove the show class from DIV
            setTimeout(function () {
                x.className = x.className.replace($scope.avisoclass, "");
            }, 3000);
        };



});
