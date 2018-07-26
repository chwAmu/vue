
// data
// {a:1}
// typeof(data)
// "object"
// data.a
// 1
var data={a:1}

// vm.a==data.a
// true
// vm.a=3
// data.a is equal to 3 also.
// data.a =4
// vm.a is equal to 4 also.
var vm= new Vue({
	data:data
})

var paras={
	display_x:10,
	display_y:10,
	autoSend:true,
	title:'hello',
	name:'friends'
}

// fix the objec to unchangeable
Object.freeze(paras)

// some $function
new Vue({
	el:'#app',
	data:paras
})

vm2=new Vue({
	el:'#app2',
	data:data
})
// interface function trigger while value is change
vm2.$watch('a',function(newValue,oldValue){
	console.log('value is change from '+oldValue+' to '+newValue)
})

// lifecycle hooks

new Vue({
	data:{
		a:1
	},
	// this function will trigger while instance is created.
	created:function(){
		console.log('a is '+this.a)
	}
})




