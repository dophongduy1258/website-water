import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/homeComponent/banner'
import Introduce from '../../components/homeComponent/introduce'
import FooterBanner from '../../components/homeComponent/footerBanner'

// import 'bulma/css/bulma.css'


import { connect } from 'react-redux';
Index.propTypes = {
    
};

function Index(props) {

    const {_ListProduct} = props

    return (
            <main>
                <Banner/>
                <Introduce/>
                <FooterBanner/>
            </main>

    );
}


const mapStateToProps = (state)=>{
    return{
        _ListProduct: state.product
    }
}


export default connect(mapStateToProps,null)(Index);