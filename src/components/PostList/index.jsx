import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getPostThunk } from '../../store/slices/postsSlice';

function PostList ({ posts, isFetching, error, getPost }) {
  useEffect(() => {
    getPost();
  }, []);

  const mapProps = p => (
    <li key={p.id}>
      <h3>{p.title}</h3>
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

const mapStateToProps = ({ postsList }) => postsList;

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(getPostThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
