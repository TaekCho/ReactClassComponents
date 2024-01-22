import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  render() {
    // We can make use of props since User component extends Component
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
