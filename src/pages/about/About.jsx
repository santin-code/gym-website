import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title='About Us'  image={HeaderImage} >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde voluptatem exercitationem deleniti provident nostrum, sequi ut eius nemo porro!
    </Header>



    <section className="about__history">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Our story' />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora voluptatibus quisquam facere, eveniet aliquam quos tenetur quam accusantium illo laborum, alias possimus cumque veniam obcaecati nam quaerat iste corporis repellendus earum dolore. Adipisci, dolore nisi. Tempore expedita eligendi consequuntur.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, consectetur sapiente harum voluptatibus, minima consequatur eveniet numquam obcaecati sint rem placeat facere, minus quo optio saepe rerum? Ut, deserunt reprehenderit!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae at eveniet vero nobis dolor accusamus dolorum voluptatem facere facilis.
          </p>
        </div>
      </div>
    </section>



    <section className="about__vision">
      <div className="container about__vision-container">        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, dolor illo modi, mollitia iusto nihil porro voluptatibus aperiam ducimus at quibusdam exercitationem assumenda facilis omnis perferendis voluptas velit sequi nulla illum vitae molestiae. Pariatur, veritatis. Ad iste quidem eligendi sapiente.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum nesciunt impedit nobis accusamus ipsam ullam? Odio consequatur commodi corrupti! Dignissimos quasi, nemo sunt architecto provident quae facere nam non.
          </p>
        </div>
        <div className="about__section-image reverse ">
          <img src={VisionImage} alt='Our Vision' />
        </div>
      </div>
    </section>



    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt='Our Mission' />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, dolor illo modi, mollitia iusto nihil porro voluptatibus aperiam ducimus at quibusdam exercitationem assumenda facilis omnis perferendis voluptas velit sequi nulla illum vitae molestiae. Pariatur, veritatis. Ad iste quidem eligendi sapiente.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum nesciunt impedit nobis accusamus ipsam ullam? Odio consequatur commodi corrupti! Dignissimos quasi, nemo sunt architecto provident quae facere nam non.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem et veritatis deleniti consectetur deserunt? Alias quos asperiores itaque architecto labore.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About