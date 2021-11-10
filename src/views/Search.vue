<template>
  <label for="search">SEARCH</label>
  <input type="search" id="search" v-model="query" />
  <ul>
    <li v-for="(todo, index) in filteredTodos" :key="index">
      {{ todo.item }}
    </li>
  </ul>

  <label>POST TODO</label>
  <input type="text" v-model="newItem" />
  <button
    type="submit"
    @click.prevent="createTodo()"
    class="button button--submit"
  >
    create
  </button>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" v-model="todo.isDone" />
      <span :class="{ done: todo.isDone }">
        {{ todo.item }}
      </span>
      <button @click="deleteTodo(index)" class="button button--delete">
        delete
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";

type Todo = {
  item: string;
  isDone: boolean;
}[];

export default defineComponent({
  setup() {
    const newItem = ref("");
    const query = ref("");
    const todos: Todo = reactive([]);

    const createTodo = () => {
      if (!newItem.value) return;
      todos.push({ item: newItem.value, isDone: false });
      newItem.value = "";
    };
    const deleteTodo = (index: number) => {
      todos.splice(index, 1);
    };

    const filteredTodos = computed(() => {
      if (!query.value) return;
      return todos.filter((todo) => {
        return todo.item.indexOf(query.value) !== -1;
      });
    });

    return {
      newItem,
      query,
      todos,
      createTodo,
      deleteTodo,
      filteredTodos,
      ...toRefs(todos),
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  padding: 8px 16px;
}
label {
  margin-right: 16px;
  font-weight: bold;
}
li {
  margin-bottom: 4px;
}
.button {
  border: none;
  margin-left: 16px;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &--submit {
    height: 35px;
    padding: 0 16px;
    background: #42b983;
  }
  &--delete {
    padding: 4px 16px;
    background: #b95642;
  }
}
.done {
  text-decoration: line-through;
}
</style>
