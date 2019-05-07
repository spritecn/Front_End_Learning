jq = jQuery
var searchDeptInput = jq('<input id="searchDept" placeholder="搜索部门" type="text"></input>')
jq('.leftside_1 .dib').prepend(searchDeptInput)
deptData = JSON.parse(jq("input[name='deptDatas']").attr('value'))
searchDeptInput.change(searchDeptFun())
searchDeptFun = () =>{
    let searchDeptStr = searchDeptInput.val()

}

searchDeptInData = (deptName='系统') => {
    let resultList = []
}

testData = [{"id":"","label":"全部"},{"id":"2","no":"1.0","label":"[1-1] 业务一区","children":[{"id":"5","no":"1.0","label":"[2-1] 张江1店","children":[{"id":"10041","no":"22.0","label":"[3-22] 二级部门+二级部门","deptUserCount":3,"deptUserAllCount":3}],"deptUserCount":3,"deptUserAllCount":6},{"id":"10045","no":"5.0","label":"[2-3] 测试一区","deptUserCount":2,"deptUserAllCount":2},{"id":"10051","no":"7.0","label":"[2-5] 天天","deptUserAllCount":0}],"deptUserCount":8,"deptUserAllCount":16},{"id":"10022","no":"2.0","label":"[1-1] 三级B门店","deptUserAllCount":0},{"id":"10038","no":"3.0","label":"[1-1] YSL","deptUserCount":1,"deptUserAllCount":1},{"id":"11","no":"6.0","label":"[1-4] 业务四区","deptUserAllCount":0},{"id":"12","no":"7.0","label":"[1-5] 业务五区","children":[{"id":"4","no":"3.0","label":"[2-3] 业务三","deptUserCount":2,"deptUserAllCount":2},{"id":"10052","no":"6.0","label":"[2-6] 业务五部","deptUserAllCount":0}],"deptUserAllCount":2},{"id":"14","no":"9.0","label":"[1-6] 业务六区","deptUserCount":3,"deptUserAllCount":3},{"id":"10028","no":"15.0","label":"[1-10] 业务八区","deptUserCount":2,"deptUserAllCount":2},{"id":"10017","no":"24.0","label":"[1-18] 业务七区","children":[{"id":"10032","no":"190.0","label":"[2-190] 业务七区A","children":[{"id":"7","no":"1.0","label":"[3-1] 三级A门店","children":[{"id":"8","no":"1.0","label":"[4-1] 四级A小组","deptUserAllCount":0}],"deptUserAllCount":0}],"deptUserCount":1,"deptUserAllCount":1}],"deptUserCount":3,"deptUserAllCount":4},{"id":"10020","no":"104.0","label":"[1-98] 一级区域","children":[{"id":"3","no":"1.0","label":"[2-1] 二级A片区","deptUserCount":2,"deptUserAllCount":3}],"deptUserCount":4,"deptUserAllCount":7},{"id":"1","no":"105.0","label":"[1-99] 系统管理组","deptUserCount":2,"deptUserAllCount":2}]