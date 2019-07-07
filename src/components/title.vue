<template>
  <div class="container content" :class="theme">
    <div class="title text-upp grid">
      <div class="title__item line line__left"></div>
      <div class="title__item icon icon__left full"></div>
      <div class="title__item">
        <h2 class="big__text text-center color-dark">
          <span>{{ firstText }}</span><span class="color-green">{{ lastText }}</span>
        </h2>
      </div>
      <div class="title__item icon icon__right full"></div>
      <div class="title__item line line__right"></div>
    </div>
    <p class="text-center smail__text">{{ smailText }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'big',
    'smail',
    'options'
  ],
  data () {
    return {
      bigText: this.big,
      smailText: this.smail,
      theme: this.options.theme
    }
  },
  computed: {
    firstText () {
      let newArray = this.bigText.split(' ')
      newArray.pop()
      return newArray.join(' ')
    },
    lastText () {
      return ' ' + this.bigText.split(' ').pop()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.content {
  padding: 0;
}
.title {
  grid-template-columns: 1fr 50px auto 50px 1fr;
}
.big__text {
  font-size: 26px;
  line-height: 1em;
  padding: 10px 0;
}
.smail__text {
  font-size: 16px;
  line-height: 1em;
  padding: 10px 0;
  color: $gray-3;
}
.icon__left {
  background: url(../assets/startTitle/icon-1.svg) no-repeat;
  background-position: center;
}
.icon__right {
  background: url(../assets/startTitle/icon-2.svg) no-repeat;
  background-position: center;
}

.line {
  height: 6px;
  align-self: center;
  border-top: 1px solid $white-1;
  border-bottom: 1px solid transparent;
}
.line__left {
  border-image: linear-gradient(to right, $opacity-0 0%, $gray-3 100%);
  border-image-slice: 1;
}
.line__right {
  border-image: linear-gradient(to left, $opacity-0 0%, $gray-3 100%);
  border-image-slice: 1;
}
.dark {
  .big__text {
    color: $white-2;
  }
  .smail__text {
    color: $gray-1;
  }
  .line {
    border: none;
  }
}
@media screen and (max-width: 460px){
  .big__text {
    font-size: 18px;
  }
}
</style>
