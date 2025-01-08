
import * as yup from 'yup'

 const  formSchema=yup.object({
    fname:yup.string().min(2).required("please enter the name "),
})
export default formSchema


// import * as yup from 'yup'
// const logindata=yup.object({
//     email:yup.string().email().required('enter the valid email'),
//     password:yup.string().min(8).required('please enter more than 8 words'),
//     Ischecked:yup.boolean().required("checkbox is not filled")
// })
// export default logindata;