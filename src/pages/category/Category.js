import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button, Form } from "react-bootstrap";
import NewCategory from "../../components/layouts/privateRoute/Category/NewCategory";
import CategoryTable from "../../components/layouts/privateRoute/Category/CategoryTable";

function Category() {
  return (
    <AdminLayout title="Category">
      <NewCategory />
      <CategoryTable />
    </AdminLayout>
  );
}

export default Category;
