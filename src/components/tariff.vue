<template>
  <div class="container-full">
    <div class="tariff full grid">
      <div class="tariff__header grid g-center">
        <div class="tariff__button full grid g-center">
          <button class="btn btn-tariff bg-dark">{{ tariff.title }}</button>
        </div>
        <div class="tariff__number grid">
          <span class="prefix">$</span>
          <span class="number">{{ number }}</span>
          <span class="dot"></span>
          <span class="drob">{{ drob }}</span>
          <span class="postfix">Monthly</span>
        </div>
      </div>
      <div class="tariff__body grid g-center">
        <ul class="text-center services-list grid">
          <li class="services-list__item" v-for="(item, index) in tariff.services" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="tariff__footer grid g-center">
        <button class="btn btn-green">{{ tariff.button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'tariff'
  ],
  data () {
    return {

    }
  },
  computed: {
    number () {
      return Number.parseInt(this.tariff.cost)
    },
    drob () {
      return String(this.tariff.cost).split('.')[1] || 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';

.tariff {
  //background-color:gray;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  padding: 0 20px 25px 20px;
  border: 1px solid $white-1;
  border-radius: 5px;
}
.tariff__header {
  //background-color: red;
  grid-row-gap: 40px;
  border-bottom: 1px solid $white-1;
  padding-bottom: 25px;
}
.tariff__button {
  position: relative;
}
.btn-tariff {
  position: absolute;
  top: -21px;
  color: $white-2;
}
.btn-tariff:hover {
  background-color: $green-1;
}
.tariff__number {
  font-weight: bold;
  grid-template-columns: repeat(5, auto);
  align-items: baseline;
  grid-column-gap: 8px;
  position: relative;
  .prefix {
    color: $gray-3;
    font-size: 16px;
  }
  .number {
    font-size: 60px;
  }
  .dot {
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: $black-1;
  }
  .drob {
    font-size: 16px;
    align-self: flex-start;
    position: absolute;
    right: 35%;
  }
  .postfix {
    color: $gray-3;
    font-size: 12px;
  }
}
.tariff__body {
  padding: 30px 0;
  border-bottom: 1px solid $white-1;
}
.services-list {
  list-style: none;
  color: $gray-3;
  padding: 0;
  grid-row-gap: 30px;
}
.tariff__footer {
  padding-top: 30px;
}
</style>
