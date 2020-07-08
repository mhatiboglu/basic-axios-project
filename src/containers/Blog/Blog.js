import React, { Component } from "react";
import Posts from "../../containers/Blog/Posts/Posts";
import { Route, NavLink } from "react-router-dom";
import "./Blog.css";
import NewPost from "../../containers/Blog/NewPost/NewPost";
class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" exact activeClassName="my-active">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  activeClassName="my-active"
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/new-post" component={NewPost} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default Blog;
