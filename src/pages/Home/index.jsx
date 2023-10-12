import { MainCard, Projects } from '../../components'
import './style.css'

const Home = () => {
  return (
    <>
      <div className="main-card-container full-screen-component">
        <MainCard></MainCard>
      </div>

      <div className="projects-container full-screen-component">
        <Projects></Projects>
      </div>
    </>
  )
}

export default Home