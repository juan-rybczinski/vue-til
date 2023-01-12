<template>
  <header>
    <template v-if="isLogin">
      <span>{{ username }}</span>
      <a href="javascript:;" @click="logout">로그아웃</a>
    </template>
    <template v-else>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </template>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['username']),
    ...mapGetters(['isLogin']),
  },
  methods: {
    logout() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
