const log = console.log
//插入搜索框
const searchDeptInput = jQuery('<div><input id="searchDeptInput" style="margin:0;height:24px" placeholder="部门名称" type="text"></input><button id="searchDeptButton" class="btns" >搜索</div>')
jQuery('.leftside_1 .dib').prepend(searchDeptInput)

const deptData = JSON.parse(jQuery("input[name='deptDatas']").attr('value'))
let searchDeptResult = []
let currSearchIndex = -1

searchDeptInput.find('button').click(()=>{
    if (currSearchIndex<0){
        searchDeptStr = searchDeptInput.find('input').val()
        searchDeptResult = searchDept(searchDeptStr,deptData)
        if(searchDeptResult.length===0){
            return (()=>alert('没有找到包含:'+searchDeptStr+' 的部门'))()
        }
    }
    currSearchIndex += 1
    log(currSearchIndex,searchDeptResult.length,searchDeptResult)
    if(currSearchIndex>=searchDeptResult.length){
        return (()=>alert('已经是最后一个了'))()
    }
    log(currSearchIndex,searchDeptResult[currSearchIndex])
    searchDeptResult[currSearchIndex].forEach((curr,index,arr)=>{
        if (arr.length === index+1){
            setTimeout(() => {
                jQuery('#dept-tree').find('span:contains("'+ curr.label +'")' ).click()
            }, index*100);
        }else{
            setTimeout(() => {
                let currSpanElement = jQuery('#dept-tree').find('span:contains("'+ curr.label +'")' )
                //log(curr.label,index,currSpanElement.text())
                currSpanElement.prev().find('.jstree-icon-plus').click()
            }, index*100)
        }
    })
    searchDeptInput.find('button').text('下一个')
})

searchDeptInput.find('input').keydown(()=>{
    searchDeptInput.find('button').text('搜索')
    currSearchIndex = -1
})

//从部门数据里搜索,返回数组
function searchDept(searchStr,deptData = testData){
    let resultList = []
    let searchStrInData = (searchStr,data,upArr=[]) =>{
        for (let i of data){
            let tempArr = upArr.slice(0)
            tempArr.push(i)
            if (i.label.indexOf(searchStr)>-1){
                //log('indexof',tempArr)
                resultList.push(tempArr)
            }
            if (i.children){
                searchStrInData(searchStr,i.children,tempArr)
            }
        }
    }
    searchStrInData(searchStr,deptData)
    return resultList
}
	
