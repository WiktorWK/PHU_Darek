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
            autoPlay={true}
            infiniteLoop={true}
            interval={4000}
            centerMode={false}
            showThumbs={false}
            renderArrowPrev={(clickHandler, hasPrev, label) => <button onClick={clickHandler} type="button" aria-label={label} className="control-arrow control-prev"></button>}
            renderArrowNext={(clickHandler, hasNext, label) => <button onClick={clickHandler} type="button" aria-label={label} className="control-arrow control-next"></button>}

        >
            {
                imges.map((el, i) => {
                    return (
                        <div key={i}>
                            <img className='main_img' alt="construction site" src={el} />
                        </div>
                    );
                })
            }
        </Carousel >

    );

};

export default Photos;
