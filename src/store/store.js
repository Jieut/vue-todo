import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if ( localStorage.length > 0 ) {
            for ( let i = 0; i < localStorage.length; i++ ) {
                let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
                arr.push(obj);
            }
            /* 로컬스토리지는 순서를 보장하지 않는다.. ㅅㅂ.. 그래서 계속 순서가 달라졌구나.. */
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            var obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
            console.log('haha: '+state.todoItems[0]);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            // 로컬 스토리지 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});
