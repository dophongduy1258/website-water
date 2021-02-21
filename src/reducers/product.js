import * as types from '../constants/product'


const initialState = [
    {id:'1',name:'a',price:2000,image:'https://sodafoods.com/wp-content/uploads/2019/11/Coca-Nh%E1%BA%ADt-Nh%C3%AD-160ml-600x600.jpg'},
    {id:'2',name:'b',price:3000,image:'https://anbinhphat.com/wp-content/uploads/2018/04/aquafina-500ml.jpg'},
    {id:'3',name:'c',price:6500,image:'https://gaonuoc.com/wp-content/uploads/2018/09/oriwa-nuoc-uong-van-phong-hcm.jpg'},
    {id:'4',name:'d',price:600,image:'https://satoriwatervn.com/wp-content/uploads/2020/08/c92dedd5259775fc2324fedfb1dae779.jpg'},
    {id:'5',name:'e',price:77500,image:'https://www.queanhwater.com/wp-content/uploads/2015/10/N%C6%B0%E1%BB%9Bc-kho%C3%A1ng-la-vie-5l_qu%E1%BA%BF-anh-water.png'},
    {id:'6',name:'f',price:24700,image:'https://image.pharmacity.vn/live/uploads/2019/04/P01500_1_l.jpg'}
]


const productReducer = (state = initialState,action)=>{
    switch(action.type){

        case types.ADD_PRODUCT:
            return [...state]

        default: 
           return [...state]
    }
}

export default productReducer;