import React, { useEffect, useState, useRef } from "react";
import MyModal from "../../components/MyModal/MyModal";
import Spinner from "../../components/Spinner";
import { useSortedAndSearchedPosts } from "../../hooks/usePosts";
import Crud from "../../service/crud.service";
import PostAdd from "./PostAdd";
import PostEdit from "./PostEdit";

const Posts = () => {
  const postsCrud = new Crud("posts");
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearcQuery] = useState("");
  const [usersPosts, setUsersPosts] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [editPost, setEditPost] = useState({});

  const [viewSpinner, setViewSpinner] = useState(false);
  const observer = useRef(null);
  const trigger = useRef(null);

  const [newPostLength, setNewPostLength] = useState(12)

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    const callback = function (entries) {
      if (entries[0].isIntersecting) {
        console.log(entries);
        fetchNewAllPosts()
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trigger.current);
  }, [usersPosts]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log(usersPosts);

  const fetchNewAllPosts = () => {
    setViewSpinner(true);
    postsCrud.get(1, newPostLength).then((res) => {
      console.log(res.data);
      setNewPostLength(newPostLength + 12)
      setUsersPosts(res.data);
      setViewSpinner(false);
    });
  };

  const fetchAllPosts = () => {
    setViewSpinner(true);
    postsCrud.get(1, 12).then((res) => {
      console.log(res.data);
      setUsersPosts(res.data);
      setViewSpinner(false);
    });
  };

  const deletePostReal = (id) => {
    postsCrud
      .delete(id)
      .then((res) => {
        setUsersPosts(usersPosts.filter((post) => post.id !== id));
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (post) => {
    setShowModal(true);
    setDeletePostId(post.id);
  };

  const onSearch = (e) => {
    setSearcQuery(e.target.value);
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const viewAddModal = () => {
    setShowModalAdd(true);
  };

  const viewEditModal = (post) => {
    setShowModalEdit(true);
    setEditPost(post);
    console.log(editPost);
  };

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    usersPosts,
    sorter,
    searchQuery
  );

  return (
    <>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeButtonShow
        saveButtonShow
        onConfirm={() => deletePostReal(deletePostId)}
      >
        <h4>Do you really want to delete or think about?</h4>
      </MyModal>
      <MyModal
        visible={showModalAdd}
        onCancel={() => setShowModalAdd(false)}
        closeButtonShow
      >
        <PostAdd
          posts={usersPosts}
          setPosts={setUsersPosts}
          closeModal={() => setShowModalAdd(false)}
          postsCrud={postsCrud}
        />
      </MyModal>
      <MyModal
        visible={showModalEdit}
        onCancel={() => setShowModalEdit(false)}
        closeButtonShow
      >
        <PostEdit
          posts={usersPosts}
          setPosts={setUsersPosts}
          closeModal={() => setShowModalEdit(false)}
          postsCrud={postsCrud}
          editPost={editPost}
          setEditPost={setEditPost}
        />
      </MyModal>
      <div className="container mb-5">
        <div className="input-group mt-3">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search post"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={onSearch}
          />
        </div>
        <select
          className="form-select mt-3"
          aria-label="Default select example"
          onChange={onSort}
        >
          <option defaultValue value="0">
            from Min to Max
          </option>
          <option value="1">from Max to Min</option>
        </select>

        {viewSpinner ? (
          <Spinner />
        ) : (
          <>
            <button
              className="btn btn-secondary mt-3"
              onClick={() => viewAddModal()}
            >
              Add post
            </button>
            <div className="row">
              {sortedAndSearchedPosts.length ? (
                sortedAndSearchedPosts.map((post, id) => (
                  <div className="col-sm-6 mt-3" key={post.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          {post.id}. {post.title}
                        </h5>
                        <p className="card-text">{post.body}</p>
                        <button
                          onClick={() => deletePost(post)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => viewEditModal(post)}
                          className="btn btn-primary m-1"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="mt-3">Not found posts</h3>
              )}
            </div>
          </>
        )}

        <div ref={trigger}>Hello Man</div>
        <button
          onClick={() => {
            console.log((observer.current.innerText = "Chao"));
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default Posts;
