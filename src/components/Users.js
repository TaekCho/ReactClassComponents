import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  // Constructor will automatically execute when the class gets instantiated
  constructor() {
    // "this.state" is built-in(?) so the name is not up to me.
    // When managing multiple states, all has to be fit into one object.
    this.state = {
      showUsers: true,
      moreState: "Test",
      nested: {},
      data: [],
    };
  }

  ToggleUsersHandler() {
    // this.state.showUsers = false; // WRONG!
    this.setState({ showUsers: false });
    // OR
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
    // As above, when setting only one of states, it will merge,
    // in class components' case, not override.
    // In case of function component, the state is overriden.
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   return (

//   );
// };

export default Users;
