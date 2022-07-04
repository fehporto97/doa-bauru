import { Carousel, Image } from 'react-bootstrap';
import banner1 from '../assets/img/banner1.jpg';
import banner2 from '../assets/img/banner2.jpg';
import banner3 from '../assets/img/banner3.jpg';
import Banner from '../assets/styles/Banner.css';
import { useState } from 'react';

function Carouseltela() {

  const [images] = useState([banner1, banner2, banner3]);

  return (
    <Carousel fade className='Banner' >
      {images.map((image) => (
        <Carousel.Item>
          <Image src={image} fluid={true} className="img-fluid" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carouseltela;