import { useRef } from "react";

export default function Form() {
    const user = useRef(null)
    const pwd = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            uName : user.current.value,
            uPwd : pwd.current.value
        }

        console.log(formData)

        user.current.value = ''
        pwd.current.value = ''
        user.current.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id='form-input'>
            <label>Name : <input type='text' name="name" ref={user}/><br/></label>
            <label>RollNumber : <input type='text' name="rollno"/><br/></label>
            <label>Date Of Birth : <input type="date" name="dob"/><br/></label>
            <label>Email : <input type='email' name='mail'/><br/></label>
            <label>Password : <input type='password' name='pwd' ref={pwd}/><br/></label>
            <label>Phone Number : <input type='tel' name='phno'/><br/></label>
            <label>Gender :
                <input type='radio' name='Gender' value='male'/>Male
                <input type='radio' name='Gender' value='female'/>Female
                <input type='radio' name='Gender' value='other'/>Other<br/>
            </label>
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