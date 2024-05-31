import MainNavButton from './MainNavButton';
import './Home_page.css'; 

const Home_page = () => {
  return (
    <div className="home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Our Hospital</h1>
        <div className="button-container">
          <MainNavButton label="ADMIN" href="/" />
          <MainNavButton label="INFORMATION" href="/about" />
        </div>
      </div>
    </div>
  );
};

export default Home_page;
