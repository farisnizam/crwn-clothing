import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../components/contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/contexts/cart.context";

const Navigation = () => {
  const { curentUser } = useContext(UserContext);
  const { cartStatus, setCartStatus } = useContext(CartContext);

  const handleDropdown = (event) => {
    console.log("STATUS: ", cartStatus);

    if (cartStatus == false) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {curentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon handleDropdown={handleDropdown} />
        </div>
        {cartStatus == true ? (
          <CartDropdown style="none" />
        ) : (
          <span style={{ display: "none" }}></span>
        )}
        {/* <CartDropdown /> */}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
