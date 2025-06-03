import { useEffect, useState } from 'react';
import './App.scss';
import { Todos } from './Component/todos'; 
import { Goals } from './Component/goals'; 
import Menu from './Component/Menu/menu'; 
import FormTaskAndGoal from './Component/Formulario/formulario'; 
import Item from './Component/Item/item'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { initAddTodo, addTodo, removeTodo } from './reducers/todoSlice';
import { initAddGoal, addGoal, removeGoal } from './reducers/goalsSlice'; 
import { optionSlice } from './reducers/optionSlice'; 

function App() {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch(); 
    const todos = useSelector((state) => state.todos.value);
    const option = useSelector((state) => state.option.value);
    const goals = useSelector((state) => state.goals.value);

    console.log("Todos:", todos); 
    console.log("Option:", option); 
    console.log("Goals:", goals); 

    async function initFetch() {

        
        fetch('http://localhost:4000/tasks/getTasks', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "123"
            },
        }).then((response) =>
            response.json()
        ).then(response => {
            console.log(response);
            response.map((task) => {
                dispatch(initAddTodo(task));
            });
        }).catch((err) => {
            console.log(err);
        });

        fetch('http://localhost:4000/goals/getGoals', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "123"
            },
        }).then((response) =>
            response.json()
        ).then(response => {
            console.log(response);
            response.map((goal) => {
                dispatch(initAddGoal(goal));
            });
        }).catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
        initFetch();
    }, [dispatch]); 

    
    const handleSubmit = (formData) => {
    if (option === 'tasks') {
        dispatch(addTodo(formData)); 
    } else if (option === 'goals') {
        dispatch(addGoal(formData));
    }
    setShowForm(false);
    };

    
    const handleOptionChange = (newOption) => {
        dispatch(optionSlice(newOption));
    };

    const handleDeleteTodo = (_id) => {
        dispatch(removeTodo({ _id }));
    };

    
    const handleDeleteGoal = (_id) => {
        dispatch(removeGoal({ _id }));
    };

    return (
        <div className="App">
            <Menu />

            <Container>
                
                {/* Versión móvil */}
                <div className="mobile-version">
                    <button className="floating-btn" onClick={() => setShowForm(!showForm)}>
                        ADD {option.toUpperCase()}
                    </button>
                    <div className={`form-overlay ${showForm ? 'visible' : ''}`}>
                        <div className="form-container">
                            <FormTaskAndGoal onSubmit={handleSubmit} option={option} />
                            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
                        </div>
                    </div>

                    <div className="items-container">
                        {option === 'tasks' && todos.map((todo, index) => (
                            <Item
                                key={index}
                                name={todo.name}
                                description={todo.description}
                                dueDate={todo.dueDate}
                                _id={todo._id} 
                                onDelete={handleDeleteTodo}
                            />
                        ))}
                        {option === 'goals' && goals.map((goal, index) => (
                            <Item
                                key={index}
                                name={goal.name}
                                description={goal.description}
                                dueDate={goal.dueDate}
                                _id={goal._id} 
                                onDelete={handleDeleteGoal}
                            />
                        ))}
                    </div>
                </div>

                {/* Versión desktop */}
                <div className="desktop-version">
                    <Row className="h-100">
                        <Col lg={6} className="sticky-form">
                            <FormTaskAndGoal onSubmit={handleSubmit} option={option} />
                        </Col>
                        <Col lg={6} className="scrollable-items">
                            {option === 'tasks' && todos.map((todo, index) => (
                                <Item
                                    key={index}
                                    name={todo.name}
                                    description={todo.description}
                                    dueDate={todo.dueDate}
                                    _id={todo._id} 
                                    onDelete={handleDeleteTodo}
                                />
                            ))}
                            {option === 'goals' && goals.map((goal, index) => (
                                <Item
                                    key={index}
                                    name={goal.name}
                                    description={goal.description}
                                    dueDate={goal.dueDate}
                                    _id={goal._id} 
                                    onDelete={handleDeleteGoal}
                                />
                            ))}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default App;