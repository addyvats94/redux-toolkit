import classes from './Auth.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authSliceAction } from "../store/authReducer";
import { Fragment } from 'react';

const Auth = () => {

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const authHandler = () => {
    debugger;
    dispatch(authSliceAction.logout())
  }

  return (
    <Fragment>
      { isAuthenticated &&
        <main className={classes.auth}>
          <section>
          <form>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button onClick={authHandler}>Login</button>
          </form>
        </section>
      </main>
      }
      
    </Fragment>
    
  );
};

export default Auth;
