<template>
  <article class="container-full card full">
    <div class="card__item left">
      <div class="icon">
        <img :src="icon" alt="img" class="image">
      </div>
    </div>
    <div class="card__item top">
      <h3 class="card__header text-upp">{{ header }}</h3>
      <small class="card__tag">{{ tag }}</small>
    </div>
    <div class="card__item bottom">
      <p class="card__content">{{ content }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'icon',
    'header',
    'tag',
    'content'
  ],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/_varibels.scss';

  .card {
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    grid-template-areas:
      "left top"
      "left bottom";
  }

  .left {
    grid-area: left;
  }
  .top {
    grid-area: top;
  }
  .bottom {
    grid-area: bottom;
  }

  .card__header {
    color: $gray-1;
    line-height: 1em;
    font-size: 14px;
    font-weight: 600;
  }
  .card__tag {
    color: $gray-4;
    font-size: 12px;
    line-height: 1em;
    font-weight: normal;
  }
  .card__content {
    color: $gray-2;
    line-height: 2em;
    font-weight: normal;
  }
</style>
