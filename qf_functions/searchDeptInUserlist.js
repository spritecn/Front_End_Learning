//功能:组织机构页搜索定位部门
//author:Kross

//插入搜索框
let searchDeptInput = jQuery('<div><input id="searchDeptInput" style="margin:0;height:24px" placeholder="部门名称" type="text"></input><button id="searchDeptButton" class="btns" >搜索</div>')
jQuery('.leftside_1 .dib').prepend(searchDeptInput)
let deptData = JSON.parse(jQuery("input[name='deptDatas']").val())
let searchDeptResult = []
let currSearchIndex = -1
let showCloseDeptCheck = jQuery('#blackAllDept').is(':checked')

searchDeptInput.find('button').click(()=>{
    if (showCloseDeptCheck != jQuery('#blackAllDept').is(':checked')){
        //判断显示关闭部门是否勾上
        showCloseDeptCheck = jQuery('#blackAllDept').is(':checked')
        deptData = JSON.parse(jQuery("input[name='deptDatas']").val())
    }
    if (currSearchIndex<0){
        searchDeptStr = searchDeptInput.find('input').val()
        searchDeptResult = searchDept(searchDeptStr,deptData)
        if(searchDeptResult.length===0){
            return (()=>alert('没有找到包含:'+searchDeptStr+' 的部门'))()
        }
    }
    currSearchIndex += 1
    if(currSearchIndex>=searchDeptResult.length){
        return (()=>alert('已经是最后一个了'))()
    }
    searchDeptResult[currSearchIndex].forEach((curr,index,arr)=>{
        const timeoutArr = []
        if (arr.length === index+1){
            timeoutArr[index] = setInterval(() => {
                console.log(curr.label,index)
                let lastElement = jQuery('#dept-tree').find('span:contains("'+ curr.label +'")' )
                if (!lastElement.is(':hidden')){
                    jQuery('#dept-tree').find('span:contains("'+ curr.label +'")' ).click()
                    clearInterval(timeoutArr[index])
                }
            }, 30);
        }else{
            timeoutArr[index]  = setInterval(() => {
                    let currSpanElement = jQuery('#dept-tree').find('span:contains("'+ curr.label +'")' )
                    console.log(curr.label,index)
                    if (!currSpanElement.is(':hidden')){
                        currSpanElement.prev().find('.jstree-icon-plus').click()
                        clearInterval(timeoutArr[index])
                    }
                }, 30)
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
