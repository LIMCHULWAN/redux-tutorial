import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {allReducers as props} from "./redux/reducers";

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <p>{props.users.user}</p>
      <button onClick={()=>props.updateUser('KIM')}>change name</button>
    </div>
  );
}

// store가 갖고 있는 state를 현재 컴포넌트의 Props로 subscribe한다.
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  users: state.users,
  products: state.products
})

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
     updateUser:(name) => dispatch(name)
})

// 커링 펑션, HoC
export default connect(mapStateToProps, mapActionToProps)(App);
