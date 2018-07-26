
// 
Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})

var app7= new Vue({
	el:'#app7',
	data:{
		groceryList:[
			{id:0,text:'item1'},
			{id:1,text:'item2'},
			{id:2,text:'item3'}
		]
	}

})

Vue.component('taglist',{
	props:['tagname'],
	template:'<li>{{tagname.name}}</li>'

})

var tagTable =new Vue({
	el:'#tagTable',
	data:{
		tags:[
			{id:0,name:'temperature1'},
			{id:1,name:'temperature2'},
			{id:2,name:'temperature3'}
		]
	}

})