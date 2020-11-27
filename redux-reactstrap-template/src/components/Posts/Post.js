import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Spinner } from 'reactstrap';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../utils/axios/axios.posts';
import mclasses from './Posts.module.css';

class Post extends Component {

    componentDidMount () {             
        this.props.onFetchPosts();
    }

    render() {


        let postContent = <Spinner type="grow" color="primary" />;

        if(this.props.posts) {
            postContent = this.props.posts.map(post => (
                <ListGroupItem style={{cursor: 'pointer'}} key={post.id} onClick= {() => this.props.onDeletePost(post.id)} >
                    {post.title}
                </ListGroupItem>
            ))
        }

        if(this.props.failed) {            
            postContent = <ListGroupItem >Post fetch failed</ListGroupItem>
            
        }


        return (
            <ListGroup>                
                {postContent}
            </ListGroup>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,
        failed: state.post.failed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.initPosts()),
        onDeletePost: (postId) => dispatch(actions.deletePost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Post, axios));