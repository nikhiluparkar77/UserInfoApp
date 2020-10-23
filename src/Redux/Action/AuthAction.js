import axios from "axios";
import { CURRENT_USER,USER_LIST,SINGLE_USER,USER_POSTS,USER_ALBUM,USER_TASK,SINGLE_POST,POST_COMMENT,SINGLE_ALBUM,LIST_ALBUMS,SINGLE_PHOTO } from "./Type"; 
import setAuthToken from "../../Component/setAuth/setAuthToken";

// Login User
export const LogInFunc = (LoginData,history) => (dispatch) =>{
    axios.post("https://reqres.in/api/login", LoginData).then((res)=>{ 
        const token = res.data.token;
        localStorage.setItem("jwtToken", token); 
        const UserData = res.config.data
        localStorage.setItem("userInfo", UserData); 
        setAuthToken(token)  
      dispatch(setCurrentUser(UserData));
       console.log(history.push("/home"))
    }).catch((err)=>console.log(err))
}

// set user
export const setCurrentUser = (UserData) => {
    return {
      type: CURRENT_USER,
      payload: UserData,
    };
  };

// Logut user
  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userInfo");
    setAuthToken(false);
    dispatch(setCurrentUser(false));
  };
  

  // List user
  export const UserListFunc = () => (dispatch) =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>dispatch({
       type:USER_LIST,
       payload:res.data
    })).catch((err)=> console.log(err))
  }

    // Profile
    export const ProfileFunc = (id) => (dispatch) =>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>dispatch({
         type:SINGLE_USER,
         payload:res.data
      })).catch((err)=> console.log(err))
    }

       // Post
       export const PostFunc = () => (dispatch) =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>dispatch({
           type:USER_POSTS,
           payload:res.data
        })).catch((err)=> console.log(err))
      }

      // Single Post
      export const SinglePostFunc = (postId) => (dispatch) =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>dispatch({
           type:SINGLE_POST,
           payload:res.data
        })).catch((err)=> console.log(err))
      }

      // Comments
      export const CommentFunc = () => (dispatch) =>{
        axios.get("https://jsonplaceholder.typicode.com/comments/").then((res)=>dispatch({
           type:POST_COMMENT,
           payload:res.data
        })).catch((err)=> console.log(err))
      }

         // Albums
         export const AlbumFunc = () => (dispatch) =>{
          axios.get("https://jsonplaceholder.typicode.com/albums/").then((res)=>dispatch({
             type:USER_ALBUM,
             payload:res.data
          })).catch((err)=> console.log(err))
        }

          // Albums
          export const SingleAlbumFunc = (albumId) => (dispatch) =>{
            axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then((res)=>dispatch({
               type:SINGLE_ALBUM,
               payload:res.data
            })).catch((err)=> console.log(err))
          }

         // List Of Potos
         export const ListAlbumFunc = () => (dispatch) =>{
          axios.get("https://jsonplaceholder.typicode.com/photos/").then((res)=>dispatch({
             type:LIST_ALBUMS ,
             payload:res.data
          })).catch((err)=> console.log(err))
        }

        
         // Single Potos
         export const SinglePhotoFunc = (photoId) => (dispatch) =>{
          axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`).then((res)=>dispatch({
             type:SINGLE_PHOTO ,
             payload:res.data
          })).catch((err)=> console.log(err))
        }

         // Tasks
         export const TaskFunc = () => (dispatch) =>{
          axios.get("https://jsonplaceholder.typicode.com/todos/").then((res)=>dispatch({
             type:USER_TASK,
             payload:res.data
          })).catch((err)=> console.log(err))
        }