#员工管理

## 项目功能:
    1. 员工登录
    2. 员工新增
    3. 部门新增
    4. 部门列表
    5. 职务新增
    5. 员工列表
    6. 员工修改
    7. 职务权限(权限全部跟职务走:新增/修改/删除 员工,新增/删除/修改 部门,显示本部/跨部员工,设置权限,日志查看)
     - //todo 权限设计文档

## 技术选型
    - 前端
        1. zui
        2. 使用 angularJs 实现数据绑定及业务逻辑
    - 后端
        - 所有交互由前端完成
        - 直接使用 TreeQL的restFull Json api,进行数据获取及处理(安全性不好)

## 文件:
    - login.html,js/login.js 登录页
    - home.html,js/home.js 主页
        - employee.html / js/employee.js  员工/部门管理模块
        - duty.html / js/duty.js  职务管理模块
        - log.html / js/log.js  日志管理模块
    - db.js  封装一个service,包含数据操作逻辑
## 问题:
    - 登录token:后端是直接使用数据库treeQL api,无法直接在登录时拿到token,需要先判断用户名密码,如果正确,再写token表并获取token,再写入cookies,并且每次读写数据,都需要验证token并刷一下token时间,逻辑有点复杂...   //ps:本来应该后端实现的逻辑,给前端做有点难为...
    - 

## 数据库
    - 员工表
        ```
             CREATE TABLE `employee` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `no` varchar(255) NOT NULL DEFAULT '',
            `name` varchar(255) NOT NULL,
            `deptId` int(11) NOT NULL,
            `dutyId` int(11) NOT NULL,
            `passwd` varchar(255) NOT NULL,         -- md5后保存
            `gender` tinyint(4) NOT NULL DEFAULT 0, -- 1:男  2:女
            PRIMARY KEY (`id`),
            KEY `fk_depart` (`deptId`) USING BTREE,
            KEY `fk_dutyid` (`dutyId`),
            CONSTRAINT `fk_departid` FOREIGN KEY (`deptId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
            CONSTRAINT `fk_dutyid` FOREIGN KEY (`dutyId`) REFERENCES `duty` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

            ```
    - 部门表
        ```
            CREATE TABLE `department` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `name` varchar(255) NOT NULL DEFAULT '',
            `fatherId` int(11) DEFAULT 0,
            PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ```
    - 职务表
        ```
            CREATE TABLE `duty` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `name` varchar(255) NOT NULL,
            `createId` int(11) NOT NULL,
            `acl` int(11) DEFAULT 0,  --权限(转换为二进制,根据每一位来判断是否有某权限,需描述文档)
            PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ```
    - 日志表
        ```
            CREATE TABLE `log` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `type` tinyint(4) NOT NULL DEFAULT 0,   --1:员工 2:部门  3:职务
            `action` tinyint(4) NOT NULL DEFAULT 0,  -- 1:新增 2:修改 3:删除
            `empId` int(11) NOT NULL,
            `content` varchar(255) DEFAULT NULL,
            `time` datetime NOT NULL DEFAULT current_timestamp(),
            PRIMARY KEY (`id`),
            KEY `fk_empID` (`empId`),
            CONSTRAINT `fk_empID` FOREIGN KEY (`empId`) REFERENCES `employee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ```
     - token表 用来生成及保存登录token
        ```
            CREATE TABLE `token` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `token` varchar(255) NOT NULL DEFAULT uuid(),
            `empid` int(11) NOT NULL,
            `time` datetime NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE KEY `pk_token` (`token`) USING BTREE,
            KEY `fk_token_empid` (`empid`),
            CONSTRAINT `fk_token_empid` FOREIGN KEY (`empid`) REFERENCES `employee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ```
    - 数据初始化(插入默认部门/职务/员工)
        ```
            insert into department(id,name) values(1,'系统')
            insert into duty(id,name) values(1,'管理员')
            insert into employee(id,no,name,deptid,dutyid,passwd,gentder) values(1,'99','admin',1,1,'',0)
        ```




    