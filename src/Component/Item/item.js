import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item() {
  return (
    <Card>
      <Card.Body>
        <Card.Title  className='text1'>Name</Card.Title>
        <Card.Title className='text2'>Nombre</Card.Title>
        <Card.Title  className='text1'>Description</Card.Title>
        <Card.Text className='text2'> Description </Card.Text>
        <Card.Title  className='text1'>Due Date:</Card.Title>
        <Card.Title className='text2'>28/04/2025</Card.Title>
        <Button className='Button'>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;