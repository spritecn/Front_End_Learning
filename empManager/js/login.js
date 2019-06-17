var app = angular.module('loginApp',['dbApiModule']);
app.controller('loginCtrl',function($scope,dbApi) {
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
            }else if($scope.loginForm.verify.$error.verify){
                $scope.verifyWarning = '验证码不对'
            }else{
                $scope.verifyWarning = ''
            }
            return
        }else{
            //console.log($scope.userNo,$scope.passwd)
            console.log('验证通过')
            dbApi.login({no:$scope.userNo,passwd:$scope.passwd})
    }}
    $scope.resetWarning = _ =>{
        switch (_){
        case 'userNo':
            $scope.userNoWarning = ''
            break
        case 'verify':
            $scope.verifyWarning = ''
            break
        default:
            $scope.userNoWarning = ''
            $scope.verifyWarning = ''
        }
    }
    $scope.resetWarning()
})
app.directive('loginVerify',function($compile){
    return{
        restrict:'A',
        require:'ngModel',
        link:function(scope,element,attrs,self){
            let genVerify = _ =>{
                //返回数组,第一个是,第二个是结果
                let x,y,operator //生成两个随机数
                [x,y] = [parseInt(Math.random()*10),parseInt(Math.random()*10)]
                operator = (parseInt(Math.random()*20))%2 === 0 ? 0:1 //随机生成操作符0为+,1为乘
                if (operator){
                    return [x+'+'+y+'=?',(x+y)]
                }else{
                    return [x+'x'+y+'=?',(x*y)]
                }
            }
            let verifyQuestion,verifyResult
            [verifyQuestion,verifyResult] = genVerify()
            scope.verifyQuestion = verifyQuestion
            let verifyElement = $compile('<span class="with-padding text-primary">' + verifyQuestion+ '</span> \
            <em class="with-padding text-warning"> {{verifyWarning}}</em><br/>' )(scope)
            //console.log(verifyElement)
            element.after(verifyElement)
            scope.$watch(attrs.ngModel,function(value){
                if(!value){
                    //console.log('输入为空')
                    self.$setValidity('verify',false)
                }else{
                    //console.log(value,value == verifyResult)
                    self.$setValidity('verify',value == verifyResult)
                    //console.log(self)
                }
            })
            }
        }
    }
)
    