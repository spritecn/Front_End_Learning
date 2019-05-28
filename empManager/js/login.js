var app = angular.module('loginApp',[]);
app.controller('loginCtrl',($scope)=> {
    //$scope.userName = 'aaa';
    $scope.verifyGen = () =>{
        let [x,y]  = [intGen(),intGen()]
        console.log(x,y)
        if(intGen() % 2 === 0){
            $scope.verifyResult = x*y
            $scope.verifyNotice = x + '*' + y + '= ?'
            $scope.verifyPattern = new RegExp(''+$scope.verifyResult)
        }else{
            $scope.verifyResult = x+y
            $scope.verifyNotice = x + '+' + y + '=?'
            $scope.verifyPattern = new RegExp(''+$scope.verifyResult)
        } 
    }
    $scope.verifyGen()
    $scope.resetWarning = () =>{
        $scope.userNoWarning = ''
        $scope.verifyWarning = ''
    }
    
    $scope.loginSubmit = (valid)=>{
        if (!valid){
            if($scope.loginForm.userNo.$error.required){
                $scope.userNoWarning = '请输入用户编号'
            }else if($scope.loginForm.userNo.$error.pattern){
                $scope.userNoWarning = '用户编号为2-8位字母或数字,仅中间可以有"-"字符'
            }else{
                $scope.userNoWarning = ''
            }

            if($scope.loginForm.verify.$error.required){
                $scope.verifyWarning = '验证码必填'
            }else if($scope.loginForm.verify.$error.pattern){
                $scope.verifyWarning = '验证码不对'
                $scope.verifyGen()
            }else{
                $scope.verifyWarning = ''
            }
            return
        }else{
            console.log(valid)
            console.log('验证通过')
    }}
})
    
const  intGen = () =>{
    //输出一个小于10的随机数
    return parseInt(Math.random()*10)}