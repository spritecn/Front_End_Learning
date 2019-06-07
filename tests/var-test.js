!function(){
console.log(typeof(a),typeof(b),typeof(c))
//function undefined undefined undefined
//函数声明,提升会把整个函数提升,不只是提升声明
//var 的变量提升只是把声明提升了,也就是说地执行前运行了一行 var a;没赋值

a('1')
//1
function a(x){console.log(x)}
//b('1')
//b声明前执行不了
var b = function(x){console.log(x)}
var c = () =>{}
let d = function(){}
//let是不会被提升的
console.log(d)
}()
//a(1) //报错
//外部无法访问函数内部定义的函数