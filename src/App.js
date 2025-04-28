import { useState } from 'react';
import './App.scss';
import Item from './Component/Item/item';
import Menu from './Component/Menu/menu';
import Container from 'react-bootstrap/esm/Container';
import Formulario from './Component/Formulario/formulario';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [showForm, setShowForm] = useState(false);

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
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>

        {/* Versión desktop */}
        <div className="desktop-version">
          <Row className="h-100">
            <Col lg={6} className="sticky-form">
              <Formulario></Formulario>
            </Col>
            <Col lg={6} className="scrollable-items">
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;