<template>
  <section class="container-full bg-dark padding">
    <div class="container g-center g-vcenter">
      <div class="content__box grid g-center">
        <div class="logo grid g-vcenter">
          <div class="logo__icon"></div>
          <div class="logo__text text-upp color-gray">startuperr</div>
        </div>
        <div class="network flex">
          <a :href="item.url" class="network__item btn bg-dark" v-for="(item, index) in network" :key="index">
            <img :src="item.icon" alt="icon" class="network__icon">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      network: [
        {
          url: '#',
          icon: require('@/assets/section_10/icon-1.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-2.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-3.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-4.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-5.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-6.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-7.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-8.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-9.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-10.svg')
        },
        {
          url: '#',
          icon: require('@/assets/section_10/icon-11.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';

.padding {
  padding: 50px 0 80px 0;
}
.content__box {
  grid-template-columns: 1fr;
  grid-row-gap: 60px;
}
.logo {
  grid-template-columns: 50px auto;
}
.logo__icon {
  width: 50px;
  height: 50px;
  background: url("../assets/section_1/nav_menu/logo__icon.svg") no-repeat;
  background-position: center;
  background-size: 50px 50px;
}
.logo__text {
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
.network {
  flex-wrap: wrap;
}
.network__item {
  border: 1px solid $gray-3;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin: 0 5px;
  &:hover {
    background-color: $green-1;
  }
}
.network__icon {
  width: 100%;
  // e3e3e3
}
</style>
