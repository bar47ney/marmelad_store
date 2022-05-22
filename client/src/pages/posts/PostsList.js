import React from "react";

const PostsList = ({ posts }) => {
  return (
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-sm-6 mb-5" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <a href="#" className="btn btn-primary">
                  More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default PostsList;
