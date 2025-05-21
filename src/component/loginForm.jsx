import React from 'react'
import { useState, useRef } from 'react'
import * as Yup from 'yup'
import yupToFormError from "../schemas/yupToFormError"
import {loginSchema} from "../schemas/loginSchema"


const styles = {
  divInput: "flex gap-2 items-center",
  input: "input input-success",
  textError: "text-red-500 text-sm",
};

function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmpassword:"",
    age: "",
    tell:"",
    terms:false
  });
  
  const refs ={
    username: useRef(null),
    password: useRef(null),
    confirmpassword: useRef(null),
    age:useRef(null),
    tell:useRef(null),
    terms:useRef(null)
  }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, type, checked, value} = e.target
    
    setForm({ ...form, [name]: type==='checkbox'? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      await loginSchema.validate(form, { abortEarly: false });
      alert("test");
      setErrors({});
    } catch (err) {
     
      // เรียกใช้ฟังก์ชันที่แยกไว้แล้ว
      const errorObj = yupToFormError(err, refs);
       console.log(errorObj)
       
      setErrors(errorObj);
    }
  };
console.log(form)
  return (
    <div>
      <p className="text-2xl font-bold pb-10">cc20</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <label>username</label>
          <input
            className={styles.input}
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            ref={refs.username}
          />
        </div>
        <p className={styles.textError}>{errors.username}</p>

        <div className={styles.divInput}>
          <label>password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            ref={refs.password}
          />
        </div > 
        <p className={styles.textError}>{errors.password}</p>
        <div className={styles.divInput}>
          <label>confirmpassword</label>
          <input className={styles.input}
          type='password' name="confirmpassword"
          value={form.confirmpassword}
          onChange={handleChange}
          ref={refs.confirmpassword}
          />
        </div>
        <p className={styles.textError}>{errors.confirmpassword}</p>

        <div className={styles.divInput}>
          <label>age</label>
          <input
            className={styles.input}
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            ref={refs.age}
          />
        </div>
        <p className={styles.textError}>{errors.age}</p>
        <div>
          <label>terms</label>
          <input type='checkbox' 
          name="terms" value={form.terms} 
          onChange={handleChange}
          ref={refs.terms}
          />
        </div>
        <p className={styles.textError}>{errors.terms}</p>
        <div>
          <label>Tell</label>
          <input type='nmber' name="tell" className={styles.input}
          value={form.tell} 
          onChange={handleChange}
          ref={refs.tell}
          />
        </div>
        <button type="submit" className="btn btn-outline btn-success">
          submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
