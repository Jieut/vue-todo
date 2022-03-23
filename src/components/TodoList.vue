<template>
  <div>
      <ul style="padding:0">
          <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>  
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fa-solid fa-trash-can"></i>
            </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        // 현재는 페이지를 리로딩 해야지 추가된 Todo List가 갱신된다. 리팩토링이 필요해 보인다.
        if ( localStorage.length > 0 ) {
            for ( let i = 0; i < localStorage.length; i++ ) {
                let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
                console.log(obj);
                this.todoItems.push(obj);
                

                // this.todoItems.push()
            }
        }
    },
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1)
        },
        toggleComplete(todoItem, index) {
            console.log(index);
            todoItem.completed = !todoItem.completed;
            // 로컬 스토리지 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }

}
</script>

<style scoped>
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
