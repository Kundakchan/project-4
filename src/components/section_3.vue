<template>
  <div class="container content">
    <div class="item" v-for="(card, index) in cards" :key="index">
      <card :icon="card.icon" :header="card.header" :tag="card.tag" :content="card.content"></card>
    </div>
    <img src="@/assets/section_3/blok.png" alt="img" class="blok">
  </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
  components: {
    'card': card
  },
  data () {
    return {
      cards: [
        {
          icon: require('@/assets/section_3/icon-1.png'),
          header: 'responsive & multipurpose',
          tag: 'Desktops, Tablets & Phones',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'
        },
        {
          icon: require('@/assets/section_3/icon-2.png'),
          header: 'easy customization',
          tag: 'One Click Demo Content Installation',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'
        },
        {
          icon: require('@/assets/section_3/icon-3.png'),
          header: 'unlimited features',
          tag: 'Shortcodes, Typography & Different Layouts',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'
        },
        {
          icon: require('@/assets/section_3/icon-4.png'),
          header: 'clean & modular coding',
          tag: '100% Clean, Valid & Well-Commented Coding',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'
        },
        {
          icon: require('@/assets/section_3/icon-5.png'),
          header: 'the best e-commerce solutions',
          tag: 'WooCommerce Fully Integration',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'
        },
        {
          icon: require('@/assets/section_3/icon-6.png'),
          header: 'awesome friendly support',
          tag: 'Free Lifetime Support & Updates',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.content {
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  padding-top: 80px;
  padding-bottom: 100px;
  position: relative;
}
.blok {
  position: absolute;
  bottom: -27px;
  left: 50%;
  margin-left: -27px;
}
@media screen and (max-width: 840px){
  .content {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 600px){
  .content {
    grid-template-columns: 1fr;
  }
}
</style>
