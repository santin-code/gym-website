import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

import './gallery.css'

const Gallery = () => {
  const images = []
  for(let i=1; i<= 15; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images)
  
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab optio tempore odit voluptatem rem fugit minima dolorum et consequatur.lorem Lorem. Lorem ipsum dolor sit amet. Lorem, ipsum 
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index)=> {
              return  <article key={index}>
                <img src={image} alt={`Gallery item ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery