# Front_End_Learning

## 时间 
- 5/1 - 5/22

## 学习内容
- 把之前零碎学习的 html + css + javascript 知识串起来
- **angularJs 前端框架**
- node.js gulp.js 脚手架学习

## 项目练习
做一个简单员工管理系统

#### 项目功能:
  1. 员工登录
  2. 员工新增
  3. 部门新增
  4. 部门列表
  5. 员工列表
  6. 员工修改
  7. 员工权限(新增员工,新增部门,显示本部/跨部员工,设置权限)

### 技术选型
  - 前端
    1. zui
    2. 使用 angularJs 实现数据绑定及业务逻辑
  - 后端
    - 直接使用 TreeQL的restFull Json api,进行数据交互
### 目录结构
  - empManager:员工管理系统
  - qf_functions:在巧房v10上添加一些函数方便操作
    1. stopAllRule.js 暂停/启动页面所有的自动转房客规则
    2. searchDeptInUserlist.js
  - tests:作的一些小练习

### 学习笔记
- javascript(相对于python的坑)
  1. if for 后面一定要加括号
  2. for (var i in arr)时 i为下标,不是元素,es6可以用 for (let i of arr)遍历元素
  3. 如果变量前没有var会自动定义为全局变量,哪怕你写在function里,es6建议所有变量定义都用 let,const
  4. js的字符串不是数组,数组和字符串都有slice(start,end),indexOf方法,但splice(start,count)方法只有数组有,并且不能 '2' in '234'
  5. {}!={},[3]!=[3],可以考虑使用Lodash的_isEqual判断
  6. js中this和python中self差不多,只是js的this是隐性传的,python的都要写上去
  7. input的onChanger需要鼠标点击其他控件才能触发,onkeyDown,是按下去就算,一般没有最后输入的那个值,一般用keyUp 慎用 keyDown





- angularjs
  - 概况
    1. angularjs 扩展html的功能
    2. 指令可扩展
    3. 基础:ng-app:指定此部分由angular控制,ng-model:数据模型 ,ng-controller:控制器
    3. controller,是所有逻辑存储的地方,是和html沟通的桥梁
    3. augular.module 模块,$scope 模块作用域
    4. 依赖注入:函数参数由定义方决定 ,也就是说 controller里的函数的参数是指定的,比如$scope,$http
    5. filter 过滤器,用来过滤数据,用法{{item.data|data:"yy-MM-dd HH:mm:ss"}}

  - 指令
    1. ng-init:初始化,一般可以初始化变量
    1. ng-repeat:循环输出 <li ng-repeat="item in arr">{{item}}</li>  "(k,v) in {a:'a',b:1}"
    1. ng-cloak:加载数据之前隐藏元素
    1. ng-src,ng-href,ng-hide,ng-show,ng-if
    2. ng-switch,ng-switch-when:实现 switch,case类语句,当a=1时显示x,a=2时显示y
    3. ng-jq,指定jQuery库,默认是jqlite,如果有引入jQuery,就用jq,如果没有引入就用jqlite,指定了就用指定的库
    4. ng-options,给select给设置option,使用时注意:
      - 必须要给select,给写一个ng-mode
      - 使用方法: ng-option = "i.value,i.name for i in options"
      - ng-option 还可以给option设置group i.value,i.name group by i.group for i in options
    5. ng-list:将用户输入的字符串转换为数据，一般用法<input ng-model="item" ng-list></input>
    5. $sce:通过安全类限制

