import React, { useState } from 'react';

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

function FeedPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [editedPost, setEditedPost] = useState(null); 

  const handleAddPost = () => {
    if (newPostContent.trim() !== '') {
      const newPost = {
        id: posts.length + 1,
        author: 'Talip Altynai', 
        content: newPostContent,
        likes: 0,
        dislikes: 0,
      };
      setPosts([...posts, newPost]);
      setNewPostContent('');
    }
  };

  const handleEditPost = (postId) => {
    setEditedPost(postId);
  };

  const handleSaveEdit = (postId, newContent) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, content: newContent };
      }
      return post;
    });
    setPosts(updatedPosts);
    setEditedPost(null);
  };

  const handleCancelEdit = () => {
    setEditedPost(null);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Лента</h1>
      <div>
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Напишите новый пост"
        />
        <button onClick={handleAddPost}>Добавить пост</button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.author}</h3>
            {editedPost === post.id ? (
              <div>
                <input
                  type="text"
                  value={post.content}
                  onChange={(e) => handleSaveEdit(post.id, e.target.value)}
                />
                <button onClick={handleCancelEdit}>Отменить</button>
              </div>
            ) : (
              <p>{post.content}</p>
            )}
            <p>Likes: {post.likes}</p>
            <p>Dislikes: {post.dislikes}</p>
            <button onClick={() => handleEditPost(post.id)}>Редактировать</button>
            <button onClick={() => handleDeletePost(post.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedPage;
