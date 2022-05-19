import './app.scss';
import Router from './utils/router';
import Header from './compoments/header';
import Navbar from './compoments/navbar';
import Footer from './compoments/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
