import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import { Button, Form } from "react-bootstrap";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { SignInAdmin } from "../../redux/auth/userAction";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (user.uid) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleOnChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(SignInAdmin(form));
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
