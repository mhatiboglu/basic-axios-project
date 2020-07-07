import React, { Component } from "react";
import Posts from "../../containers/Blog/Posts/Posts";
import { Route,Link } from "react-router-dom";
import "./Blog.css";
import NewPost from '../../containers/Blog/NewPost/NewPost'
class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-post">New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;

/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */
