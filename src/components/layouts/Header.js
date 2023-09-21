import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { setUser } from "../../redux/auth/userSlice";

function Header() {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleOnLogOut = () => {
    signOut(auth).then(() => {
      console.log("Logged out");
      //clear the redux state
      dispatch(setUser({}));
    });
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Admin Content Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* //Put a link instead to bootstrap and className for nav link*/}

            {user?.uid ? (
              <Link className="nav-link" to="#!" onClick={handleOnLogOut}>
                <BiLogOutCircle />
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="#!">
                <BiLogOutCircle />
                Log in
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
