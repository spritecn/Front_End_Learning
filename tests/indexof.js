function indexof(str1,str2){
    //判断 str2,是否在str1,之内,如果是 打印开始位置下标,否则打印-1
    for (let i in str1){
        if(str1.slice(i,i+str2.length) === str2){
            return i
        }
    }
    return -1
}
