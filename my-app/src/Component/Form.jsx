export default function Form() {
    return (
        <form>
            <div id='form-input'>
            <label>Name : <input type='text' name="name"/><br/></label>
            <label>RollNumber : <input type='text' name="rollno"/><br/></label>
            <label>Date Of Birth : <input type="date" name="dob"/><br/></label>
            <label>Email : <input type='email' name='mail'/><br/></label>
            <label>Phone Number : <input type='tel' name='phno'/><br/></label>
            <label>Gender :
                <input type='radio' name='Gender' value='male'/>Male
                <input type='radio' name='Gender' value='female'/>Female
                <input type='radio' name='Gender' value='other'/>Other<br/>
            </label>
            {/* <ul >
            <li><input type='radio' name='Gender'/>Male</li>
            <li><input type='radio' name='Gender'/>Female</li><br/>
            </ul> */}
            <label>Hobbies :
                <input type='checkbox'/>Eating
                <input type='checkbox'/>Sleeping
                <input type='checkbox'/>Again Sleeping<br/>
            </label>
            <label for='country'>Select your country : 
                <select id='country'>
                <option value='India'>India</option>
                <option value='America'>America</option>
                <option value='Japan'>Japan</option>
                </select><br/>
            </label>
            <label>Comments : <textarea></textarea><br/></label>
            </div>
            <center>
            <div id='submit'>
            <input type='submit'></input>
            </div>
            </center>
        </form>
    );
};