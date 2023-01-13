import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from "./store/session";
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from "./components/Nav-Bar/index"
import HomePage from './components/HomePage';
import QuestionDetail from './components/Questions/QuestionDetail';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserProfile from './components/UserProfile';
import UsersList from './components/UsersList';
import User from './components/User';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';

import AskScience from './components/Post-Category/AskScience';
import AskThreaddit from './components/Post-Category/AskThreaddit';
import DoesAnybodyElse from './components/Post-Category/DoesAnybodyElse';
import Gaming from './components/Post-Category/Gaming';
import Movies from './components/Post-Category/Movies';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/questions/:questionId" exact={true}>
          <QuestionDetail />
        </ProtectedRoute>
        <ProtectedRoute path="/askScience" exact={true}>
          <AskScience />
        </ProtectedRoute>
        <ProtectedRoute path="/askThreaddit" exact={true}>
          <AskThreaddit />
        </ProtectedRoute>
        <ProtectedRoute path="/doesAnybodyElse" exact={true}>
          <DoesAnybodyElse />
        </ProtectedRoute>
        <ProtectedRoute path="/gaming" exact={true}>
          <Gaming />
        </ProtectedRoute>
        <ProtectedRoute path="/movies" exact={true}>
          <Movies />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true}>
          <HomePage />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
