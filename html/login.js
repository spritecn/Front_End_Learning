var app = angular.module('loginApp',[]);
app.controller('loginFormCtrl',($scope)=> {
    //$scope.userName = 'aaa';
    $scope.askGen = () =>{
        let [x,y]  = [intGen(),intGen()]
        if(intGen() % 2 === 0){
            $scope.askResult = x*y
            $scope.userAsk = x + '*' + y + '= ?'
        }else{
            $scope.askResult = x+y
            $scope.userAsk = x + '+' + y + '= ?'
        } 
    }
    $scope.askVerify = () =>{
        if($scope.userVerify == $scope.askResult){
            $scope.login.$error.userVerifyInvalid = false
        }else{
            $scope.login.$error.userVerifyInvalid = true
        }
    }


})

const  intGen = () =>{
    //输出一个小于10的随机数
    return parseInt(Math.random()*10)}