import Carousel from 'react-bootstrap/Carousel';
import { Button, ButtonGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import './style.css'


function Projects() {

  return (
    <Carousel className="carousel">

      <Carousel.Item className='carousel-item'>
        <Image src='/vanguardians-preview.png' className='carousel-image' rounded/>
        <Carousel.Caption className="carousel-caption">
          <h3>VanGuardians</h3>
          <p>Full-stack web app with party-management survival game featuring up to 6 controllable characters. Built with JavaScript, Python, HTML, CSS, Vite, React, Flask, SQLAlchemy, PostgreSQL.</p>

          <ButtonGroup className="button-group">
            <Button variant="primary" href="https://vanguardians-lfa.netlify.app/" target="_blank">Deployed Website</Button>
            <Button variant="secondary" href="https://github.com/lanxeyu/vanguardians-client" target="_blank">Frontend Repository</Button>
            <Button variant="secondary" href="https://github.com/aslaterm32/vanguardians-server" target="_blank">Backend Repository</Button>
          </ButtonGroup>

        </Carousel.Caption>
      </Carousel.Item>
      
      
      <Carousel.Item>
        <Image src='/bookwiz-preview.png' className='carousel-image' rounded/>
        <Carousel.Caption className="carousel-caption">
          <h3>BookWiz</h3>
          <p>A library management tool that features admin authorization for some actions, and allows users to borrow and return books. Information is fetched from a Restful API built with Express, Node.js, and PostgreSQL.</p>

          <ButtonGroup className="button-group">
            <Button variant="primary" href="https://bookwiz.onrender.com/" target="_blank">Deployed Website</Button>
            <Button variant="secondary" href="https://github.com/ollie-byrne99/Lap_2_Client_Side" target="_blank">Frontend Repository</Button>
            <Button variant="secondary" href="https://github.com/Chelsea-Mogwo/book-wiz-backend" target="_blank">Backend Repository</Button>
          </ButtonGroup>
    
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <Image src='/siege-of-westhold-preview.png' className='carousel-image' rounded/>
        <Carousel.Caption className="carousel-caption">
          <h3>Siege of Westhold</h3>
          <p>Python game project that blends tower defence, shoot em up, and survival mechanics. Roguelike elements and enemy variants under development.</p>

          <ButtonGroup className="button-group">
            <Button variant="primary" href="https://github.com/lanxeyu/Siege-of-Westhold" target="_blank">Repository</Button>
          </ButtonGroup>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Projects;