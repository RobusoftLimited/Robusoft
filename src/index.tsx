import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import About from './About';
import Mission from './Mission';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Services from './Services';
import Link from './Link';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <About/>
    <Mission/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Link/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
