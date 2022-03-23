import classes from './Counter.module.css';
import { Component } from "react";
import {useSelector, useDispatch, connect} from 'react-redux';
import { counterSliceActions } from "../store/counterReducer";


// class Counter extends Component  { // Class Based COmponent Redux Example
//   incHandler = () => {
//     this.props.increment()
//   }

//   decHandler = () => {
//     this.props.decrement()
//   }

//   toggleCounterHandler = () => {};

//   render() {
//     return( 
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick = {this.incHandler.bind(this)}>Increment</button>
//         <button onClick = {this.decHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )}
// };

// const mapStateToProps = state => {
//   return {
//     counter : state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'INC'}),
//     decrement: () => dispatch({type: 'DEC'})
//   }
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);



const Counter = () => {

  const dispatch = useDispatch();

  // const incHandler = () => {
  //     dispatch({type: 'INC'})
  //   }
  
  //   const decHandler = () => {
  //     dispatch({type: 'DEC'})
  //   }

  //   const increaseHandler = () => {
  //     dispatch({type: 'INCREASE', amount: 5})
  //   }

  //   const toggleCounterHandler = () => {
  //     dispatch({type: 'TOGGLE'})
  //   }


//reduxjs/toolkit implimentation
  const incHandler = () => { 
    dispatch(counterSliceActions.increment())
  }

  const decHandler = () => {
    dispatch(counterSliceActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterSliceActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggle())
  }

    const counter= useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incHandler}>Increment</button>
        <button onClick = {increaseHandler}>Increment by 5</button>
        <button onClick = {decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
  

}

export default Counter;
