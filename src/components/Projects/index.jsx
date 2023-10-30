import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './style.css'

function Projects() {
  return (
    <Carousel className="carousel">

      <Carousel.Item>
        <Image src='/pizzashop-preview.png' className='carousel-image' rounded/>
        <Carousel.Caption className="carousel-caption">
          <h3>Pizza Shop</h3>
          <p>Pizza ordering app with responsive elements, customizable pizzas, data handling across components, push notifications, order tracking, & sales recording in a database. React, Node.js, Express, PostgreSQL, RESTful API, Web-Push, Service Worker</p>

          <div className="project-link-btn-group">
            <Button variant="warning" href="https://pizzashop-lanxeyu.netlify.app/" target="_blank">Website</Button>
            <Button variant="outline-warning" href="https://github.com/lanxeyu/pizza-shop" target="_blank">Frontend Repo</Button>
            <Button variant="outline-warning" href="https://github.com/lanxeyu/pizza-shop-server" target="_blank">Backend Repo</Button>
          </div>
    
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='carousel-item'>
        <Image src='/vanguardians-preview.png' className='carousel-image' rounded/>
        <Carousel.Caption className="carousel-caption">
          <h3>VanGuardians</h3>
          <p>Full-stack web app with party-management survival game featuring up to 6 controllable characters. Built with JavaScript, Python, HTML, CSS, Vite, React, Flask, SQLAlchemy, PostgreSQL.</p>

          <div className="project-link-btn-group">
            <Button variant="warning" href="https://vanguardians-lfa.netlify.app/" target="_blank">Website</Button>
            <Button variant="outline-warning" href="https://github.com/lanxeyu/vanguardians-client" target="_blank">Frontend Repo</Button>
            <Button variant="outline-warning" href="https://github.com/aslaterm32/vanguardians-server" target="_blank">Backend Repo</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      
      


      
      <Carousel.Item>
        <Image src='/siege-of-westhold-preview.png' className='carousel-image' rounded/>
        <Carousel.Caption className="carousel-caption">
          <h3>Siege of Westhold</h3>
          <p>Python game project that blends tower defence, shoot em up, and survival mechanics. Roguelike elements and enemy variants under development.</p>

          <div className="project-link-btn-group">
            <Button variant="warning" href="https://github.com/lanxeyu/Siege-of-Westhold" target="_blank">Repo</Button>
          </div>

        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default Projects;