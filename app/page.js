"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Index.css";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`${isLogin ? "Logging in" : "Signing up"}`);
  };

  return (
    <div className={styles.container}>
      <div >
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <div>
            <label>Role</label>
            <select {...register("Role", { required: "Role is required" })}>
              <option >Select an option</option>
              <option >CRC</option>
              <option >PI</option>
            </select>
           
          </div>
          
          )}

          <div >
            <label>Email</label>
            <input type="email" {...register("email", { required: "Email is required" })} />
          
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
           
          </div>

          <button type="submit" className={styles.submitButton}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p >
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className={styles.submitButton}>
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
