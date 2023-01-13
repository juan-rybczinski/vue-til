<template>
  <div>
    <h1>Today I Learned</h1>
    <loading-spinner v-if="isLoading" />
    <ul v-else>
      <post-list-item v-for="post in posts" :key="post._id" :post="post" />
    </ul>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  data() {
    return {
      posts: [],
      isLoading: true,
    };
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async getPosts() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.posts = data.posts;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style></style>
