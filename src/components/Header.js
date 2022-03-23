import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authSliceAction } from "../store/authReducer";
import { Fragment } from 'react';

const Header = () => {

  const dispatch = useDispatch();

const logutHandler = () => {
  dispatch(authSliceAction.login())
}

const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <Fragment>
      {!isAuthenticated && <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>}
    </Fragment>
    
  );
};

export default Header;
