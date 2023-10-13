import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './style.css'

const MainCard = () => {
  return (
    <Card className="text-center card">
      <Card.Header></Card.Header>

      <Container>
      <Row>
        <Col>
          <Image src="/expog.png" className="profile-picture" roundedCircle />
        </Col>
      </Row>
    </Container>

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