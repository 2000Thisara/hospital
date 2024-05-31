import MainNavButton from "./MainNavButton";
import "./Admin_home_page.css";
import Footer from "./Footer";
import Header from './Header';

const Admin_home_page = () => {
  return (
    <>
    <Header></Header>
    <div className="home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Our Hospital</h1>
        <div className="button-container">
          <MainNavButton label="ADD DOCTORS" to="/Doctors_attending"/>
          <MainNavButton label="ADD NURSES" to="/Nurses_attending" />
          <MainNavButton label="ADD PATIENTS" to="/Patients_attending" />
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Admin_home_page;
