import React from "react";
import { connect } from "react-redux";
import { setUsersAC } from "../../../../../redux/users-reducer";
import Radio from "./Radio";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radio);
