<template>
  <div class="inputBox">
      <!-- v-model: data.newTodoItem 변수에 입력된 값 할당 -->
      <!-- v-on:keyup.enter: 입력 후 엔터 입력 시 addTodo() 호출 -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="closeModalButton fa-solid fa-plus addBtn"></i>
      </span>
    <AlertModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>경고!
            <i class="fa-solid fa-xmark" @click="showModal = false">
        </i></h3>
      </template>
      <template #body>
        <div>무언가를 입력하세요!</div>
      </template>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue"

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                // 저장하는 로직
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            // Input 태그 초기화
            this.newTodoItem = '';
        }
    },
    components: {
        AlertModal: AlertModal
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
.closeModalButton {
    color: #42b983,
     
}
</style>>
    