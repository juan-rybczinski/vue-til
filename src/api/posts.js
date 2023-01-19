import { posts } from '@/api/index';

const fetchPosts = () => {
  return posts.get('/');
};

const createPost = post => {
  return posts.post('/', post);
};

export { fetchPosts, createPost };
