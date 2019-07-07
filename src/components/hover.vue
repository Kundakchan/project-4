<template>
  <article class="container-full g-center g-vcenter">
    <div class="content">
      <img class="img" :src="img" alt="img">
      <div class="hover grid g-center g-vcenter">
        <div class="box grid g-center g-vcenter">
          <div class="hover__item hover__header grid g-center g-vcenter">
            <img class="hover__top-1" src="@/assets/section_5/icon-2.png" alt="icon">
            <img class="hover__top-2" src="@/assets/section_5/icon-3.png" alt="icon">
          </div>
          <div class="hover__item hover__body">
            <h4 class="hover__title">{{ title }}</h4>
          </div>
          <div class="hover__item">
            <small class="hover__text">{{ text }}</small>
          </div>
          <div class="hover__item hover__bottom">
            <img src="@/assets/section_5/icon-1.png" alt="icon">
            <span>{{ like }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'img',
    'title',
    'text',
    'like'
  ]
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';

.content {
  position: relative;
}
.img {
  width: 100%;
  margin-bottom: -3px;
}
.hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: fade-out($green-1, .4);
  color: $white-2;
  opacity: 0;
  transition: opacity .3s linear;
}
.hover:hover {
  opacity: 1;
}
.box {
  grid-row-gap: 10px;
}
.hover__header {
  padding: 15px 0;
  position: relative;
  grid-template-columns: 1fr 1fr;
}
.hover__top-1 {
  margin-right: -5px;
}
.hover__top-2 {
  margin-left: -5px;
}
.hover__title {
  font-size: 16px;
  font-weight: bold;
  line-height: 1em;
}
.hover__text {
  font-size: 12px;
  font-weight: normal;
  line-height: 1em;
}
.hover__bottom {
  font-size: 12px;
  font-weight: normal;
  line-height: 1em;
  padding: 10px 0;
}
</style>
