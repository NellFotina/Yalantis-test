import React from "react";
import * as axios from "axios";
import "./Column.module.css";
import classes from "./Column.module.css";
import RadioContainer from "./Radio/RadioContainer";

class Column extends React.Component {
  componentDidMount() {
    axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => {
        this.props.setUsers(response.data);
      });
  }
  render() {
    return (
      <div className={classes.column}>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <span>{u.lastName} </span>
              <span>{u.firstName}</span>
              <RadioContainer />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Column;
