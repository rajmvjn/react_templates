import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class User extends Component {

    state = {
        users: {

        }
    }

    render() {
        return (
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        )
    }

}

export default User;