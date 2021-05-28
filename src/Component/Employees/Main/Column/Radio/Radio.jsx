import React from "react";
import "./Radio.module.css";
import classes from "./Radio.module.css";

class Radio extends React.Component {
  constructor() {
    super();

    this.state = {
      active: "",
      isActive: false,
    };
    this.onRadioChange = this.onRadioChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onRadioChange = (e) => {
    debugger;
    this.setState({
      active: e.target.value,
      isActive: !this.state.isActive,
    });
  };

  //   onSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(this.state);
  //   };

  render() {
    return (
      <div className={classes.radio}>
        <form>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="not active"
                  checked={this.state.isActive === false}
                  onChange={this.onRadioChange}
                />
                <span>not active</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="active"
                  checked={this.state.isActive === true}
                  onChange={this.onRadioChange}
                />
                <span>active</span>
              </label>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Radio;
