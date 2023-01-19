<template>
  <li>
    <div>{{ post.title }}</div>
    <div>{{ post.contents }}</div>
    <div>
      {{ post.createdAt }}
      <i class="ion-md-create"></i>
      <i class="ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.post._id);
        this.$emit('delete');
      }
    },
  },
};
</script>

<style></style>
