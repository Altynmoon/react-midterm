import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const initialPosts = [
  {
    id: 1,
    author: 'John Doe',
    content: 'This is my first post!',
    likes: 10,
    dislikes: 2,
  },
  {
    id: 2,
    author: 'Alice Smith',
    content: 'Just enjoying the day.',
    likes: 15,
    dislikes: 3,
  },
];

function PostPage() {
  const { id } = useParams(); 
  const postId = parseInt(id);
  const post = initialPosts.find((post) => post.id === postId);

  if (!post) {
    return <div>Пост не найден.</div>;
  }

  return (
    <div>
      <h1>Пост</h1>
      <p>Автор: {post.author}</p>
      <p>Содержание: {post.content}</p>
      <p>Likes: {post.likes}</p>
      <p>Dislikes: {post.dislikes}</p>
      <Link to="/">Назад к ленте</Link>
    </div>
  );
}

export default PostPage;
