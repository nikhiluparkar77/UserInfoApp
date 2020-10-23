import React,{ useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { UserListFunc } from '../Redux/Action/AuthAction';


const HomeComponent = ({UserListFunc,auth}) => {
    const [ListUser, setListUser] = useState();
    useEffect(()=>{
        UserListFunc();
    },[])
 

    useEffect(
        (e) => { 
          setListUser(auth.userList);
        },
        [auth]
      );


      let UserData;
      if (ListUser == undefined) {
        UserData = <h4>No User List Avilable</h4>;
      } else {
        UserData = (
            <div className="row">
            {ListUser.map((item, index) => (
            <div className="col-lg-4" key={index}>
               <Link to={`/profiile/${item.id}`} className="LinkClass"> 
                    <div className="card my-3 mt-3" >
                        <div className="card-body">
                            <h5 className="card-title text-center">{item.name}</h5>  
                        </div>  
                    </div>
                </Link>
            </div>))}
        </div>
        );
      }



    return (
        <div className="Home commanBlock">
            <div className="container">
            <h4 className="card-title"> User List</h4><hr />
           {UserData}
            </div>
             
        </div>
    )
}


HomeComponent.propTypes = {
   
    auth:PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    UserListFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
 
