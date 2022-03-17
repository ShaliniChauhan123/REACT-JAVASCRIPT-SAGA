import React, { Fragment } from "react";
import "./styles.css";
import { fetchData, handleInputChangeInRedux } from "../../store/actions";
import { connect } from "react-redux";
const App = (props) => {
  function handleFetchData() {
    props.fetchData(props.title);
  }

  return (
    <div className="App">
      <div className="inputfield">
        <input
          className="newtodo"
          value={props.title}
          placeholder="Enter github username"
          onChange={(e) => props.handleInputChangeInRedux(e.target.value)}
        />
        <button className="btn" onClick={handleFetchData}>
          Fetch
        </button>
      </div>
      {props.loading ? (
        <div className="loader"></div>
      ) : props.user ? (
        <Fragment>
          <div className="userpic">
            <img className="roundpic" src={props.user.avatar_url} />
          </div>
          <div className="username">
            <div className="name">{props.user.name}</div>
            <div className="login">{props.user.login}</div>
            <div>{props.user.bio}</div>
            <div>
              {props.user.followers} {props.user.following}
            </div>
            <div>{props.user.company}</div>
            <div>{props.user.location}</div>
            <div>{props.user.email}</div>
            <div>{props.user.blog}</div>
            <div>{props.user.twitter_username}</div>
            <div>
              <b>{props.user.message}</b>
            </div>
          </div>
        </Fragment>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    user: store.fetchDataReducer.user,

    title: store.fetchDataReducer.title,
    loading: store.fetchDataReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (val) => {
      dispatch(fetchData(val));
    },

    handleInputChangeInRedux: (val) => {
      dispatch(handleInputChangeInRedux(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
