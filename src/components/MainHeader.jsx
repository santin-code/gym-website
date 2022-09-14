// this css will be in the style sheet of Home.css

import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'



const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi dolorum aliquid velit qui rerum explicabo. Explicabo debitis libero eum iure architecto amet, accusamus similique sed sequi tempora quod unde?
              Et, blanditiis cum. Sapiente aspernatur incidunt aliquam ratione sed tempora error ipsam tenetur voluptatum, optio voluptas alias corporis aliquid porro quod voluptatem unde tempore, iste omnis recusandae, fugiat iusto? Dolor.
          </p>
          <Link to='/plans' className='btn lg' >Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">

          </div>
          <div className="main__header-image">
            <img src={ Image } alt='Main Header' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader