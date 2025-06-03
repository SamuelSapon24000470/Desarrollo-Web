import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.scss';
import { useRef } from 'react';

function FormTaskAndGoal({ onSubmit, option }) { // Recibir onSubmit y option como props

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();
    if (inputRefName.current.value && inputRefDescription.current.value && inputRefDueDate.current.value) {
      const formData = {
        name: inputRefName.current.value,
        description: inputRefDescription.current.value,
        dueDate: inputRefDueDate.current.value
      };
      onSubmit(formData); 
      inputRefDescription.current.value = '';
      inputRefDueDate.current.value = '';
    }
  };

  return (
    <Form className='form' onSubmit={addItem}>
      <Form.Group>
        <Form.Label className='text'>Name</Form.Label>
        <Form.Control className='input' type="text" ref={inputRefName} required />
      </Form.Group>

      <Form.Group>
        <Form.Label className='text'>Description</Form.Label>
        <Form.Control className='inputD' as="textarea" ref={inputRefDescription} required />
      </Form.Group>

      <Form.Group>
        <Form.Label className='text'>Due Date</Form.Label>
        <Form.Control className='input' type="date" ref={inputRefDueDate} required />
      </Form.Group>

      <Button variant="info" type="submit">
        Add {option === 'tasks' ? 'Task' : 'Goal'}
      </Button>
    </Form>
  );
}

export default FormTaskAndGoal;