var stopAllRule = (isStop=true) =>{
    //暂停页面所有转房客规则
    //参数isStop为true时为暂停

    //重写confrim,alert 以防弹出
    //confirm = () => 1 
    //alert = () => 1
    //取消重写,不再执行页面的 toStopOrRestorRule参数,直接发送请求

    //获取本页规则id
    let ruleIdList =[]
    $('#ruleList tbody tr').each(function(){
        onClickStr = $(this).children('td').last().children('a').last().attr('onClick')
        console.log(onClickStr)
        ruleIdList.push(onClickStr.split(',').splice(-1,1)[0].slice(0,-1))
        //console.log(ruleIdList)
    })
    //发送请求函数
    let stopRuleReq = (ruleId,isStop=true) => {
        reqUrl = '/sys/rules/stop.do'
        $.ajax({
            type:'POST',
            url:reqUrl,
            data:{'ruleId':ruleId,
                'propertyRule.flagStop':isStop},
            success:()=>console.log('操作成功'),
            error:()=>console.log("Error")
        })}
    //执行,直接发送请求
    for (let i of ruleIdList){
        //toStopOrRestorRule(i,isStop)
        stopRuleReq(i,isStop)
    }
     //刷新页面
     location.reload()
}

