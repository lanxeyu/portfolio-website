import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import './style.css'

const MainCard = () => { 
  const handleScrollToProjects = () => {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="text-center">

      <Container>
          <Image src="/lanxe-yu.png" className="profile-picture" roundedCircle />
      </Container>

      <Card.Body>
        <Card.Title>Lanxe Yu</Card.Title>
        <Card.Text className='job-title'>
          Full-Stack Developer
        </Card.Text>
        <Button className="scroll-to-projects-btn" variant="warning" onClick={handleScrollToProjects}>Projects</Button>
      </Card.Body>

      <Card.Footer>
          <Badge pill className="badge" bg="dark">JavaScript</Badge>
          <Badge pill className="badge" bg="dark">Python</Badge>
          <Badge pill className="badge" bg="dark">C#</Badge>
          <Badge pill className="badge" bg="dark">HTML</Badge>
          <Badge pill className="badge" bg="dark">CSS</Badge>
          <Badge pill className="badge" bg="dark">React</Badge>
          <Badge pill className="badge" bg="dark">Vite</Badge>
          <Badge pill className="badge" bg="dark">Bootstrap</Badge>
          <Badge pill className="badge" bg="dark">React-Bootstrap</Badge>
          <Badge pill className="badge" bg="dark">Express</Badge>
          <Badge pill className="badge" bg="dark">Node.js</Badge>
          <Badge pill className="badge" bg="dark">Flask</Badge>
          <Badge pill className="badge" bg="dark">PostgreSQL</Badge>
          <Badge pill className="badge" bg="dark">MongoDB</Badge>
          <Badge pill className="badge" bg="dark">SQLite</Badge>
          <Badge pill className="badge" bg="dark">Git</Badge>
          <Badge pill className="badge" bg="dark">Docker</Badge>
          <Badge pill className="badge" bg="dark">Jest</Badge>
          <Badge pill className="badge" bg="dark">Vitest</Badge>
          <Badge pill className="badge" bg="dark">Pytest</Badge>
      </Card.Footer>

    </Card>
  );
}

export default MainCard