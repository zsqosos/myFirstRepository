(function (Vue) {
	'use strict';
	new Vue({
		el: '.todoapp',
		data: {
			text: '',
			todos: [
				{ id: 1, text: 'study', completed: false },
				{ id: 2, text: 'work', completed: true },
				{ id: 3, text: 'sleep', completed: false }
			]
		},
		methods: {
			add: function(){
				this.todos.push({ id: 1, text: this.text, completed: false });
				this.text = '';
			},
			remove: function(id){
				for(var i = 0; i < this.todos.length; i++ ){
					if(this.todos[i].id === id){
						this.todos.splice(i,1);
					}
				}	
			}
		}
	})

})(Vue);
