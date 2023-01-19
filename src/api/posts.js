import { posts } from '@/api/index';

const fetchPosts = () => {
  return posts.get('/');
};

const createPost = post => {
  return posts.post('/', post);
};

const deletePost = id => {
  return posts.delete(id);
};

export { fetchPosts, createPost, deletePost };
