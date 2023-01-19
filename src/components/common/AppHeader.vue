<template>
  <header>
    <router-link :to="logoLink">TIL</router-link>
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
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    ...mapState(['username']),
    ...mapGetters(['isLogin']),
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logout() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_user');
      deleteCookie('til_auth');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
