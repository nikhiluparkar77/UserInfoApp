import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes  from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Common/Field/Button";
import { SinglePostFunc,CommentFunc } from '../../Redux/Action/AuthAction';

const Comments = ({auth,SinglePostFunc,CommentFunc,customprops}) => {

  const [Comment,SetComment] = useState([]);


  useEffect(()=>{  
    SinglePostFunc(customprops.match.params.postId); 
    CommentFunc();
},[]);
 

useEffect(()=>{ 
  let UpdatedData = auth.comments.filter((item) => item.postId === auth.singlePost.id )
  SetComment(UpdatedData) 
},[auth]);
 

let DetailsPost;
if(Comment == undefined){
    DetailsPost = <h5>No Comments Avilable</h5>
}else{
    DetailsPost = (
        <div className="row">
          <div className="col-lg-12">
            {Comment.map((item,index)=>(
            <div className="Comment" key={index}>
                <p>{index +1})</p>
            
               <h6>Name:- {item.name}</h6>
                <hr />
                 <p>Comment:-<br /> "{item.body}"" </p>
           <hr />

            </div>
          ))}
     
            
        </div>
    </div>   
    )

 
        }
 
    return (
        <div className="Comments commanBlock">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                Post:- {auth.singlePost.title}
                </div>
                <div className="col-lg-4 text-right">
                <Link to="/home"><Button value="Home" /></Link>
                </div>
              </div>
              
              <hr />
               <h5>Comments</h5> 
              <hr />
              {DetailsPost}
            </div>
        </div>
    )
}
 
Comments.propTypes = { 
    auth:PropTypes.object.isRequired, 
     
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    SinglePostFunc,
    CommentFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(Comments);

