<template>
  <div>
      <!-- <ul style="padding:0"> -->
        <TransitionGroup name="list" tag="ul" style="padding:0">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>  
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                <i class="fa-solid fa-trash-can"></i>
            </span>
          </li>
      <!-- </ul> -->
      </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),
        // removeTodo(todoItem, index) {
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },

        // toggleComplete(todoItem, index) {
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    },
    computed: {
        // todoItem() {
        //     return this.$store.getters.storedTodoItems;
        // }
        /* mapGetters 사용법 1 */
        ...mapGetters(['storedTodoItems'])
        /* mapGetters 사용법 2: 컴포넌트 템플릿에서 사용하는 이름과 getters의 이름이 다른 경우 사용 */
        // ...mapGetters({
        //     todoItem: 'storedTodoItems'
        // })
        /* mapState 사용법 1 */
        // ...mapState(['todoItems'])
        /* mapState 사용법 2 */
        // ...mapState({
        //     wahaha: 'todoItems'
        // })

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
