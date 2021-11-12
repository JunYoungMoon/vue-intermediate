<template>
	<div id="app">
		<!-- <Event v-on:sendevent="receiveEvent"></Event> -->
		<!-- <Props v-bind:receivedata="propsdata"></Props> -->
		<TodoHeader></TodoHeader>
		<TodoInput></TodoInput>
		<TodoList></TodoList>
		<TodoFooter></TodoFooter>
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
			//propsdata : '데이터 내리기'
		}
	},
	methods:{
		//receiveEvent:function(){alert('이벤트 올려받기')}
	},
	components: {
		//Event, Props,
		TodoHeader: TodoHeader,
		TodoInput: TodoInput,
		TodoList: TodoList,
		TodoFooter: TodoFooter,
		
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
