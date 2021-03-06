import React from 'react';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <div className="App">
          <BrowserRouter basename={window.location.pathname || ''}>
              <Route exact path="/" component={Index} />
          </BrowserRouter>
          <div className="container">

              <iframe className="frame" src="https://datastudio.google.com/embed/reporting/b6466a22-7f42-49c6-a8db-738d0eebaaa0/page/8YITB" ></iframe>
          </div>
              <Footer />

    </div>
  );
}

export default App;
