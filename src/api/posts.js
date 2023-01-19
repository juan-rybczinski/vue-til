import { posts } from '@/api/index';

const fetchPosts = () => {
  return posts.get('/');
};

const fetchPost = id => {
  return posts.get(id);
};

const createPost = post => {
  return posts.post('/', post);
};

const editPost = (id, post) => {
  return posts.put(id, post);
};

const deletePost = id => {
  return posts.delete(id);
};

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
