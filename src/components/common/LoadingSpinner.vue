Skip to content Search or jump to… Pull requests Issues Codespaces Marketplace
Explore @juan-rybczinski joshua1988 / vue-til Public Fork your own copy of
joshua1988/vue-til Code Issues Pull requests Actions Projects Security Insights
vue-til/src/components/common/LoadingSpinner.vue @joshua1988 joshua1988 init
project Latest commit 0878b8c on Dec 25, 2019 History 1 contributor 36 lines (33
sloc) 538 Bytes

<template>
  <div class="spinner-container">
    <div class="spinner" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
}
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  border-bottom: 5px solid #fe9616;
  animation: spin 1s linear infinite;
  position: relative;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
Footer © 2023 GitHub, Inc. Footer navigation Terms Privacy Security Status Docs
Contact GitHub Pricing API Training Blog About vue-til/LoadingSpinner.vue at
complete · joshua1988/vue-til Octotree Login with GitHub
