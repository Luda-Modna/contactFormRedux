import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getPostThunk } from '../../store/slices/postsSlice';
import { getUsersThunk } from '../../store/slices/usersSlice';

function PostList ({
  posts,
  isFetching,
  error,
  normalizedUsers,
  users,
  getPost,
  getUsers,
}) {
  useEffect(() => {
    getPost();
    getUsers();
  }, []);

  const mapProps = p => (
    <li key={p.id}>
      <h3>{p.title}</h3>
      {!!users.length && <span>{normalizedUsers[p.userId].username}</span>}
      <p>{p.body}</p>
    </li>
  );

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>Error</div>}
      {!isFetching && !error && <ul>{posts.map(mapProps)}</ul>}
    </>
  );
}

const mapStateToProps = ({
  postsList,
  usersList: { normalizedUsers, users },
}) => ({
  ...postsList,
  normalizedUsers,
  users,
});

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(getPostThunk()),
  getUsers: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
