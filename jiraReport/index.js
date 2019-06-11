//功能:生成jira问题周报
//模拟登录jira,获取未解决问题的xml,然后分析生成csv报告
//--author:spx--

const csv = require('fast-csv')
const fs = require('fs')
const agent = require('superagent').agent()
const xml2js = require('xml2js')
const fecha = require('fecha')


//定义网站地址常量
const jiraLoginUrl = 'https://jira.qiaofangyun.com/login.jsp'
const jiraReportXmlUrl = 'https://jira.qiaofangyun.com/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery=project+in+%28MARKETING%2C+SAAS1%2C+BI%2C+KAD%2C+DHPT%29+AND+issuetype+%3D+%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98+AND+status+in+%28Open%2C+%22In+Progress%22%2C+Reopened%29+AND+reporter+in+%28membersOf%28%E5%AE%A2%E6%9C%8D%E7%BB%84%29%29&tempMax=1000'

//jira用户名及密码及输出文件名
const jiraUser = 'name'
const jiraPasswd = 'password'

const csvFilePath = 'report.csv'

//模拟登录并获得cookies
async function login(){
    let headers = {
        'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding':'gzip, deflate',
        'accept-language':'zh-CN,zh;q=0.9',
        'cache-control':'max-age=0',
        'content-type':'application/x-www-form-urlencoded',
        'origin':'https://jira.qiaofangyun.com',
        'referer':'https://jira.qiaofangyun.com/login.jsp',
        'upgrade-insecure-requests':1,
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.204 Safari/537.36'
    }
    let data = {
        'os_username':jiraUser,
        'os_password':jiraPasswd
    }

    await agent
        .post(jiraLoginUrl)
        .set(headers)
        .send(data)
        .then(function(res){
            //登录
            //console.log(res)
            if (res.ok && res.header['x-ausername'] === jiraUser){
                console.log('登录成功')
                //console.log(res)
                }else{
                   console.log('登录失败')
                   throw new Error('')
                }
            })
        .catch(err=>{
                throw new Error('')
            }
        )}

let getXml = async() =>{
    let reportXmlText
    await agent
        .get(jiraReportXmlUrl)
        .then((res)=>{
        //获取xml
        if (res.ok){
            reportXmlText = res.text
            console.log('获取xml成功')
        }else{
            throw new Error(err)
            }
        })
    return reportXmlText
    }

let xmlParse = async(reportXmlText,filePath='report.xml') =>{
    let result
    if (!reportXmlText){
        reportXmlText = fs.readFileSync(filePath,'utf8')
        //console.log(reportXmlText)
    }
    await xml2js.parseString(reportXmlText,(err,res)=>{
        if(null !== err ){
            throw new Error(err)
        }
        //console.log(res)
        result = res
    })
    return result.rss.channel[0].item
}

let itemTocsv = (item) =>{
    let _arr = []
    item.forEach(i => {
        //console.log(i)
        _arr.push({
            '标题':i.title[0].replace(/\[.*\]\s*/,''),
            '优先级':i.priority[0]._,
            '项目':i.project[0]._,
            '状态':i.status[0]._,
            '负责人':i.assignee[0]._,
            '上报人':i.reporter[0]._,
            '反馈时间':fecha.format(new Date(i.created[0]),'YYYY/MM/DD'),
            '模块':i.component?i.component[0]:'',
            '链接':i.link[0]
        })
    })
    const csvWriteStream = fs.createWriteStream(csvFilePath)
    csvWriteStream.write(new Buffer('\xEF\xBB\xBF','binary')) //插入BOM
    csv.write(_arr,{headers:true}).pipe(csvWriteStream)
    console.log('生成csv报告结束')
}

let mainFn = async() =>{
    await login()
    let reportXmlText  = await getXml()
    xtmIterm = await xmlParse(reportXmlText)
    itemTocsv(xtmIterm)
}
mainFn()