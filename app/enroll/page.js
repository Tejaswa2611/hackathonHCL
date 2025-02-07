export default function Enroll(){
    return(
        <>
       
        <form>
             <div>
            <label> Full Name</label>
            <input type="Text"/>
            </div>

            <div>
            <label> Date of Birth</label>
            <input type="Date"/>
            </div>

            <div>
            <label> Gender</label>
            <select>
                <option>Select your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>


            </select>
            </div>


            <div>
            <label> Marital Status</label>
            <select>
                <option>Select Your Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
                <option>Other</option>

            </select>
            </div>
            <div>
                <label> Address</label>
                <input type="Text"/>
            </div>
            <div>
                <label> Phone Number</label>
                <input type="tel"/> 
            </div>
            <div>
                <label> Email Address</label>
                <input type="Email"/>
            </div>
            
        </form>

        </>
    );
}