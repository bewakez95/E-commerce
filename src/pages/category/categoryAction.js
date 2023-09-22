import { toast } from "react-toastify";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { setCategoryList } from "./categorySlice";
import { useDispatch } from "react-redux";
import { setModalShow } from "../../redux/systemState/systemSlice";

export const AddCategory =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    //   console.log("error");
    try {
      const docRef = doc(db, "categories", slug);
      // console.log(slug);
      const catPromise = setDoc(docRef, rest, { merge: true });
      // console.log(catPromise);
      toast.promise(catPromise, {
        pending: "In progress",
        success: "Successfully created",
        error: "Something went wrong",
      });

      dispatch(getCategories());
    } catch (e) {
      // console.log(e);
      toast.error(e.message);
    }
  };

export const getCategories = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const catList = [];
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const slug = doc.id;
      console.log(doc);
      const document = doc.data(); //Error solved
      // console.log(document);
      catList.push({
        ...document,
        slug,
      });
      console.log(catList);
      //   console.log(`${doc.id} => ${doc.data()}`);
    });
    dispatch(setCategoryList(catList));
  } catch (e) {
    toast.error(e.message);
  }
};
export const deleteCategory = (slug) => async (dispatch) => {
  try {
    const deletePromise = deleteDoc(doc(db, "categories", slug));

    toast.promise(deletePromise, {
      pending: "In progress",
      success: "Successfully created",
      error: "Something went wrong",
    });
    await deletePromise;
    dispatch(setModalShow(false));
    dispatch(getCategories());
  } catch (e) {
    toast.error(e.message);
  }
};
