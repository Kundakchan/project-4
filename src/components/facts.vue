<template>
  <article class="container-full fact g-vcenter">
    <div class="fact__item grid g-center">
      <div class="box-fact grid g-center g-vcenter">
        <div class="romb-left"></div>
          <div class="center">
            <h3 class="number">{{ data.number }}</h3>
          </div>
          <div class="romb-right"></div>
          </div>
    </div>
    <div class="fact__item fact__body grid g-vcenter">
      <div class="line-left"></div>
      <div class="center">
        <img :src="data.icon" alt="icon" class="icon">
      </div>
      <div class="line-right"></div>
    </div>
    <div class="fact__item fact__footer">
      <h3 class="fact__title text-upp text-center">{{ title.first }} <span class="fact__title-last">{{ title.last }}</span> </h3>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'data'
  ],
  computed: {
    title () {
      let str = this.data.title
      let prefix = null
      let postfix = null
      if (str.indexOf('/') !== -1) {
        postfix = str.substring(str.indexOf('/'))
        prefix = str.substring(0, str.indexOf('/'))
      } else {
        prefix = str
      }

      return {
        first: prefix,
        last: postfix
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.fact {
  grid-row-gap: 15px;
}
.fact:hover {
  .romb-left, .romb-right {
    background: url('../assets/section_6/icon-romb-hover.svg');
    background-position: center;
    background-size: 13px 13px;
  }
}
.box-fact {
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 20px;
}
.center {
  justify-self: center;
}
.number {
  font-size: 80px;
  font-weight: bold;
  color: $white-2;
}
.romb-left, .romb-right {
  width: 13px;
  height: 13px;
  background: url('../assets/section_6/icon-romb.svg');
  background-position: center;
  background-size: 13px 13px;
  transition: background .3s linear;
}
.fact__body {
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 10px;
}
.line-left, .line-right {
  height: 1px;
  background-color: $black-4;
}
.fact__title {
  color: $gray-1;
}
.fact__title-last {
  font-size: 10px;
  font-weight: normal;
}
</style>
