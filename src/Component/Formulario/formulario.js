import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.scss';

function Formulario() {
  return (
    <Form className='form'>
      <Form.Group>
        <Form.Label className='text'>Name</Form.Label>
        <Form.Control className='input' type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label className='text'>Description</Form.Label>
        <Form.Control className='inputD' type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label className='text'>Due Date</Form.Label>
        <Form.Control className='input' type="date" />
      </Form.Group>

      <Button className='button' type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default Formulario;