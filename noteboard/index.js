app = angular.module("app",[])
app.controller("main",function($scope,$http){
    $scope.popShow = false
    getNotes = () =>{
        //获取所有留言
        $http.get("http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note?filter=del,eq,0&order=id,desc",{"responseType":"json"})
        .then((response)=>{
            $scope.notes = response.data.records
            $scope.empty = $scope.notes.length === 0 ?  true:false
        },()=>{console.log("查询失败")})
    }
    getNotes()
    $scope.del = (index,id) =>{
        url = 'http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note/' + id
        $http.put(url,
            {"del":1})
            .then(()=>$scope.notes.splice(index,1),()=>alert('删除时数据传输有问题,再点试试'))
    }
    $scope.zan = (index,id) =>{
        //$scope.notes[index].zan += 1
        url = 'http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note/' + id
        $http.put(url,{"zan":$scope.notes[index].zan+1})
        .then(()=>$scope.notes[index].zan += 1,()=>{alert("点赞失败了,再点一下吧")})
    }
    $scope.submit = () =>{
        $scope.popShow =false
        console.log($scope.writeName,$scope.noteContent)
        $http.post("http://spritecn.gz01.bdysite.com/hw/crud-api.php/records/note",
            {"name":$scope.writeName,"content":$scope.noteContent})
            .then((response)=>{
                $scope.notes.unshift(
                    {
                        "name":$scope.writeName,
                        "content":$scope.noteContent,
                        "zan":0,
                        "id":response.data
                    }
                )
                $scope.writeName = ''
                $scope.noteContent =''

            },()=>alert('提交失败'))
        
    }
})