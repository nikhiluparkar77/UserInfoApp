import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { AlbumFunc,ProfileFunc } from '../../Redux/Action/AuthAction';
import { Link } from "react-router-dom";
import Button from "../Common/Field/Button";

const Albums = ({auth,AlbumFunc,ProfileFunc,customprops}) => {
    const [Album,SetAlbum] = useState([]);

    useEffect(()=>{  
        ProfileFunc(customprops.match.params.userId);
        AlbumFunc();
    },[]);

    useEffect(()=>{ 
        let UpdatedData = auth.albums.filter((item) => item.userId === auth.singleUser.id )
        SetAlbum(UpdatedData) 
    },[auth]);



    let AlbumData;
    if(Album === undefined){
        AlbumData = <h5>No Post Avilable</h5>
    }else{
        AlbumData = (
                <div className="row">
                    <div className="col-lg-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {Album.map((item,index)=>(
                            <tr  key={index}>
                            <td> {index + 1}</td>
                            <td> {item.title}</td>
                            <td> <Link to={`/album-card/${item.id}`}><Button value="Read More..." /></Link></td>
                        </tr> 
                       )) 
                       }  
                        </tbody>
                    </table>
                      
                    </div>
                </div>
        )
    }

    return (
        <div className="Album commanBlock">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4 className="card-title">Albums</h4>
                </div>
                <div className="col-lg-6 text-right">
                    <Link to="/home"><Button value="Home" /></Link>
                </div>
            </div>
            <hr />
            {AlbumData}
            <hr />
        </div>
    </div>
    )
}

 
Albums.propTypes = { 
    auth:PropTypes.object.isRequired,
     
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    AlbumFunc,
    ProfileFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
