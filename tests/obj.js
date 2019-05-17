//手写一个对象,可实现 new Div().css().appendToBody()
function Div(){
    this.Dom = document.createElement('div')

    this.css = function(style){
        //sytle 是对象 {'backgroundColor':'red','width':'100px'}
        for (let i in style){
            this.Dom.style[i] = style[i]
        }
        return this   
    }

    this.appendToBody = function () {
        document.body.appendChild(this.Dom)
        return this
      }
}