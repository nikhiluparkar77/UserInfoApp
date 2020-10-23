 import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { TaskFunc,ProfileFunc } from '../../Redux/Action/AuthAction';
import { Link } from "react-router-dom";
import Button from "../Common/Field/Button";

const Tasks = ({auth,TaskFunc,ProfileFunc,customprops}) => {
    const [Task,SetTask] = useState([]);

    useEffect(()=>{  
        ProfileFunc(customprops.match.params.userId);
        TaskFunc();
    },[]);

    useEffect(()=>{ 
        let UpdatedData = auth.albums.filter((item) => item.userId === auth.singleUser.id )
        SetTask(UpdatedData) 
    },[auth]);



    let TasksData;
    if(Task === undefined){
        TasksData = <h5>No Post Avilable</h5>
    }else{
        TasksData = (
                <div className="row">
                    <div className="col-lg-12">
                    <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Task.map((item,index)=>(
                            <tr  key={index}>
                            <td> {index + 1}</td>
                            <td> {item.title}</td>
                            <td> {item.completed === true ? (<p className="Complete text-center">Complete</p>) : (<p className="Incomplete text-center">Incomplete</p>)}</td>
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
        <div className="Tasks commanBlock">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4 className="card-title">Tasks</h4>
                </div>
                <div className="col-lg-6 text-right">
                    <Link to="/home"><Button value="Home" /></Link>
                </div>
            </div>
            <hr />
            {TasksData}
            <hr />
        </div>
    </div>
    )
}

 
Tasks.propTypes = { 
    auth:PropTypes.object.isRequired,
     
  };

  const mapStateToProps = (state) => ({
    auth: state.auth, 
  });
  
  const mapDispatchToProps = { 
    TaskFunc,
    ProfileFunc
  };

 
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

