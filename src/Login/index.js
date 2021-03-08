import React from 'react';
import withApi from '../Api';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin(event) {
        this.props.login(this.state.username, this.state.password).then(res => {
            console.log(res);
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <label for="usernameInput" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control" id="usernameInput" value={this.state.username} onChange={this.handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label for="passwordInput" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="passwordInput" aria-describedby="passwordHelp" value={this.state.password} onChange={this.handleInputChange} />
                        <div id="passwordHelp" className="form-text">Never share your password with anyone else.</div>
                    </div>
                    <button onClick={this.handleLogin} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default withApi(Login);