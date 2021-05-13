import React from 'react';
import { withRouter } from "react-router";
import { get } from 'axios';


// This function takes a component...
const withApi = WrappedComponent => {

  // ...and returns another component...
  const comp = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        jsessionid: localStorage.getItem("jsessionid")
      };
    }

    componentDidMount() {
      if (this.state.jsessionid === "") {
        this.props.history.push("/login")
      }
    }

    inventoryList() {
      return get('http://localhost:8080/inventory', {
        auth: {
          username: 'jan',
          password: 'password'
        }
      });
    }

    login(username, password) {
      return get('http://localhost:8080/user/login', {
        auth: {
          username: username,
          password: password
        }
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent login={this.login} inventoryList={this.inventoryList} {...this.props} />;
    }
  };

  return withRouter(comp);
}

export default withApi;
