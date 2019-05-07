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
    1. Bootstrap
    2. 使用 angularJs 实现数据绑定及业务逻辑
  - 后端
    - 直接使用 TreeQL的restFull Json api,进行数据交互
### 目录结构
  - html:员工管理系统
  - qf_functions:在巧房v10上添加一些函数方便操作
    1. stopAllRule.js 暂停/启动页面所有的自动转房客规则
    2. searchDeptInUserlist.js

### 学习笔记
1. ng-cloak:加载数据之前隐藏元素
2. ng-switch,ng-switch-when:实现 switch,case类语句,当a=1时显示x,a=2时显示y
3. ng-jq,指定jQuery库,默认是jqlite,如果有引入jQuery,就用jq,如果没有引入就用jqlite,指定了就用指定的库
4. ng-options,给select给设置option,使用时注意:
  - 必须要给select,给写一个ng-mode
  - 使用方法: ng-option = "i.value,i.name for i in options"
  - ng-option 还可以给option设置group i.value,i.name group by i.group for i in options
5. ng-list:将用户输入的字符串转换为数据，一般用法<input ng-model="item" ng-list></input>
5. $sce:通过安全类限制

