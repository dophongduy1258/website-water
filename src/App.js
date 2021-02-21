import HomePage from './containers/homePage/index'
import Headers from './components/header'
import Footers from './components/footer'

import HomeContainer from './containers/homePage/index'
import ProductContainer from './containers/productPage/index'

import {BrowserRouter as Router,
  Switch,
  Route,Link,History, Redirect} from 'react-router-dom'
import { useState } from 'react'



function App(props) {

   function showRouter(routes){
      let result = null;
      if(routes.lenght > 0){
        result = routes.map((value,idx)=>{
          return(
            <Route 
            key={idx}
            path={value.path} 
            exact={value.exact}
            component={value.main}
          />
          )
        });
      }
      return result;
   }

  var [isLogin,setLogin] = useState(false);
  function showLogin(value){
    var result= null;
    if(value === true)
    {
      result = <div className='modal-login'>
                <div className='modal_header'>
                  <h1>Login</h1>
                  <i class="fas fa-times"></i>
                </div>
                <div className='modal_body row'>
                  <form className='wrap-content col-xl-12'>
                    <div className='row mb-3'>
                      <label>Tên đăng nhập / Email :</label>
                      <input className='form-control' type='text'></input>
                    </div>
                    <div className='row'>
                      <label className='col-xl-3'>Mật khẩu :</label>
                      <input className='col-xl-9 form-control' type='text'></input>
                    </div>
                  </form>
                </div>
                <div className='modal_footer'>footer</div>
              </div>
      return result;
    }
    return result;
  }


  var showModalLogin = isLogin ? <div className='modal-login'>
                                    <div className='modal_header'>
                                      <h1>Login</h1>
                                      <i class="fas fa-times" onClick={()=>setLogin(false)}></i>
                                    </div>
                                    <div className='modal_body row'>
                                      <form className='wrap-content col-xl-12'>
                                        <div className='row mb-3 mt-5'>
                                          <label className='col-xl-3'>Email :</label>
                                          <input className='col-xl-6 form-control' type='text'></input>
                                        </div>
                                        <div className='row'>
                                          <label className='col-xl-3'>Mật khẩu :</label>
                                          <input className='col-xl-6 form-control' type='text'></input>
                                        </div>
                                        <div className='row mt-2 '>
                                          <div className='col-xl-12 text-center'>
                                            <a href='#'>Chưa có tài khoản</a>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className='row modal_footer'>
                                      <div className='col-xl-6'>
                                          <buton className='btn btn-danger' style={{marginLeft:'100px'}} onClick={()=>setLogin(false)}>Cancel</buton>
                                      </div>
                                      <div className='col-xl-6'>
                                          <buton className='btn btn-primary' style={{marginLeft:'20px'}}>Login</buton>
                                      </div>
                                    </div>
                                  </div> : '';




  return (
    <Router>
      <div className="App">
        {/* navbar */}
        <header>
          <div className='nav-logo'>
              <img style={{width:'auto',height:'50px'}} src='./assets/images/logo2.png' />
          </div>
            <nav>

              
              <ul className='nav-list'>
                <li className='nav-item'><a href='/' className='nav-link'>Home</a></li>
                <li className='nav-item'><a href='/product' className='nav-link'>Product</a></li>
                <li className='nav-item'><a className='nav-link'>Contact</a></li>
              </ul>

            </nav>
          
            <div className='nav-cart'>
              <div><a  className='nav_login' onClick={()=>setLogin(true)}>Login</a></div>
              {/* <button type="button" class="btn btn-primary rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button> */}
              <div><a href='#'><i class='bx bxs-cart nav_cart'><sup >0</sup></i></a></div>
            </div>

        </header>

        {/* <div className='modal-login'>
          <div className='modal_header'>
            <h1>Login</h1>
            <i class="fas fa-times"></i>
          </div>
          <div className='modal_body row'>
            <form className='wrap-content col-xl-12'>
              <div className='row mb-3'>
                <label>Tên đăng nhập / Email :</label>
                <input className='form-control' type='text'></input>
              </div>
              <div className='row'>
                <label className='col-xl-3'>Mật khẩu :</label>
                <input className='col-xl-9 form-control' type='text'></input>
              </div>
            </form>
          </div>
          <div className='modal_footer'>footer</div>
        </div> */}
        {showModalLogin}


        {/* ROUTERS */}
        {/* <Switch>
          {showRouter(routes)}
        </Switch> */}

        
        <Route path='/' exact component={HomeContainer}/>
        <Route path='/product' component={ProductContainer}/>      
        
        
        
        
        <Footers/>  

      </div>
    </Router>
  );
}

export default App;
