// ==UserScript==
// @name importPropertyAutoSelect@qiaofang
// @namespace  importPropertyAutoSelect
// @match   http*://*.qiaofangyun.com/tool/importProperty.do*
// @grant none
// @run-at  document-ent
// ==/UserScript==
//功能:导入房源时,自动根据EXCEL列名选系统对应列
//author:Kross

!function ($){
    const selectRowDiv = $('#uploadConfirm')
    const autuSelectBtn = $('<button id="autoSelectBtn" style="margin-left:380px;margin-bottom:3px;">自动匹配</button>')
    selectRowDiv.children("div:first-child").prepend(autuSelectBtn)
    autuSelectBtn.on('click',()=>{
        
        return false
    })
}(window.jQuery)