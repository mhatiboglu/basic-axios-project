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
                <NavLink to="/" exact activeClassName="my-active">
                  Home
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
