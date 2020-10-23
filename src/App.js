import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import './App.css';
import Login from './Component/AuthComponent/Login';
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import PrivateRoutes from "./Component/Routes/PrivateRoutes";
import HomeComponent from './Component/HomeComponent';
import setAuthToken from './Component/setAuth/setAuthToken';
import { setCurrentUser } from './Redux/Action/AuthAction';
import UserProfile from './Component/UserProfile/UserProfile';
import Posts from './Component/Posts/Posts';
import Albums from './Component/Albums/Albums';
import Tasks from './Component/Tasks/Tasks';
import PostDetails from './Component/Posts/PostDetails';
import Comments from './Component/Comments/Comments';
import AlbumCard from './Component/Albums/AlbumCard';
import AlbumModel from './Component/Albums/AlbumModel';


if(localStorage.jwtToken){ 
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.userInfo)); 
}


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
           <Header /> 
            <Switch>
              <PrivateRoutes  path="/almum-model/:photoId" exact component={AlbumModel}  />
              <PrivateRoutes  path="/album-card/:albumId" exact component={AlbumCard}  />
              <PrivateRoutes  path="/comment/:postId" exact component={Comments}  />
              <PrivateRoutes  path="/post-detail/:postId" exact component={PostDetails}  />
              <PrivateRoutes  path="/task/:userId" exact component={Tasks}  />
              <PrivateRoutes  path="/album/:userId" exact component={Albums}  />
              <PrivateRoutes  path="/post/:userId" exact component={Posts}  />
              <PrivateRoutes  path="/profiile/:id" exact component={UserProfile}  />
              <PrivateRoutes  path="/home" exact component={HomeComponent}  />
              <Route path="/" component={Login} />
            </Switch> 
          </Router>
          <Footer />
      </Provider> 
    </div>
  );
}

export default App;
