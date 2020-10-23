import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { PostFunc,SinglePostFunc } from '../../Redux/Action/AuthAction';
import { Link } from "react-router-dom";
import Button from "../Common/Field/Button";

const PostDetails = ({auth,SinglePostFunc,customprops}) => {
    const [PostDetail,SetPostDetail] = useState();
    
    useEffect(()=>{  
        SinglePostFunc(customprops.match.params.postId); 
    },[]);

    useEffect(()=>{  
        SetPostDetail(auth.singlePost) 
    },[auth]);




let DetailsPost;
if(PostDetail == undefined){
    DetailsPost = <h5>Post Details Not Avilable</h5>
}else{
    DetailsPost = (
        <div className="row">
        <div className="col-lg-12">
           <h5>{PostDetail.title}</h5>
           <hr />
           <p>{PostDetail.body} </p>
           <hr />
           <Link to={`/comment/${PostDetail.id}`}><Button value="Comments" /></Link>
        </div>
    </div>   
    )

}


    return (
        <div className="PostDetails commanBlock">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                    <h4 className="card-title">Post Details</h4>
                    </div>
                    <div className="col-lg-6 text-right">
                        <Link to="/home"><Button value="Home" /></Link>
                    </div>
                </div>
                <hr />
                {DetailsPost}
            </div>
        </div>
    )
}

 
PostDetails.propTypes = { 
    auth:PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    PostFunc,
    SinglePostFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
 
