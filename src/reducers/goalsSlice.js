import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice ({
    name: 'goals',
    initialState: {
        value: [
            {
                'name': 'Meta',
                'description': 'Descripcion',
                'dueDate': 'Fecha'
            }
        ],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push.apply(action.payload);
        },
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            console.log(action.payload);
            console.log("Meta Eliminada");
            state.value = state.value.filter((todo) => todo.name !== action.payload);   
        }
    }
});

export const {addGoal} = todoSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default todoSlice.reducer;