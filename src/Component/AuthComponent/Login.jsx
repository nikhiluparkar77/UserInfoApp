import React,{ useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import TextBox from "../Common/Field/TextBox";
import Button from "../Common/Field/Button";
import { LogInFunc } from '../../Redux/Action/AuthAction';

const Login = ({LogInFunc,auth}) => {
    const history = useHistory();
    const [ State, SetState ] = useState( {
        email: "",
        password: ""
    } );

    const HandleChange = (e) => {
        SetState({
            ...State,
            [e.target.name]: e.target.value,
          });
    }
    const HandleSubmit = (e) =>{
        e.preventDefault();
        const LoginData = {
          email: State.email,
          password: State.password,
        };
        LogInFunc(LoginData,history);
    }
 
    useEffect(()=>{
        if(auth.isAuthenticated){
            history.push("/home")
        }
    },[])
 
    return (
        <div className="login commanBlock">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto">
                    <div className="card my-3 mt-3">
                        <div className="card-body">
                            <h4 className="card-title">Log In</h4>
                            <hr />
                            <form onSubmit={ HandleSubmit }>
                                <TextBox label="Email" type="text" name="email" value={ State.email } onChange={ HandleChange } />
                                <TextBox label="Password" type="password" name="password" value={ State.password } onChange={ HandleChange } />
                                <hr />
                                <Button type="submit" value="Log In" /> 
                            </form> 
                        </div> 

                    </div>

                </div>
            </div>
            </div>
            
        </div>
    )
}

Login.propTypes = {
    LogInFunc:PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  const mapDispatchToProps = { 
    LogInFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(Login);