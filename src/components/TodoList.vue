<template>
  <div>
      <!-- <ul style="padding:0"> -->
        <TransitionGroup name="list" tag="ul" style="padding:0">
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>  
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fa-solid fa-trash-can"></i>
            </span>
          </li>
      <!-- </ul> -->
      </TransitionGroup>
  </div>
</template>

<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
            this.$store.commit('removeOneItem', {todoItem, index});
        },
        toggleComplete(todoItem, index) {
            this.$store.commit('toggleOneItem', {todoItem, index});
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
/* 리스트 아이템 트렌지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
