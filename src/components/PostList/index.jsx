import { connect } from 'react-redux';
import React from 'react';

function PostList ({ posts, isFetching, error }) {
  
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

export default connect(mapStateToProps)(PostList);
