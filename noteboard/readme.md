# 简单留言版


# html + angluar
# 后端 treeql 数据直读

# 数据库 单note表
'''
CREATE TABLE `notebord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL DEFAULT '',
  `zancount` int(11) NOT NULL DEFAULT 0,
  `deltm` bigint(20) NOT NULL DEFAULT 0,
  `createtm` bigint(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
'''
# Treeql 连接地址 http://spritecn.gz01.bdysite.com/hw/crud-api.php
