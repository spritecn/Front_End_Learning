# Front_End_Learning



## 学习内容
- 把之前零碎学习的 html + css + javascript 知识串起来
- **angularJs 前端框架**
- node.js gulp.js 脚手架学习

## 项目练习
做一个简单员工管理系统


### 目录结构
  - empManager:员工管理系统
  - noteboard:留言板<已完成>
  - qf_functions:在巧房v10上添加一些函数方便操作
    1. stopAllRule.js 暂停/启动页面所有的自动转房客规则
    2. searchDeptInUserlist.js
  - tests:作的一些小练习
  - bookForum:书籍 <<angularjs深度剖析与最佳实践>> 项目

### 学习笔记
- javascript(相对于python的坑)
  1. if for 后面一定要加括号
  2. for (var i in arr)时 i为下标,不是元素,es6可以用 for (let i of arr)遍历元素
  3. 如果变量前没有var会自动定义为全局变量,哪怕你写在function里,es6建议所有变量定义都用 let,const
  4. js的字符串不是数组,数组和字符串都有slice(start,end),indexOf方法,但splice(start,count)方法只有数组有,并且不能 '2' in '234'
  5. {}!={},[3]!=[3],可以考虑使用Lodash的_isEqual判断
  6. js中this和python中self差不多,只是js的this是隐性传的,python的都要写上去
  7. input的onChanger需要鼠标点击其他控件才能触发,onkeyDown,是按下去就算,一般没有最后输入的那个值,一般用keyUp 慎用 keyDown,angularsj可以用 $watch监视
  8. 字符串转数字的方示 parseInt(str),如果确认是数字,可以直接 (+str)
  9. js天生异步,需要同步时,需要promise或async,而python是天生同步的,异步时考虑多线程或asyncio

- gulp:
  1. 教程:https://segmentfault.com/a/1190000012904063
  


- angularjs
  - 概况
    1. angularjs 扩展html的功能
    2. 指令可扩展
    3. 基础:ng-app:指定此部分由angular控制,ng-model:数据模型 ,ng-controller:控制器
    4. controller,是所有逻辑存储的地方,是和html沟通的桥梁
    5. augular.module 模块,$scope 模块作用域
    6. 依赖注入:函数参数由定义方决定 ,也就是说 controller里的函数的参数是指定的,比如$scope,$http
    7. filter 过滤器,用来过滤数据,用法{{item.data|data:"yy-MM-dd HH:mm:ss"}}
    8. ng表达式支持三目运算符 (条件?true时执行:假时执行)
    9. ng-reapet 数组时,如果数组有重复内容,就报错
    10. $scope.$watch 监视变量,改变后执行 ,用法$scope.$watch('变量名',改变后执行的函数(),是否深度监视),深度监视用于引用类型变量
    11. $scope.$apply 强制更新$scope;通常用在外部库更改了$scope里的变量后执行.
    12. 如果Html里有中划线的,angular定义时用驼峰命名,比如drivctive为myClose时,html里可用 my-close标签,反过来也是

  - 自带指令
    1. ng-init:初始化,一般可以初始化变量
    1. ng-repeat:循环输出 <li ng-repeat="item in arr">{{item}}</li>  "(k,v) in {a:'a',b:1}"
    1. ng-cloak:加载数据之前隐藏元素
    1. ng-src,ng-href,ng-hide,ng-show,ng-if;ng-if是为false是移除这个node,而ng-show为false时只是不显示,display:none;
    1. ng-class="array" [box,active],ng-style={"color":"red","font-size":12}
    2. ng-switch,ng-switch-when:实现 switch,case类语句,当a=1时显示x,a=2时显示y
    3. ng-jq,指定jQuery库,默认是jqlite,如果有引入jQuery,就用jq,如果没有引入就用jqlite,指定了就用指定的库
    4. ng-options,给select给设置option,使用时注意:
      - 必须要给select,给写一个ng-mode
      - 使用方法: ng-option = "i.value,i.name for i in options"
      - ng-option 还可以给option设置group i.value,i.name group by i.group for i in options
    5. ng-list:将用户输入的字符串转换为数据，一般用法<input ng-model="item" ng-list></input>
    5. $sce:通过安全类限制
    5. $interval,$timeout 用法同原生 setInterval,setTimeout,只是返回的是promise对象,无法用clearTimeout和clearInterval取消它，而是要用 $timeout.cancel(returnedPromise),$interval.cansel(returnedPromise)来取消

  - filter 过滤器
    1. 在输入数据之前进行处一
    1. filter后面可以加冒号后面跟filter参数
    2. 默认filter有:
      - currency 美元金额
      - data:时间格式  将timestamp进行格式化
      - 自定义filter,angular.module.filter("filterName",function(){return function(input,arg){处理input,return结果}}),需要返回一个函数,arg为filter参数,只能有一个参数,字符串要引起来
  - directive 自定义(一般可以用做自定义标签)
    1. 写法
        ''
        .directive("directiveName',function(){
          return {
            restrict: "EA" ,         //指定用途约束,包含E,A,C,M,E自定义标签,A标签属性,C类Class,M注释comment
            template: '',            //模板
            replace:true/false,     //是否替换原标签,M模式必须填加,默认为false,不用注释一般不建议使用
            transclude:true/false,  //指令代码嵌入,默认指令代码是会替换原标签内内容的,默认false,需要在模板里写ng-transclude(代表原始内容)使用
          }

        })
    2. directive取名必须为只包含英文和数字,不能和其他字符
  - 模块化
    1. 可以通过 angular.module('mod1',[依赖的模块]),来依赖其他模块,这样mod1就可以使用依赖模块内的所有
    2. 如果依赖的模块里有重名的内容,后面的会覆盖前面的
  - 自定义依赖注入
    1. factory, app.factory('factoryName',function(){return somthing}),something,可以是数据,也可以是函数,对象
    2. provider,app.provider('providerName',function(){this.$get = function(){return somthing}},$get必须定义并且必须是函数,this是指环境上下文
    3. service, app.service('serviceName',function(){this.xxx}),service中的this是service自己,和构造函数一样的机制
    4. constant,常量,不可装饰 app.constant('constName',value) ,直接给常量写值
    5. value,变量,写法和常量一样
    6. 依赖修饰,decorator,对依赖进行修改,app.decorator('提供者名',function($delegate){return 修改后的依赖}),$delegate为原依赖,修饰只执行一次
    7. factory,provider,service 每一个module只执行一次,数据和状态是共享的
    8. 
  - 多个controller间数据通信共享:
    1. 父子controller:子级controller会复制父级controller的$scope,子级或父级$scope对像修改后,不对上下级影响
    2. 父子关系,事件消息机制:$scope.$emit('eventName','data')向上发送事件,$scope.$broadcat('eventName',data)向下广播事件,$scope.$on('emitName',function(event,data){})接收事件处理
    3. 非父子controller:可以通过用同一个factory,provider,service,实现数据共享

  - Router(angular-route需要单独引入,并且需要在angular.module里依赖ngRoute,然后在controller里添加$route依赖)
    1. 根据URL来切换视图
    2. ng-view 视图占位符
    3. route 配置(通常单页herf的url用#)
        app.config(function($routeProvider){
           $routeProvider.when('URL',{
             template:'',  //模板文本
             templateUrl:'模板view地址',  //可以用ng-template类型来定义模板 <script type='text/ng-template' id='xxx.html'>      模板内容</script> 定义后可以像地址一样引用xxx.html,可以用来减少模板请求
             controller:'view的控制器',和模板配合使用,
             resolve:{
                //延迟器,等dosomthin完成后再加载
                delay:function($q){
                    let   delay=$q.defer()
                    doSomeThing()
                    return delay.promise
                  }
              }
             })
           .when('URL',{})
        })
      4. $routeParams:可以像get参数一样的给route加参数?id=1&type=2这样,可以直接在controller注入$routeParams引用
      5. $routeChangeStart,$routeChangeEnd,$routeChangeError,是全局事件,可以直接在controller里通过$scope.on('$routeChangeStart',function(){换页效果})里应用
      6. 
  - 表单验证
    1. 需要在<form name="formName" ng-submit="submit()" novalidate>,form,和input等输入标签name属性是必填的,novalidate,用来关闭h5自带的required等验证机制,手动实现
    2. ng-pattern 里的正则表达式头尾必须是 /,不能直接写在html模板里动态生成,"/{{aa}}/" 这样是不行的,但是可以在controller里动态生成


## 视频资料
  - https://www.bilibili.com/video/av3445520/?p=13
  - 













