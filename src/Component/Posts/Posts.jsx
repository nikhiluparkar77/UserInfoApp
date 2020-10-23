import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { PostFunc,ProfileFunc } from '../../Redux/Action/AuthAction';
import { Link } from "react-router-dom";
import Button from "../Common/Field/Button";


const Posts = ({auth,ProfileFunc,PostFunc,customprops}) => {


    const [Post,SetPost] = useState([]);
    
    useEffect(()=>{  
        ProfileFunc(customprops.match.params.userId);
        PostFunc();
    },[]);
   
   

    useEffect(()=>{ 
        let UpdatedData = auth.posts.filter((item) => item.userId === auth.singleUser.id )
        SetPost(UpdatedData) 
    },[auth]);

    
    let PostData;
    if(Post === undefined){
        PostData = <h5>No Post Avilable</h5>
    }else{
        PostData = (
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
                        {Post.map((item,index)=>(
                            <tr  key={index}>
                            <td> {index + 1}</td>
                            <td> {item.title}</td>
                            <td> <Link to={`/post-detail/${item.id}`}><Button value="Read More..." /></Link></td>
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
        <div className="Post commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <h4 className="card-title">Posts</h4>
                    </div>
                    <div className="col-lg-6 text-right">
                        <Link to="/home"><Button value="Home" /></Link>
                    </div>
                </div>
                <hr />
                {PostData}
                <hr />
            </div>
        </div>
    )
}


Posts.propTypes = { 
    auth:PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    PostFunc,
    ProfileFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
 
