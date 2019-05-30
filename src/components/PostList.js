import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      //   console.log(post);
      return (
        <div className="item" key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.post };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
