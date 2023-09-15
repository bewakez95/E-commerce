import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase-config/index";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setUser } from "./userSlice";

export const createNewAdminUser = async (userInfo) => {
  try {
    const responsePending = createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    toast.promise(responsePending, {
      pending: "Please wait..",
      success: "Created Successfully",
    });
    const response = await responsePending;
    if (response.user.uid) {
      const docRef = doc(db, "users", response.user.uid);
      await setDoc(docRef, userInfo);
      console.log(userInfo);
    }
    console.log(response);
  } catch (e) {
    // console.log(e);
    toast.error(e);
  }
};

export const SignInAdmin =
  ({ email, password }) =>
  async (dispatch) => {
    // console.log(email);
    try {
      const authSnap = signInWithEmailAndPassword(auth, email, password);
      toast.promise(authSnap, {
        pending: "Loading ...",
        success: "Success log in ..",
      });
      const { user } = await authSnap;
      //   console.log(user);
      dispatch(getUserInfo(user.uid));
    } catch (e) {
      toast.error(e);
    }
  };
export const getUserInfo = (uid) => async (dispatch) => {
  //   console.log(uid);
  try {
    const userSnap = await getDoc(doc(db, "users", uid));
    console.log(userSnap);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      dispatch(setUser({ ...userData, uid }));
    } else {
      console.log("no doc");
    }
  } catch (e) {
    toast.error(e);
  }
};
