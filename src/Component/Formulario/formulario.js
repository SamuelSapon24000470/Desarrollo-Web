import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.scss';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todoSlice';
import { useRef } from 'react';

function Formulario(props) {

  const dispatch = useDispatch();
  const inputRefName = useRef();
  const inputRefDescripton = useRef();
  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();
    
    dispatch(addTodo({
      'name': inputRefName.current.value, 
      'description': inputRefDescripton.current.value,
      'dueDate': inputRefDueDate.current.value
    }));
  }

  return (
    <Form className='form'>
      <Form.Group>
        <Form.Label className='text'>Name</Form.Label>
        <Form.Control className='input' type="text" ref={inputRefName} />
      </Form.Group>

      <Form.Group>
        <Form.Label className='text'>Description</Form.Label>
        <Form.Control className='inputD' type="text" ref={inputRefDescripton}/>
      </Form.Group>

      <Form.Group>
        <Form.Label className='text'>Due Date</Form.Label>
        <Form.Control className='input' type="date" ref={inputRefDueDate}/>
      </Form.Group>

      <Button className='button' type="submit" onClick={addItem}>
        ADD GOAL
      </Button>
    </Form>
  );
}

export default Formulario;