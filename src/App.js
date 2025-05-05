import { useEffect, useState } from 'react';
import './App.scss';
import Item from './Component/Item/item';
import Menu from './Component/Menu/menu';
import Container from 'react-bootstrap/esm/Container';
import Formulario from './Component/Formulario/formulario';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { initAddTodo } from './reducers/todoSlice';

function App() {
  const [showForm, setShowForm] = useState(false);
  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const arr = [
    { name: 'Tarea 1', description: 'Entregar Tarea 1', dueDate: '2025-05-04' },
    { name: 'Tarea 2', description: 'Entregar Tarea 2', dueDate: '2025-05-03' }
  ];
  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item))
    })
  }, []);

  return (
    <div className="App">
      <Menu></Menu>

      <Container>
        {/* Versión móvil */}
        <div className="mobile-version">
          <button className="floating-btn"onClick={() => setShowForm(!showForm)}>ADD GOAL</button>
          <div className={`form-overlay ${showForm ? 'visible' : ''}`}>
            <div className="form-container">
              <Formulario></Formulario>
              <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            </div>
          </div>
          
          <div className="items-container">
          {
               todos.map((todo, index) => {
                return (
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} />
                )
                }
                )
              }
          </div>
        </div>

        {/* Versión desktop */}
        <div className="desktop-version">
          <Row className="h-100">
            <Col lg={6} className="sticky-form">
              <Formulario></Formulario>
            </Col>
            <Col lg={6} className="scrollable-items">
              {
               todos.map((todo, index) => {
                return (
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} />
                )
                }
                )
              }
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;