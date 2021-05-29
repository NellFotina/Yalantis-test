import React from "react";
import "./Radio.module.css";
import classes from "./Radio.module.css";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  onRadioChange(e) {
    this.props.onRadioChange(e.target.value);
  }

  render() {
    const isActive = this.props.isActive;
    return (
      <div className={classes.radio}>
        <form>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="not active"
                  checked={isActive === false}
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
                  checked={isActive === true}
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
