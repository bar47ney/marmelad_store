import React, { useState } from "react";

const PostAdd = ({ posts, setPosts, closeModal, postsCrud }) => {
  const onChange = (e) => {
    const field = e.target.id;
    field === "userId" || field === "id"
      ? setValues({ ...values, [field]: +e.target.value })
      : setValues({ ...values, [field]: e.target.value });
    console.log(values);
  };

  const addPost = () => {
    postsCrud
      .create(values)
      .then((res) => {
        setPosts([...posts, values]);
        setValues({
          id: "",
          title: "",
          body: "",
          userId: "",
        });
        closeModal();
      })
      .catch((err) => console.log(err));
  };
  const [values, setValues] = useState({
    id: "",
    title: "",
    body: "",
    userId: "",
  });
  return (
    <>
      {Object.keys(values).map((value, index) => {
        if (value === "userId" || value === "id") {
          return (
            <div className="" key={index}>
              <input
                id={value}
                value={values[value]}
                type="number"
                placeholder={`Input post ${value}`}
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
              value={values[value]}
              placeholder={`Input post ${value}`}
              onChange={onChange}
              className="mb-1 form-control"
            />
          </div>
        );
      })}
      <div className="">
        <button className="btn btn-primary mt-2 btn-sm" onClick={addPost}>
          Add new Post
        </button>
      </div>
    </>
  );
};

export default PostAdd;
