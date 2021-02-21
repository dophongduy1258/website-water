import React from 'react';
import PropTypes from 'prop-types';
import Item from './item'

RecipeList.propTypes = {
    
};

function RecipeList(props) {

    const {listProduct} = props
    const Item = listProduct.map((value,idx)=>{
        return (
            
                <div className="col-mb-4">
                    <div className="card">
                        <img src={value.image} className="card-img-top" style={{width:'150px',height:'150px'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text">{value.price} đ</p>
                            <a href="#" class="btn btn-primary">Thêm giỏ hàng</a>
                        </div>
                    </div>
                </div>
                

        )
    })

    return (
        // <div className='list__product' style={{margin:'100px 0',width:'1500px',height:'500px'}}>
        //     <div className='list__product-card'>
                
        //     </div>
        // </div>
            <h2>This is recipelist</h2>
    );
}

export default RecipeList;