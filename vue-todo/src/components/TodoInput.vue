<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
		<span class="addContainer" v-on:click="addTodo">
			<i class="addBtn fas fa-plus" aria-hidden="true"></i>
		</span>
		<Modal v-if="showModal" @close="showModal = false">
			<h3 slot="header">
				경고 
			<i class="closeModalBtn fa fa-times" aria-hidden="true" 
			  @click="showModal = false">
			</i>
			</h3>
			<p slot="body">할 일을 입력하세요.</p>
		</Modal>
	</div>
</template>

<script>
import Modal from './common/Modal.vue'	
	
export default {

	data:() => {
		return {
			newTodoItem : '',
			showModal:false
		}
	},
	methods:{
		//addTodo: () => { 안됨
		addTodo(){
			if(this.newTodoItem !== ''){
				//this.$emit('addItem',this.newTodoItem);
				const item = this.newTodoItem.trim();
				this.$store.commit('addOneItem', item);
				
				this.clearInput();
			}else{
				this.showModal = !this.showModal;
			}
		},
		//clearInput: () => { 안됨
		clearInput() {
			this.newTodoItem = '';
		}
	},
	components:{
		Modal
	}
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
h3 {
  color: #42b983;
}
</style>