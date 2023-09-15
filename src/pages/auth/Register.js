import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import CustomInput from "./CustomInput";
import { Button, Form } from "react-bootstrap";
import { createNewAdminUser } from "../../redux/auth/userAction";

function Register() {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await createNewAdminUser(form);
  };
  const input = [
    {
      label: "First Name*",
      name: "fname",
      type: "text",
      placeholder: "Enter your first name",
      required: true,
    },
    {
      label: "Last Name*",
      name: "lname",
      type: "text",
      placeholder: "Enter your last name",
      required: true,
    },
    {
      label: "Phone",
      name: "number",
      type: "number",
      placeholder: "Enter your phone number",
    },
    {
      label: "Email*",
      name: "email",
      type: "email",
      placeholder: "Enter your email*",
      required: true,
    },
    {
      label: "Password*",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      label: "Password*",
      name: "cpassword",
      type: "password",
      placeholder: "Re-enter your password",
      required: true,
    },
  ];
  return (
    <AdminLayout title="Register">
      <Form
        onSubmit={handleOnSubmit}
        className="login mt-2 p-3 border shadow rounded admin-form"
      >
        {input.map((item, i) => {
          // console.log(item);
          return (
            <CustomInput {...item} key={item.label} onChange={handleOnChange} />
          );
        })}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>{" "}
    </AdminLayout>
  );
}

export default Register;
