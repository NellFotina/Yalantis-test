import React from "react";
import * as axios from "axios";
import "./Column.module.css";
import classes from "./Column.module.css";
import Radio from "./Radio/Radio";

class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activetext: "",
      isActive: false,
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange = (e) => {
    this.setState({
      activetext: { e } === "active" ? "active" : "not active",
      isActive: !this.state.isActive,
    });
  };

  componentDidMount() {
    axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => {
        this.props.setUsers(response.data);
      });
  }
  render() {
    const isActive = this.state.isActive;
    const activetext = this.state.activetext;
    return (
      <div className={classes.column}>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <span>{u.lastName} </span>
              <span>{u.firstName}</span>
              <Radio
                id={u.id}
                isActive={isActive}
                activetext={activetext}
                onRadioChange={this.onRadioChange}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Column;
