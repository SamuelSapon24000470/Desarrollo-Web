import List from "./list";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react';
import {
    addGoal,
    selectGoals
} from '../reducers/goalsSlice'
import { useRef } from "react";
export function Goals(){
    const dispatch = useDispatch();
    const todos = useSelector(selectGoals);
    const inputRef = useRef();

  const addItem = (e) => {
  e.preventDefault();
  dispatch(addGoal({
    name: inputRef.current.value,
    description: "Descripción predeterminada", // Añade esto
    dueDate: new Date().toISOString().split('T')[0] // Fecha actual como ejemplo
  }));
};

    return (
        <div>
          <h1>Goals List</h1>
          <input type="text" placeholder="Add Todo" ref={inputRef} />
          <button onClick={addItem}>Add Todo</button>
    
          <List items={todos} />
        </div>
      );
}
export default Goals;