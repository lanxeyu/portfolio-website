import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MainCard = () => {
  return (
    <Card style={{ width: '30%' }} className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Lanxe Yu</Card.Title>
        <Card.Text>
          Software Developer
        </Card.Text>
        <Button className="scroll-to-projects-button button" variant="primary">Projects</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default MainCard