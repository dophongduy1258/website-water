import React from 'react'
import HomeContainer from './containers/homePage/index'
import ProductContainer from './containers/productPage/index'


const routers = [
    {
        path:'/',
        exact:true,
        main: ()=><HomeContainer/>
    },
    {
        path:'/product',
        exact:false,
        main: ()=><ProductContainer/>
    }
];

export default routers;