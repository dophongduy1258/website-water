import React from 'react';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'

Banner.propTypes = {
    
};

function Banner(props) {
    return (
       <>
        {/* banner */}
        <section className='wrapper-banner'>
                <div className='banner-content'>
                    <h1>WATER</h1>
                    <div className='separator'> 
                      <div className='line line-left'></div>
                      <div className='brightness'><i class='bx bxs-brightness' style={{fontSize:'2rem'}}></i></div>
                      <div className='line line-right'></div>
                    </div>
                    <p>The most reputable water distribution website</p>
                </div>
                <div className='banner-right'>
                  <div className='image_background'></div>
                  <img className='banner_image2' src={banner2}/>
                </div>
        </section>
       </>
    );
}

export default Banner;