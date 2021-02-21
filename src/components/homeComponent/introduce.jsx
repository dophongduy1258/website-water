import React from 'react';
import PropTypes from 'prop-types';
import introduce_image1 from '../../images/introduce-img1.png'
import introduce_image2 from '../../images/introduce-img2.jpg'

Introduce.propTypes = {
    
};

function Introduce(props) {
    return (
        <>
            {/* introduce */}
      <section className='wrapper-introduce'>
            <div className='introduce_title'>Giới thiệu</div>

            <div className='wrapper_content1'>

              <img src={introduce_image1}/>
              
              <div className='introduce_content1'>
                <h2>Nội dung 1</h2>
                <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                      eu, pretium quis, sem. Nulla consequat massa quis enim. 
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                       eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                       venenatis vitae, justo. Nullam dictum felis eu pede 
                       mollis pretiu</h4>
              </div>
            </div>

            <div className='wrapper_content2'>
              <div className='introduce_content2'>
                <h2>Nội dung 2</h2>
                <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                      eu, pretium quis, sem. Nulla consequat massa quis enim. 
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                      venenatis vitae, justo. Nullam dictum felis eu pede 
                      mollis pretiu</h4>
              </div>
              <img className='introduce_image2' src={introduce_image2}/>
            </div>
      </section>
        </>
    );
}

export default Introduce;