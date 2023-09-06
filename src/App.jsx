import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert('แบบฟอร์มสมัครสมาชิกถูกต้อง')
    console.log(data);
    reset()
  };
  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="header-text">Register Form Validate</h3>
          <label className="requiredlabel">Firstname </label>
          <input
            type="text"
            className="inputForm"
            placeholder="Input firstname Here"
            {...register("firstname", {
              required: "กรุณากรอกชื่อจริง",
              maxLength: 20,
            })}
          />
          {errors.firstname && (
            <p className="required">{errors.firstname.message}</p>
          )}

          <label className="requiredlabel">Lastname </label>
          <input
            type="text"
            className="inputForm"
            placeholder="Input lastname Here"
            {...register("lastname", { required: "กรุณากรอกนามสกุล" })}
          />
          {errors.lastname && (
            <p className="required">{errors.lastname.message}</p>
          )}
          <label className="requiredlabel">Email </label>
          <input
            type="text"
            className="inputForm"
            placeholder="Input email Here"
            {...register("email", {
              required: "กรุณากรอกอีเมล",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "รูปแบบอีเมลไม่ถูกต้อง",
              },
            })}
          />
          {errors.email && <p className="required">{errors.email.message}</p>}
          <label className="requiredlabel">Password </label>
          <input
            type="password"
            className="inputForm"
            placeholder="Input password Here"
            {...register("password", {
              required: "กรุณากรอกรหัสผ่าน",
              minLength: {
                value: 6,
                message: "รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร",
              },
            })}
          />
          {errors.password && (
            <p className="required">{errors.password.message}</p>
          )}
          <div className="sex-container">
            <label>เพศ : </label>
            <label className="sex-label">ชาย </label>
            <input
              type="radio"
              checked
              {...register("sex", {
                required: "กรุณาเลือกข้อมูลเพศให้ถูกต้อง",
              })}
              value="male"
              className="sex"
            />
            <label className="sex-label">หญิง </label>
            <input
              type="radio"
              {...register("sex", {
                required: "กรุณาเลือกข้อมูลเพศให้ถูกต้อง",
              })}
              value="female"
              className="sex"
            />
          </div>
          {errors.sex && <p className="required">{errors.sex.message}</p>}

          <div className="button-group">
            <button type="submit" className="submitBut">
              ยืนยัน
            </button>
            <button type="reset" className="resetBut">
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default App;
