angular.module('dbApiModule',[])
    .config(function($httpProvider){
        //basic auth
        //$httpProvider.defaults.headers.common['Authorization'] = 'Basic c3B4OnNweA=='
        })
    .service('dbApi',function($http,$filter){
        let dbApiUrl = 'http://hw.fantansy.cn:8080/treeql_emp_manager.php/records/'
        let [empApiUrl,tokenApiUrl] = [dbApiUrl+'employee',dbApiUrl+'token']
        this.login = (loginData) =>{
            if (loginData.passwd){
            loginData.passwd = md5(loginData.passwd)
            }else{
                loginData.passwd = ''
            }
            let filterStr = genQueryFilterStr(loginData)

            $http.get(empApiUrl+filterStr,{
                //timeout:10
            }).then((resp)=>{
                console.log(resp.data.records[0] || '')
            })
            .catch((resp)=>{
                console.log(resp.data || 'Request failed')
            })
            
        this.putToken = (empid) =>{
            $http.post(tokenApiUrl,{
                data = {empid:empid,time:$filter('data')(new Date(),'YYYY-MM-dd HH:mm:ss')}
            }).then((resp)=>{
                return resp.data
            }).catch((resp)=>{
                //
            })
        }
        this.getTokenByTokenId = (tokenId) =>{

        }

        }
        function genQueryFilterStr(parmas){
            //根据parmas对象生成treeql查询过滤器用的参数串
            //?filter=name,cs,e&filter=age,gt,3
            let preStr = 'filter='
            let resultStr  = ''
            let isFirstParms = 1
            for (let i in parmas){
                if (isFirstParms){
                    resultStr += '?' + preStr + i +',eq,' + parmas[i]
                    isFirstParms = 0
                }else{
                    resultStr += '&' + preStr + i +',eq,' + parmas[i]
                }
            }
            return resultStr
        }
    })
