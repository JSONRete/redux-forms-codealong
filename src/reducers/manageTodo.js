export default function manageTodo(state = {
  todos: [],
}, action) {

  switch(action.type) {
    case "ADD_TODO":
      // console.log("reducer received this action:", action);
      console.log({ todos: [...state.todos, action.payload.text]})
      return { todos: [...state.todos, action.payload.text]}
      
  }

  

  return state;
}
