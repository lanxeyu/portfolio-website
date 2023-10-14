import { MainCard, Projects } from '../../components'
import './style.css'

const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="main-card-container full-screen-component">
          <MainCard></MainCard>
        </div>

        <div className="projects-container full-screen-component" id="projects-container">
          <Projects></Projects>
        </div>
      </div>
    </>
  )
}

export default Home