import './Forms.css'
import SubmitButton from './SubmitButton';

function Patient_attending(){
    return(
        <>
        <form className="add">
            <label htmlForfor="add_patient">Patient ID</label>
            <input type="text" name="add_patient" id="add_patient"></input>

            <label htmlForfor="fname">First Name</label>
            <input type="text" name="fname" id="fname"></input>

            <label htmlForfor="lname">Last Name</label>
            <input type="text" name="lname" id="lname"></input>

            <label htmlForfor="b_weight">weight</label>
            <input type="text" name="b_weight" id="b_weight"></input>

            <label htmlForfor="b_height">Height</label>
            <input type="text" name="b_height" id="b_height"></input>

            <label htmlForfor="address">Address</label>
            <textarea name="address" id="address"></textarea>

            <label htmlForfor="dob">Date Of Birth</label>
            <input type="date" name="dob" id="dob"></input>

            <label htmlForfor="contact_info">Contact N0.</label>
            <input type="text" name="contact_info" id="contact_info"></input>

            <label htmlForfor="details">Description</label>
            <textarea name="details" id="details"></textarea>

            <SubmitButton text="Submit" className="form-button"></SubmitButton>

        </form>
        </>
    )
}
export default Patient_attending;