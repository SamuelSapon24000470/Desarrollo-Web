import {createSlice} from '@reduxjs/toolkit';

export const goalsSlice = createSlice ({
    name: 'goals',
    initialState: {
        value: [],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload);
            fetch('http://localhost:4000/goals/addGoal',{
                method: "POST",
                headers:{
                  "Content-Type": "application/json",
                  "Authorization": "123"
                },
                body: JSON.stringify(action.payload)
              }).catch((err)=>{
                  console.log(err);
              });
        },
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            const goalId = action.payload._id; 
            state.value = state.value.filter(goal => goal._id !== goalId);
            fetch('http://localhost:4000/goals/removeGoal/' + goalId, { 
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

export const {addGoal, initAddGoal, removeGoal} = goalsSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default goalsSlice.reducer;