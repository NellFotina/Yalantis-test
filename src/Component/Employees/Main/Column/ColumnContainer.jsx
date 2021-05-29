import React from "react";
import { connect } from "react-redux";
import {
  activeAC,
  notactiveAC,
  setUsersAC,
} from "../../../../redux/users-reducer";
import Column from "./Column";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    active: (userId) => {
      dispatch(activeAC(userId));
    },
    notactive: (userId) => {
      dispatch(notactiveAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);
