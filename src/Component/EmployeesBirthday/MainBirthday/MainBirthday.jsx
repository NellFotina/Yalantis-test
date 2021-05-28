import React from "react";
import * as axios from "axios";
import "./MainBirthday.module.css";
import classes from "./MainBirthday.module.css";

class MainBirthday extends React.Component {
  componentDidMount() {
    axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => {
        this.props.setUsers(response.data);
      });
  }
  render() {
    return (
      <div className={classes.birthday}>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <span>{u.lastName} </span>
              <span>
                {u.firstName}
                {" - "}
              </span>
              <span>
                {new Date(u.dob).getDay()}{" "}
                {new Date(u.dob).toLocaleString("en", { month: "long" })},{" "}
                {new Date(u.dob).getFullYear()}
                {" year"}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MainBirthday;
