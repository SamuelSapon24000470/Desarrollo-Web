import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [],
    },
    reducers: {
            addTodo: (state, action) => {
                const newTask = {
                    ...action.payload,
                    _id: Date.now().toString()
                };
                state.value.push(newTask);

                fetch('http://localhost:4000/tasks/addTask', {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": "123" },
                    body: JSON.stringify(action.payload)
                })
                .then(res => res.json())
                .then(backendTask => {
                    
                    const index = state.value.findIndex(t => t._id === newTask._id);
                    if (index !== -1) {
                    state.value[index] = backendTask;
                    }
                })
                .catch(err => console.error("Error:", err));
                },
        initAddTodo: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodo: (state, action) => {
            const taskId = action.payload._id;
            state.value = state.value.filter(todo => todo._id !== taskId);
            fetch('http://localhost:4000/tasks/removeTask/' + taskId, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "123"
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }
});

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.value;
export default todoSlice.reducer;