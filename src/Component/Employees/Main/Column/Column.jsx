import React from "react";
import * as axios from "axios";
import "./Column.module.css";
import classes from "./Column.module.css";

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
              <span>
                <span>{u.lastName} </span>
                <span>{u.firstName}</span>
              </span>

              <div>{u.dob}</div>
            </div>
          </div>
        ))}
        {/* <div className="columnNN">A</div>
        <div className="columnNN">B</div>
        <div className="columnNN">C</div>
        <div className="columnNN">D</div> */}
      </div>
    );
  }
}

export default Column;
