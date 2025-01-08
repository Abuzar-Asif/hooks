import React from 'react'
import { useFormik } from 'formik'
import formSchema from './Schema'

const UseFormikprac = () => {
 const {values,errors,handleBlur, handleSubmit, handleChange,touched}=useFormik(
{

  initialValues:{
    fname:'',
    Lname:'',
    Phone:"",
    Password:"",
    ConfirmPassword:"",
    },
    validationSchema:formSchema,
onSubmit:(values)=>{
  console.log(values)
}
}
 );
    return (
    <>
    <center>
    <form action="">
    <label htmlFor='firstname' >First Name:</label>
      <input autoComplete='off' type="text" id='firstname'  name="fname" value={values.fname} onChange={handleChange} onBlur={handleBlur} />
{errors.fname &&touched.fname ? <p>{errors.fname}</p>:null}
<br />
      <label htmlFor="Lname">Last Name:</label>
      <input   type="text" name="Lname" id="Lname" value={values.Lname} onChange={handleChange}  onBlur={handleBlur}/>
      <br />
      <label htmlFor="Phone">Phone:</label>
      <input  type="Phone" name="Phone" id="Phone"   value={values.Phone} onChange={handleChange} onBlur={handleBlur}/>
      <br />
      <label htmlFor="Password">Password</label> 
      <input   type="password" name="Password" id="Password"  value={values.Password} onChange={handleChange} onBlur={handleBlur}/>
      <br />
      <label htmlFor="ConfirmPassword">Confirm Password:</label>
      <input   type="password" name="ConfirmPassword" id="ConfirmPassword"   value={values.ConfirmPassword} onChange={handleChange} onBlur={handleBlur}/>
      <br />
      <button onSubmit={handleSubmit} type='submit'>Submit </button>
      </form>
      </center>
    </>
  )
}

export default UseFormikprac
