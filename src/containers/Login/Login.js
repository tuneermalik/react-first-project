import React, { Component } from 'react';
import classes from './Login.css';
// import bootstrap from'../../assets/css/bootstrap.min.css';
// import '../../assets/css/font-awesome.min.css';
// import '../../assets/css/metisMenu.min.css';
// import '../../assets/css/sb-admin-2.css';
import Button from 'react-bootstrap/lib/Button';
class Login extends Component {
    render () {
        return (
           <div>
                {/* <div className={bootstrap.container}> */}
                <div className="container">
                <div className="row">
               <div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
                    </div>
                    <div className="panel-body">
                    <form>
                    <fieldset>
                    <div className="form-group">
                    <input className="form-control" placeholder="E-mail" name="email" type="email"  />                    
                    </div>
                    <div className="form-group">
                     <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                         </div>
                    <div className="checkbox">
                    <label>
                    <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                    </label>
                     </div>
                    <a href="index.html" className="btn btn-lg btn-success btn-block">Login</a>
                    </fieldset>
                    </form>
                    </div>
                    </div>
                    </div>
               </div>
               </div> 
               </div>
        ); 
    }
};


export default Login;

