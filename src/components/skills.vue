<template>
  <article class="container-full g-center g-vcenter skill">
    <div class="radio-box">
      <v-progress-circular :rotate="180" :size="120" :width="3" :value="value"> {{ value }} <span class="postfix">%</span> </v-progress-circular>
    </div>
    <h3 class="name text-upp text-center">{{ name }}</h3>
  </article>
</template>

<script>
export default {
  props: [
    'name',
    'level'
  ],
  data () {
    return {
      value: this.level
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.skill {
  grid-row-gap: 20px;
}
.radio-box {
  font-size: 24px;
  color: $green-1;
  font-weight: 600;
}
.postfix {
  font-size: 16px;
  font-weight: normal;
}
.name {
  color: $gray-3;
  font-weight: 600;
  line-height: 1.3em;
}
</style>
