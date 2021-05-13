import React from 'react';
import withApi from "../Api";
import { connect } from 'react-redux';
import store from '../Reducer/store';

class Inventory extends React.Component {

    componentDidMount() {
        // Every time the state changes, log it
        // Note that subscribe() returns a function for unregistering the listener
        store.subscribe(() =>
            console.log('State after dispatch: ', store.getState())
        )

        this.props.inventoryList().then(data => {
            console.log(data.data);
            store.dispatch({ type: 'inventory/loaded', payload: data.data })
        }).catch(error => {
            this.setState({
                error: {
                    status: error.request.status,
                    message: error.message
                }
            })
            if (error.request.status === 401) {
                this.props.history.push("/login")
            }
        });
    }

    render() {
        return (
            <div>
                <div>Loading: {this.props.api.loading}</div>
                <div>Error: {this.props.api.response.status} - {this.props.api.response.message}</div>
                <div>
                    Inventory
                {this.props.inventory.map(item => (
                    <li key={item.id}>
                        {item.displayname} {item.amount}
                    </li>
                ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(withApi(Inventory));
