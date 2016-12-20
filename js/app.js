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
			],
			currentEditingId: -1,
			checkedNow: true
		},
		methods: {
			getId: function(){
				var id = Math.random();
				for(var i = 0; i < this.todos.length; i++ ){
					if(this.todos[i].id === id){
						id = this.getId();
					}
				}
				return id;
			},
			add: function(){
				if(!this.text)
					return;
				this.todos.push({ id: this.getId(), text: this.text, completed: false });
				this.text = '';
			},
			remove: function(id){
				for(var i = 0; i < this.todos.length; i++ ){
					if(this.todos[i].id === id){
						this.todos.splice(i,1);
					}
				}	
			},
			clear: function(){
				var result = [];
				for(var i = 0; i < this.todos.length; i++){
					if(!this.todos[i].completed){
						result.push(this.todos[i]);
					}
				}
				this.todos = result;
			},
			existCompleted: function(){
				for(var i = 0; i < this.todos.length; i++ ){
					if(this.todos[i].completed){
						return true;
					}
				}
				return false;
			},
			editing: function(id){
				this.currentEditingId = id;
			},
			save: function(){
				this.currentEditingId = -1;
			},
			toggleAll: function(){
				for(var i = 0; i < this.todos.length; i++){
					this.todos[i].completed = this.checkedNow;
				}
				this.checkedNow = !this.checkedNow;
			}
		}
	})
})(Vue);
