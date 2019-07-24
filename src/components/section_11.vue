<template>
  <section class="container-full maps g-center g-vcenter">
    <div class="container-full maps__content">
      <yandex-map :coords="coords" :zoom="zoom"></yandex-map>
    </div>
    <div class="container-full g-center form__content">
      <div class="container g-vcenter">
        <form class="form__group grid">
          <input type="text" class="form__text" placeholder="name">
          <input type="email" class="form__text" placeholder="email address">
          <textarea class="form__textarea" placeholder="massage ..."></textarea>
          <button class="btn">submit message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      coords: [40.709728, -74.010184],
      zoom: 15
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';

.maps {
  position: relative;
}
.maps__content {
  height: 500px;
  overflow: hidden;
  z-index: 1;
}
.form__content {
  position: absolute;
  height: 100%;
}
.form__group {
  max-width: 360px;
  width: 100%;
  grid-row-gap: 20px;
  background-color: rgba(255, 255, 255, 0.925);
  padding: 20px;
  z-index: 1;
}
.form__text {
  font-style: italic;
  padding: 10px 20px;
  text-transform: capitalize;
  border: 1px solid $white-3;
  outline: none;
  border-radius: 3px;
  &:focus {
    border-color: $focus
  }
}
.form__textarea {
  border-radius: 3px;
  font-style: italic;
  padding: 10px 20px;
  border: 1px solid $white-3;
  outline: none;
  height: 120px;
  text-transform: capitalize;
  &:focus {
    border-color: $focus
  }
}
</style>
