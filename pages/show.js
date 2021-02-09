import React from 'react';

export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Show = ({ posts }) => {
  return (
    <div>
      <h1 className='center'>All Posts</h1>
      {posts.map(post => (
        <div className='card' style={{ margin: '2rem auto' }} key={post.id}>
          <h3 style={{ textTransform: 'capitalize', margin: '0 auto' }}>
            {post.title}
          </h3>
          <p style={{ margin: 0 }}>{post.body || 'some text'}</p>
        </div>
      ))}
    </div>
  );
};

export default Show;
