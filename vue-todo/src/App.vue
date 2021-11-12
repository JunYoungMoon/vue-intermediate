<template>
	<div id="app">
		<!-- <Event v-on:sendevent="receiveEvent"></Event> -->
		<!-- <Props v-bind:receivedata="propsdata"></Props> -->
		<TodoHeader></TodoHeader>
		<TodoInput v-on:addItem="addOneItem"></TodoInput>
		<TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeOneItem" v-on:toggleComplete="toggleOneItem"></TodoList>
		<TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
	</div>
</template>

<script>
//import Event from './components/Event.vue';
//import Props from './components/Props.vue';
	
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
	data:function(){
		return{
			//propsdata : '데이터 내리기',
			todoItems : []
		}
	},
	methods:{
		//receiveEvent:function(){alert('이벤트 올려받기')},
		addOneItem:function(todoItem){
			var obj = {completed: false, item: todoItem};
			localStorage.setItem(todoItem, JSON.stringify(obj));
			this.todoItems.push(obj);
		},
		removeOneItem:function(todoItem,index){
			this.todoItems.splice(index, 1); 
    		localStorage.removeItem(todoItem.item);
		},
		toggleOneItem:function(todoItem){
			todoItem.completed = !todoItem.completed;
			localStorage.removeItem(todoItem.item);
			localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
		},
		clearAllItem:function(){
			this.todoItems = [];
			localStorage.clear();
		}
	},
	created: function() {
		if(localStorage.length > 0){
			for (var i = 0; i < localStorage.length; i++) {	
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
					this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
				}
			}
		}
	},
	components: {
		//Event, Props,
		TodoHeader: TodoHeader,
		TodoInput: TodoInput,
		TodoList: TodoList,
		TodoFooter: TodoFooter
	}
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
