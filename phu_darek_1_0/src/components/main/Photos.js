import React from 'react';

import { Carousel } from 'react-responsive-carousel';


import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from './../../assets/1.jpg';
import img2 from './../../assets/2.jpg';
import img3 from './../../assets/3.jpg';
import img4 from './../../assets/4.jpg';


const Photos = () => {

    const imges = [img1, img2, img3, img4];


    return (
        <Carousel 
            centerMode={false}
            showThumbs={false}
        >
            {imges.map((el, i) => {
                return (
                    <div  key={i}>
                        <img className='main_img'  alt="construction site" src={el} />
                    </div>
                );
            })}
        </Carousel>

    );

};

export default Photos;
