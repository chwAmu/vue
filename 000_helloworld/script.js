var app = new Vue({
	el:'#app',
	data:{
		message:'hello wolrd!'
	}
	})

var app2=new Vue({
	el:'#app2',
	data:{
		message:'page is loaded...'+new Date().toLocaleString()
	}

})

var app3=new Vue({
	el:'#app3',
	data:{
		seen:true
	}

})	

var userarray=[]
for (var i =0;i<10;i++){
	var templist={}
	templist['text']='user'+i.toString()
	userarray.push(templist)
}


var app4=new Vue({
	el:'#app4',
	data:{
		users:userarray
	}
})

var app5=new Vue({
	el:'#app5',
	data:{
		message:'hello and you click'
	},
	methods:{
		reverseMessage:function(){
			this.message=this.message.split('').reverse().join('')
		}
	}


})

var app6=new Vue({
	el:'#app6',
	data:{
		message:'Hello wolrd'
	}

})







