import React from 'react';

const Info = () => {
    return (
        <div className='footer_info'>
            <h2 className='footer_info_title' >Kontakt:</h2>
            <p className='footer_info_info' >tel. <span itemProp="telephone"><a href="tel:+48501962712">+48 501 962 712</a></span> </p>
            <p className='footer_info_info' >e-mail. <span> <a href="mailto: darecki208@wp.pl"> darecki208@wp.pl </a> </span> </p>
        </div>
    );
}

export default Info;
