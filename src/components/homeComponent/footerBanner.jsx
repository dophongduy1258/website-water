import React from 'react';
import footer_image from '../../images/foot-banner.jpg'

function FooterBanner(props) {
    return (
        <>
            {/* foot banner */}
        <section className='footer-banner'>
                <img className='footer-img' src={footer_image}/>
        </section>
        </>
    );
}

export default FooterBanner;