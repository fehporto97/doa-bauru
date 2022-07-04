import React, { useState } from 'react'
import Accordion from './Accordion';
import Navibar from './Navibar';
import Footer from './Footer';
import Carousel from './Carousel ';
import DestaqueCards from '../components/DestaqueCards';
import { Container } from 'react-bootstrap';
import fundo from '../assets/styles/fundo.css';



export default function Home() {
    const [ongs, setOngs] = useState([
        {
            name: "Ong 1",
            photo: "img/gato.jpg"
        },
        {
            name: "Ong 2",
            photo: "img/gato.jpg"
        },
        {
            name: "Ong 3",
            photo: "img/gato.jpg"
        },
        {
            name: "Ong 4",
            photo: "img/gato.jpg"
        },        
    ]);

    return (
        <div className="fundo" >
            <Container className="fundo-container">
            <Navibar />
            <Carousel/>
                <DestaqueCards ongs={ongs} />
                <Accordion />
            </Container>
            <Footer />
        </div>
    );
}