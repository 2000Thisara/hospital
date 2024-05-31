import MainNavButton from './MainNavButton';
import './Home_page.css'; 
import Footer from './Footer';
import Header from './Header'

const Home_page = () => {
  return (
    <>
    <Header></Header>
    <div className="home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Our Hospital</h1>
        <div className="button-container">
          <MainNavButton label="ADMIN" to="/admin" />
          <MainNavButton label="INFORMATION" to="/about" />
        </div>
      </div>
    </div>

    <Footer></Footer>
    </>
  );
};

export default Home_page;
