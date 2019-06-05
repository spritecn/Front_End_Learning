angular.module('app').controller(
    'readerCreateCtrl',function readerCreateCtrl($scope) {
     vm =  this
     vm.submit = function(form){
         console.log(form)
     }
    })