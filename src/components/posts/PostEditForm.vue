<template>
  <div>
    <h1>Edit Post</h1>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid">Contents length must be less thant 250</p>
        </div>
        <button type="submit">Edit</button>
      </form>
      <p>{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        await editPost(this.$route.params.id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.error(error);
        this.logMessage = error.response.data.message;
      }
    },
  },
  async created() {
    const { data } = await fetchPost(this.$route.params.id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style></style>
