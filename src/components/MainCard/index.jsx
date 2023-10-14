import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import './style.css'

const MainCard = () => {
  return (
    <Card className="text-center">

      <Container>
          <Image src="/expog.png" className="profile-picture" roundedCircle />
      </Container>

      <Card.Body>
        <Card.Title>Lanxe Yu</Card.Title>
        <Card.Text>
          Full-Stack Developer
        </Card.Text>
        <Button className="scroll-to-projects-button button" variant="primary">Projects</Button>
      </Card.Body>

      <Card.Footer>
          <Badge className="badge" bg="dark">JavaScript</Badge>
          <Badge className="badge" bg="dark">Python</Badge>
          <Badge className="badge" bg="dark">C#</Badge>
          <Badge className="badge" bg="dark">HTML</Badge>
          <Badge className="badge" bg="dark">CSS</Badge>
          <Badge className="badge" bg="dark">React</Badge>
          <Badge className="badge" bg="dark">Vite</Badge>
          <Badge className="badge" bg="dark">Bootstrap</Badge>
          <Badge className="badge" bg="dark">React-Bootstrap</Badge>
          <Badge className="badge" bg="dark">Express</Badge>
          <Badge className="badge" bg="dark">Node.js</Badge>
          <Badge className="badge" bg="dark">Flask</Badge>
          <Badge className="badge" bg="dark">PostgreSQL</Badge>
          <Badge className="badge" bg="dark">MongoDB</Badge>
          <Badge className="badge" bg="dark">SQLite</Badge>
          <Badge className="badge" bg="dark">Git</Badge>
          <Badge className="badge" bg="dark">Docker</Badge>
          <Badge className="badge" bg="dark">C#</Badge>
          <Badge className="badge" bg="dark">Jest</Badge>
          <Badge className="badge" bg="dark">Vitest</Badge>
          <Badge className="badge" bg="dark">Pytest</Badge>
      </Card.Footer>

    </Card>
  );
}

export default MainCard