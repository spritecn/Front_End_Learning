# 简单(简陋)留言版

# html + angluar
# 后端 treeql 数据直读

# 数据库 单note表
'''
CREATE TABLE `note` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) NOT NULL DEFAULT '',
  `zan` int(11) NOT NULL DEFAULT 0,
  `del` tinyint(1) NOT NULL DEFAULT 0,
  `createtm` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
'''
# 后端api 
  - Treeql 连接地址 http://spritecn.gz01.bdysite.com/hw/crud-api.php
  - 提交留言  post  http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note {"name":"","content":"","createtm":""}
  - 获取留言 get  http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note?filter=del,eq,0&order=id,desc", 
  - 删除留言 put  http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note/id {"deltm":timestamp}
  - 点赞留言 put  http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note/id {"zancount":+=1}
