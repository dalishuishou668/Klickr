import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LandingPage from "./components/LandingPage";
import MainPage from './components/MainPage';
import Upload from './components/Upload';
import ExplorePage from './components/ExplorePage';
import Search from './components/Search';
import YourPage from './components/YourPage';
import UserAlbumsPage from './components/UserAlbumsPage';
import UserImagesPage from './components/UserImagesPage';
import UserFavesPage from './components/UserFavesPage';
import UserFollowsPage from './components/UserFollowsPage';
import SingleImagePage from './components/SingleImagePage';
import AlbumImagesPage from './components/AlbumImagesPage';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar loaded={loaded}/>
      { loaded && (
        <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/explore' exact={true} >
          <ExplorePage />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <MainPage />
        </ProtectedRoute>
        <ProtectedRoute path='/search' exact={true} >
          <Search />
        </ProtectedRoute>
        <ProtectedRoute path='/upload' exact={true} >
          <Upload />
        </ProtectedRoute>
        <ProtectedRoute path='/yourpage' exact={true} >
          <YourPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/your-albums' exact={true} >
          <UserAlbumsPage />
        </ProtectedRoute> */}
        <ProtectedRoute path='/albums/:albumId/images' exact={true} >
          <AlbumImagesPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/your-images' exact={true} >
          <UserImagesPage />
        </ProtectedRoute> */}
        <ProtectedRoute path='/images/:imageId' exact={true} >
          <SingleImagePage />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/your-faves' exact={true} >
          <UserFavesPage />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path='/your-follows' exact={true} >
          <UserFollowsPage />
        </ProtectedRoute> */}
      </Switch>
      )}
      {/* <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <MainPage />
        </ProtectedRoute>
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;

