import React, { Component } from 'react';
import Post from '../../components/Posts/Post';
import {Container} from 'reactstrap';

class Posts extends Component {

    render() {
        return(
            <Container>
                <Post />
            </Container>
        )
    }
}

export default Posts;