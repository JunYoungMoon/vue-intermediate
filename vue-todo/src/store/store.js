import Vue from 'vue';
import Vuex from 'vuex';

//Vuex를 전역적으로 사용
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}


export const store = new Vuex.Store({
	state:{
		todoItems : storage.fetch()
	},
	getters: {
		getTodoItems(state) {
			return state.todoItems;
		}
	},
	mutations: {
		addOneItem(state, todoItem) {
			var obj = {completed: false, item: todoItem};
			localStorage.setItem(todoItem, JSON.stringify(obj));
			state.todoItems.push(obj);
		},
		removeOneItem(state, payload){
			state.todoItems.splice(payload.index, 1); 
    		localStorage.removeItem(payload.todoItem.item);
		},
		toggleOneItem(state, todoItem){
			todoItem.completed = !todoItem.completed;
			localStorage.removeItem(todoItem.item);
			localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
		},
		clearAllItem(state){
			state.todoItems = [];
			localStorage.clear();
		}
	}
});