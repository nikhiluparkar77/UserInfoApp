import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import  PropTypes from "prop-types";
import { SinglePhotoFunc } from '../../Redux/Action/AuthAction';
import Button from '../Common/Field/Button';
import { Link } from "react-router-dom"; 

const AlbumModel = ({auth,SinglePhotoFunc,customprops}) => {
    const [Photo,SetPhoto] = useState();
    useEffect(()=>{  
        SinglePhotoFunc(customprops.match.params.photoId);  
    },[]);

    useEffect(()=>{  
        SetPhoto(auth.singlePhoto);  
    },[auth]);

    
     
   let PhotoData; 
    if(Photo == undefined){
        PhotoData = <h5>Photo Not Avilable</h5>
    }else{
        PhotoData = (
            <div>
                <div className="row">
                    <div className="col-lg-8">
                        <p>{Photo.title}</p>
                    </div>
                    <div className="col-lg-4 text-right">
                        <Link to="/home"> <Button value="Home" /></Link>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <img src={Photo.url} alt={Photo.title} className="img-fluid" />  
                    </div> 
                </div> 
            </div>
        )
    }
 

    return (
        <div className="AlbumModel commanBlock">
            <div className="container"> 
                {PhotoData} 
                <hr />
            </div>
        </div>
    )
}

 
AlbumModel.propTypes = { 
    auth:PropTypes.object.isRequired, 
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    SinglePhotoFunc
     
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(AlbumModel);
