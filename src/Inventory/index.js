import React from 'react';
import withApi from "../Api";


class Inventory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: {
                status: null,
                message: null
            },
            items: []
        };
    }

    componentDidMount() {
        /*
        inventoryList().then(data => {
            this.setState({
                items: data.data
            });
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
        */
    }
    render() {
        const { error, items } = this.state;
        return (
            <div>
                Das ist das Inventar
                <div>{error.status} - {error.message}</div>
                {items.map(item => (
                    <li key={item.id}>
                        {item.displayname} {item.amount}
                    </li>
                ))}
            </div>
        );
    }
}

export default withApi(Inventory);
