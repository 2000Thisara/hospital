import './Forms.css'
import SubmitButton from './SubmitButton';
import Header from './Header';
import Footer from './Footer';

const Doctor_attending=()=>{
    return(
        <>
        <Header></Header>
        <form className="add">
            <label htmlForfor="add_Doctor">Doctor ID</label>
            <input type="text" name="add_doctor" id="add_doctor"></input>

            <label htmlForfor="fname">First Name</label>
            <input type="text" name="fname" id="fname"></input>

            <label htmlForfor="lname">Last Name</label>
            <input type="text" name="lname" id="lname"></input>

            <label htmlForfor="address">Address</label>
            <textarea name="address" id="address"></textarea>

            <label htmlForfor="dob">Date Of Birth</label>
            <input type="date" name="dob" id="dob"></input>

            <label htmlForfor="contact_info">Contact N0.</label>
            <input type="text" name="contact_info" id="contact_info"></input>

            <label htmlForfor="details">Specialization</label>
            <input type="text" name="specialization" id="specialization"></input>

            <SubmitButton text="Submit" className="form-button"></SubmitButton>
        </form>

        <Footer></Footer>
        </>
    )
}
export default Doctor_attending;