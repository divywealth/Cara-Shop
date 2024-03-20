<template>
  <div id="Box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "feature",
};
</script>

<style>
#Box {
  height: 200px;
  width: 180px;
  border-radius: 4px;
  box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
  border: 1px solid #cce7d0;
  text-align: center;
  cursor: pointer;
}
#Box:hover {
  box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
}
</style>
