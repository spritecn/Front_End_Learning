//生成jira问题周报
//模拟登录jira,获取未解决问题的xml,然后分析生成csv
//--author:spx--


const csv = require('csv-parse')
const fs = require('fs')
const request = require('superagent')
const $ = require('cheerio')

//定义网站常量
const jaraLogin = 'https://jira.qiaofangyun.com/login.jsp'
const jaraXml = "https://jira.qiaofangyun.com/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery=project+in+%28MARKETING%2C+SAAS1%2C+BI%2C+KAD%2C+DHPT%29+AND+issuetype+%3D+%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98+AND+status+in+%28Open%2C+%22In+Progress%22%2C+Reopened%29+AND+reporter+in+%28membersOf%28%E5%AE%A2%E6%9C%8D%E7%BB%84%29%29"

//模拟登录并获得cookies
function login(){
    let heards = {
        ':authority':'jira.qiaofangyun.com',
        ':method':'POST',
        ':path':'/login.jsp',
        ':scheme':'https',
        'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding':'gzip, deflate',
        'accept-language':'zh-CN,zh;q=0.9',
        'cache-control':'max-age=0',
        'content-type':'application/x-www-form-urlencoded',
        'origin':'https://jira.qiaofangyun.com',
        'referer':'https://jira.qiaofangyun.com/login.jsp'
        'upgrade-insecure-requests':1,
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.204 Safari/537.36'
    }
    let data = {
        os_username:xing.zhao
        os_password:Qiaofang1
        os_destination:
        user_role:
        atl_token:
        login:登录
    }
    return cookies
}

