import * as Yup from 'yup'

export const loginSchema = Yup.object({
      username:Yup.string("รูปแบบอีเมลไม่ถูกต้อง")
      .required("usernsme"),
      // password:Yup.string().min(6,"รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน")
      password:Yup.string()
      .min(6,({path, value})=>`${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
      .required("กรุณากรอกรหัสผ่าน"),
      confirmpassword:Yup.string()
      .oneOf([Yup.ref("password")],"กรุณากรอกพาสเวิดให้ตรง")
      .required("กรุณากรอกพาสเวิด"),
      age:Yup.number()
      .typeError('ต้องมีตัวเลข')
      .min(11, ({path, value})=>`${path} ต้องมีอายุมากกว่า 10 ปีตอนนี้คือ ${value}`)
      .required("กรุณากรอกอายุ"),
      terms:Yup.boolean()
      .oneOf([true], "กรุณายอมรับเงื่อนไขก่อนสมัคร"),
      tell:Yup.string()
      .matches(/^d{10}$/, "เบอโทรต้องมี 10 ตัวเลข")
      .required("กรุณากรอกเบอร์")
})