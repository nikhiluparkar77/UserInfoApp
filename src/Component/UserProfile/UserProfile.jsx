import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { ProfileFunc } from '../../Redux/Action/AuthAction';
import { Link, useHistory } from "react-router-dom";
import Button from "../Common/Field/Button";

const UserProfile = ({auth,ProfileFunc,customprops}) => {
    const [singleData, SetSingleData] = useState();
    
    useEffect(()=>{
        ProfileFunc(customprops.match.params.id);
        
    },[]);

    useEffect(()=>{
        SetSingleData(auth.singleUser);
       
    },[auth.singleUser])
     
     
 

 

let SingleUserData;
if(singleData == undefined){
    SingleUserData = <h5>No Profile Data</h5>
}else{
    SingleUserData = (
        <>
        <div className="row"> 
            <div className="col-lg-4 m-auto">
                <div className="card my-3 mt-3">
                    <div className="card-body">  
                            <h5>Details:-</h5>
                            <hr />
                            <p>User Name:- {singleData.username}</p>
                             <p>Name:- {singleData.name}</p>
                             <p>Phone No:- {singleData.phone}</p>
                            <p>Email Id.:- {singleData.email}</p>
                            <hr /> 
                      
                    </div>  
                </div>
            </div> 
        </div>
         <hr />
                    
         <div className="row">
             <div className="col-lg-4">
                 <Link to={`/post/${singleData.id}`} className="LinkClass"> 
                     <div className="card my-3 mt-3">
                         <div className="card-body">
                             <h5 className="card-title text-center">Post</h5>  
                         </div>  
                     </div>
                 </Link> 
             </div>
             <div className="col-lg-4">
                 <Link to={`/album/${singleData.id}`} className="LinkClass"> 
                     <div className="card my-3 mt-3">
                         <div className="card-body">
                             <h5 className="card-title text-center">Albums</h5>  
                         </div>  
                     </div>
                 </Link> 
             </div> 
             <div className="col-lg-4">
                 <Link to={`/task/${singleData.id}`} className="LinkClass"> 
                     <div className="card my-3 mt-3">
                         <div className="card-body">
                             <h5 className="card-title text-center">Tasks</h5>  
                         </div>  
                     </div>
                 </Link> 
             </div> 
         </div>
         </>
    )
}

    return (
        <div className="Profile commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"><h4 className="card-title">Profile    </h4></div>
                    <div className="col-lg-6"><Link to="/home" className="LinkClass"><Button type="submit" value="Home" /></Link></div>
                </div>
            
                <hr />
                    {SingleUserData}
               
            </div>
        </div>
    )
}

 
UserProfile.propTypes = { 
    auth:PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    ProfileFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
