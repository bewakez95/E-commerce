import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { Button, Form } from "react-bootstrap";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

function LoginPage() {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const input = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
  return (
    <>
      <Header />
      <main className="main">
        <Form
          onSubmit={handleOnSubmit}
          className="login mt-2 p-3 border shadow rounded admin-form"
        >
          {input.map((item, i) => {
            // console.log(item);
            return (
              <CustomInput
                {...item}
                key={item.label}
                onChange={handleOnChange}
              />
            );
          })}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
