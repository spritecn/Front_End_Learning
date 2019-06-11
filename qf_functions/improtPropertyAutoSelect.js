// ==UserScript==
// @name importPropertyAutoSelect@qiaofang
// @namespace  importPropertyAutoSelect
// @match   http*://*.qiaofangyun.com/tool/importProperty.do*
// @grant none
// @run-at  document-ent
// ==/UserScript==
// author:Kross
// 功能:导入房源时,自动根据EXCEL列名选系统对应列



(function ($){
    'use strict'
    const selectRowDiv = $('#uploadConfirm')
    const autuSelectBtn = $('<button id="autoSelectBtn" style="margin-left:380px;margin-bottom:3px;">自动匹配</button>')
    selectRowDiv.children("div:first-child").prepend(autuSelectBtn)
    autuSelectBtn.on('click',()=>{
        selectRowDiv.find('table#importConfirm select').each((index,element) => {
            let curSelect = $(element)
            let curRowName = curSelect.parents('tr').find('span:first').text()
            let optionsMatchResult
            //匹配到设置select的值,匹配不到就更改底色提示
            optionsMatchResult = rowStrMatch(curRowName)
            optionsMatchResult ? curSelect.val(optionsMatchResult) : curSelect.parents('tr').css('background-color','CornflowerBlue');
            //console.log(curRowName)
        });
        return false
    })
    var rowStrMatch = (rowStr) =>{
        //根据传入的列名判断是否在选项中
        let selectOptions = ['房源编号','交易','城区','商圈',
        '楼盘字典','栋座位置','单元','房号','楼层','总层','房型','面积','朝向','售价','租价',
        '类型','产权','用途','装修','委托方式','委托日期','来源','状态','备注',
        '业主姓名','业主电话1','业主电话2','业主身份证','联系人姓名','联系人电话1','联系人电话2',
        '部门','员工']
        if(selectOptions.indexOf(rowStr)>-1){
            return rowStr}
        return 0
    }
}(window.jQuery))