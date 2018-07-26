vm= new Vue({
	el:'#app1',
	data:{
		message:'hello'
	},
	computed:{
		reverse_message:function(){
			return this.message.split('').reverse().join('')
		},
		get_now_in_computed:function(){
			return Date.now()
		}
	},
	methods:{
		helloworld:function(){
			return 'hello,chris'
		},
		get_now_in_methods:function(){
			return Date.now()
		}
	}
	
})

vm2=new Vue({
	el:'#app2',
	data:{
		firstname:'abc',
		lastname:'tanaka'
	},
	computed:{
		full_name:{
			get:function(){
				return this.firstname+' '+this.lastname
			},
			set:function(newValue){
				var name=newValue.split(' ')
				this.firstname=name[0]
				this.lastname=name[name.length-1]
			}
		}


	}

})