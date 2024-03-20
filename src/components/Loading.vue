<template>
  <div class="backdrop">
    <div class="spinner-container">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
}
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #283d3f;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
