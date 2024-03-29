import { useSelector, useDispatch } from "react-redux";
import "../styles/navbar.css";
import { actions } from "../redux/actions";
export const NavBar = () => {
  const totalProducts = useSelector((s) => s.y.products);
  const totalPrice = useSelector((s) => s.y.price.toFixed(2));
  const dispatch = useDispatch();
  function onQueryChange(event) {
    const query = event.target.value;
    dispatch({ type: actions.QUERY_CHANGE, payload: query });
  }

  return (
    <div className="navbar">
      <div className="title-container">
        <h1 className="title">
          <span style={{ color: "#f8cb45" }}>blink</span>
          <span style={{ color: "#54b225" }}>it</span>
        </h1>
      </div>
      <div className="delivery-box">
        <b>Delivery in 8 Mins</b>
        <span>Hyderabad, telangana</span>
      </div>
      <div className="search-container">
        <span className="material-icons search-icon">search</span>
        <input onChange={onQueryChange} placeholder="Search ..." />
      </div>
      <button className="btn">Login</button>
      <div className="cart">
        <span className="material-icons icon">shopping_cart</span>
        {totalPrice !== 0 ? (
          <div>
            <span>{totalProducts} Items</span>
            <span>₹ {totalPrice}</span>
          </div>
        ) : (
          <span>My Cart</span>
        )}
      </div>
    </div>
  );
};
