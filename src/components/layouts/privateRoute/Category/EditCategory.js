import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCategory,
  deleteCategory,
} from "../../../../pages/category/categoryAction";
import slugify from "slugify";

function EditCategory() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    toggle: "inactive",
  });
  const { selectedCategory } = useSelector((state) => state.category);
  useEffect(() => {
    setForm(selectedCategory);
  }, [selectedCategory]);
  const handleDelete = () => {
    dispatch(deleteCategory(form.slug));
  };
  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "toggle") {
      value = checked ? "active" : "inactive";
    }
    setForm({
      ...form,
      [name]: value,
    });
    // console.log(e.target.value);
    // console.log(e.target.checked);
    //     if (name === "name") {
    //       setForm({ ...form, [name]: value });
    //     } else if (name === "toggle") {
    //       setForm({ ...form, [name]: checked ? "active" : "inactive" });
    //     }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    //default has name and status but I want to pass slug as another field
    // const catObj = {
    //   ...form,
    //   slug: slugify(form.name, { lower: true, trim: true }), // some-string
    // };
    dispatch(AddCategory(form));
  };
  return (
    <div>
      {/* Step 1 */}
      <Form onSubmit={handleOnSubmit} className="border p-5 ms-1 me-1">
        <Row>
          <Col md="2">
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                value={form.name}
                type="text"
                placeholder="Category name .."
                onChange={handleOnChange}
                name="name"
                required
              />
            </Form.Group>
          </Col>
          <Col md="5">
            <Form.Group className="mb-3 " controlId="switch">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Toggle Category"
                onChange={handleOnChange}
                name="toggle"
                checked={form.status === "active"}
              />
            </Form.Group>
          </Col>

          <Col md="5">
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default EditCategory;
