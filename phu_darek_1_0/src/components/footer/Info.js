import React from 'react';

const Info = () => {
    return (
        <div className='footer_info'>
            <h2 className='footer_info_title' >Kontakt:</h2>
            <p className='footer_info_info' >tel. <span itemProp="telephone"><a href="tel:+00000000000">+00 000 000 000</a></span> </p>
            <p className='footer_info_info' >e-mail. <span> <a href="mailto: email@example.com"> abc@ab.ab </a> </span> </p>
        </div>
    );
}

export default Info;
