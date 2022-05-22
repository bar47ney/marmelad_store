import React from "react";

const PostEdit = ({
  posts,
  setPosts,
  closeModal,
  postsCrud,
  editPost,
  setEditPost,
}) => {
  const onChange = (e) => {
    const field = e.target.id;
    field === "userId" || field === "id"
      ? setEditPost({ ...editPost, [field]: +e.target.value })
      : setEditPost({ ...editPost, [field]: e.target.value });

    console.log(editPost);
  };

  const changePost = () => {
    postsCrud
      .update(editPost.id, editPost)
      .then((res) => {
        setPosts(
          posts.map((post) => (post.id === editPost.id ? editPost : post))
        );
        setEditPost({
          id: "",
          title: "",
          body: "",
          userId: "",
        });
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  console.log(editPost);

  return (
    <>
      {Object.keys(editPost).map((value, index) => {
        if (value === "userId" || value === "id") {
          return (
            <div className="" key={index}>
              <input
                id={value}
                value={editPost[value]}
                type="number"
                placeholder={`Input post ${editPost[value]}`}
                onChange={onChange}
                className="mb-1 form-control"
              />
            </div>
          );
        }
        return (
          <div className="" key={index}>
            <input
              id={value}
              value={editPost[value]}
              placeholder={`Input post ${editPost[value]}`}
              onChange={onChange}
              className="mb-1 form-control"
            />
          </div>
        );
      })}
      <div className="">
        <button className="btn btn-primary mt-2 btn-sm" onClick={changePost}>
          Edit Post
        </button>
      </div>
    </>
  );
};

export default PostEdit;
