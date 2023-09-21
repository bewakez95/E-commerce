import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../../../pages/category/categorySlice";
import CustomModal from "../../../custom-modal/CustomModal";
import NewCategory from "./NewCategory";
import { getCategories } from "../../../../pages/category/categoryAction";
import { setModalShow } from "../../../../redux/systemState/systemSlice";
import EditCategory from "./EditCategory";

function CategoryTable() {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  console.log(categoryList);
  const handleOnEdit = (categoryDetail) => {
    dispatch(setSelectedCategory(categoryDetail));
    dispatch(setModalShow(true));
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <CustomModal title="update the category">
        <EditCategory />
      </CustomModal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((cat, i) => {
            return (
              <tr key={cat.slug}>
                <td>{i + 1}</td>
                <td>
                  <span className={cat.toggle}>{cat.toggle}</span>
                </td>
                <td>{cat.name}</td>
                <td>{cat.slug}</td>
                <td>
                  <Button variant="warning" onClick={handleOnEdit(cat)}>
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CategoryTable;
