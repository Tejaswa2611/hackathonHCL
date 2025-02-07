"use client";
import styles from "../../styles/Index.css";
import { useForm } from "react-hook-form";


export default function Enroll(){
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        // console.log("Form Data:", data);
        alert(`Data Submitted`);
      };
    return(
        <>
       <h1>Participant Enrollment Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
             <div>
            <label> Full Name</label>
            <input type="Text" {...register("Full Name", { required: "required" })}/>
            </div>

            <div>
            <label> Date of Birth</label>
            <input type="Date" {...register("Date of Birth", { required: "required" })}/>
            </div>

            <div>
            <label> Gender</label>
            <select {...register("Gender", { required: "required" })}>
                <option>Select your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>


            </select>
            </div>


            <div>
            <label> Marital Status</label>
            <select {...register("Marital Status", { required: "required" })}>
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
                <input type="Text" {...register("Address", { required: "required" })}/>
            </div>
            <div>
                <label> Phone Number</label>
                <input type="tel" {...register("Phone Number", { required: "required" })}/> 
            </div>
            <div>
                <label> Email Address</label>
                <input type="Email" {...register("Email Address", { required: "required" })}/>
            </div>
            <div>
            <label> Employment Status</label>
            <select {...register("Employment Status", { required: "required" })}>
                <option>Select Your Employment Status</option>
                <option>Employed</option>
                <option>Unemployed</option>
                <option>Retired</option>
                <option>Student</option>
                <option>Other</option>

            </select>
            </div>
            <div>
                <label>Occupation/Job Title</label>
                <input type="Text" {...register("Occupation/Job Title", { required: "required" })}/>
                            </div>
              <div>
                <label>
                    Education level
                </label>
                <select {...register("Education Level", { required: "required" })}>
                    <option> Select Your Education level</option>
                    <option> No Formal Education</option>
                    <option> High School</option>
                    <option>Bachelors's Degree</option>
                    <option>Master's Degree</option>
                    <option> Doctorate</option>
                    <option>Other</option>
                    </select>
                </div>              
                <div>
                    <label> Race/Ethnicity</label>
                    <select {...register("Race/Ethicity", { required: "required" })}>
                    <option> Select Your Race/Ethnicity</option>
                    <option> White</option>
                    <option> Black/African</option>
                    <option> Asian </option>
                    <option>Hispanic/Latino</option>
                    <option> American</option>
                    <option>Pacific Islander</option>
                    <option>Mixed</option>
                    <option>Other</option>
                    </select>
                </div>

                <div>
                <label>Nationality/Citizenship</label>
                <input type="Text" {...register("Nationality/Citizenship", { required: "required" })}/>

                </div>
                <div>
                <label>Primary Language</label>
                <input type="Text" {...register("Primary Language", { required: "required" })}/>

                </div>
                <div>
                    <label> Health Status(Chronic Conditions/Disabilities)</label>
                    <input type="Text" {...register("Health Status", { required: "required" })}/>
                </div>
                <div>
                    <label> Smoking/Alchol/Drug Use</label>
                    <input type="Text" {...register("Smoking/Alchol/Drug Use", { required: "required" })}/>
                </div>
                <div>
                    <label> Physical Activity Level</label>
                    <input type="Text"/>
                </div>

                <div>
                    <label> Heart Rate</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label> Blood Pressure</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label> Resporartory Rate</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label> Body Temperature(in degree Celcius)</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label> Oxygen Saturation(SpO2)</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label> Weight(in Kg)</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label> Height(in cm)</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label>Electrocardiogram (ECG/EKG)</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label>Blood Glucose Levels</label>
                    <input type="Text"/>
                </div>
                <div>
                    <label>Urine Output(in ml per day)</label>
                    <input type="Text"/>
                </div>
            
        </form>
        <button type="submit" >Submit</button>

        </>
    );
}