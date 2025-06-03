import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../reducers/todoSlice';

function Item(props) {

  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
     props.onDelete(props._id);
    }
  return (
    <Card>
      <Card.Body>
        <Card.Title  className='text1'>{props.name}</Card.Title>
        <Card.Text className='text2'> {props.description} </Card.Text>
        <Card.Title  className='text1'>Due Date:</Card.Title>
        <Card.Title className='text2'>{props.dueDate}</Card.Title>
        <Button className='Button' onClick={removeItem}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;