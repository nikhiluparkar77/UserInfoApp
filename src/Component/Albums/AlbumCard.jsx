import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import  PropTypes from "prop-types";
import { SingleAlbumFunc,ListAlbumFunc } from '../../Redux/Action/AuthAction';
import { Link } from "react-router-dom";
import Button from "../Common/Field/Button";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const AlbumCard = ({auth,SingleAlbumFunc,ListAlbumFunc,customprops}) => {
    const [Album,SetAlbum] = useState();
    const [AlbumList,SetAlbumList] = useState();
    
    useEffect(()=>{  
        SingleAlbumFunc(customprops.match.params.albumId); 
        ListAlbumFunc();
    },[]);


    useEffect(()=>{  
        SetAlbum(auth.singleAlbum); 
        let UpdatedData = auth.listAlbums.filter((item) => item.albumId === auth.singleAlbum.id )
        SetAlbumList(UpdatedData) 
    },[auth]);
 

let AlbumData;
if(Album == undefined){
    AlbumData = <h5>No Album Avilable</h5>
}else{
    AlbumData = (
        <div> 
           <h5> Album Title:-  {Album.title}</h5> 
    </div>   
    )

}


let ListOfAlbum; 
if(AlbumList == undefined){
    ListOfAlbum = <h5>No List Of Album Avilable</h5>
}else{
    ListOfAlbum = (
        <div className="row">
            {AlbumList.map((item,index) => (
                <div className="col-lg-4" key={index}>
                    <div className="card my-3" >
                        {/* <img className="card-img-top" src={item.thumbnailUrl} alt={item.title} /> */}
                        
                        <Zoom>
                        <div aria-label={item.title}>
                            <picture>
                                <source  className="width100" srcSet={item.url} />
                                    <img
                                alt="that wanaka tree"
                                src={item.thumbnailUrl}
                                className="img-fluid width100"
                                />
                            </picture>
                            </div>
                        </Zoom>
 
                        <div className="card-body">
                            <p className="max-lines">{item.title}</p> 
                            
                            
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}
    
    return (
        <div className="Potos commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {AlbumData} 
                    </div>
                    <div className="col-lg-4 text-right">
                        <Link to="/home"><Button value="Home" /></Link>
                         
                    </div>
                </div>
              <hr />
              {ListOfAlbum}
              <hr />
                
            </div> 
        </div>
    )
}

AlbumCard.propTypes = { 
    auth:PropTypes.object.isRequired, 
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    SingleAlbumFunc,
    ListAlbumFunc
     
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(AlbumCard);



 