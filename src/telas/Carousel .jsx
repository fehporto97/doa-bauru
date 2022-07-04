import { Carousel, Image } from 'react-bootstrap';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';
import Banner from '../assets/styles/Banner.css';
import { useState } from 'react';

function Carouseltela() {

  const [images] = useState([banner1, banner2, banner3]);

  return (
    <Carousel fade className='Banner' >
      {images.map((image) => (
        <Carousel.Item>
          <Image src={image} fluid={true}/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carouseltela;