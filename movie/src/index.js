import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Movies from './components/movies/Movies';
import MovieDetail from './components/details/MovieDetail';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add bootstrap min to index
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
          <Route path="/:id">
            <MovieDetail />
          </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
