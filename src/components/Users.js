import { Component } from "react";
// none of the react hooks can be used in class-based components.
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // Constructor will automatically execute when the class gets instantiated
  constructor() {
    // we're inheriting from the superset. ADD SUPER!
    super();
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
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* below code is because of how 'this' in JavaScript works. Don't know why, yet. */}
        <button onClick={this.ToggleUsersHandler.bind(this)}>
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
// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );
//   );
// };

export default Users;
