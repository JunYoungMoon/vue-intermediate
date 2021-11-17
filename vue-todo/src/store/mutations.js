const addOneItem = (state, todoItem) => {
	var obj = {completed: false, item: todoItem};
	localStorage.setItem(todoItem, JSON.stringify(obj));
	state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
	state.todoItems.splice(payload.index, 1); 
	localStorage.removeItem(payload.todoItem.item);
};
const toggleOneItem = (state, todoItem) => {
	todoItem.completed = !todoItem.completed;
	localStorage.removeItem(todoItem.item);
	localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const clearAllItems = (state) => {
	state.todoItems = [];
	localStorage.clear();
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
	