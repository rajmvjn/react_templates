import React, { Component } from 'react';
import User from '../../components/Users/User';
import {Container} from 'reactstrap';

class Users extends Component {

    render() {
        return(
            <Container>
                <User />
            </Container>
        )
    }
}

export default Users;