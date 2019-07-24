<template>
  <section class="container-full tariff__section">
    <div class="container">
      <my-title :big="title.big" :smail="title.smail" :options="title.options"></my-title>
    </div>
    <div class="container">
      <div class="tariff grid">
        <div class="tariff__item" v-for="(item, index) in tariffs" :key="index">
          <my-tariff :tariff="item"></my-tariff>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import title from '@/components/title.vue'
import tariff from '@/components/tariff.vue'
export default {
  components: {
    'my-title': title,
    'my-tariff': tariff
  },
  data () {
    return {
      title: {
        big: 'real cheap prices',
        smail: 'We offer all our services in real low prices in comparison with similar companies',
        options: {
        }
      },
      tariffs: [
        {
          title: 'standard plan',
          cost: 19.99,
          button: 'sign up now',
          services: [
            '5 Projects',
            '5 GB Storage',
            'Unlimited Users',
            '10 GB Bandwith',
            'Enhanced Security'
          ]
        },
        {
          title: 'premium plan',
          cost: 29.99,
          button: 'sign up now',
          services: [
            '10 Projects',
            '15 GB Storage',
            'Unlimited Users',
            '20 GB Bandwith',
            'Enhanced Security'
          ]
        },
        {
          title: 'advanced plan',
          cost: 49.99,
          button: 'sign up now',
          services: [
            '15 Projects',
            '30 GB Storage',
            'Unlimited Users',
            '50 GB Bandwith',
            'Enhanced Security'
          ]
        },
        {
          title: 'standard plan',
          cost: 99.99,
          button: 'sign up now',
          services: [
            'Unlimited Projects',
            'Unlimited Storage',
            'Unlimited Users',
            'Unlimite Bandwith',
            'Enhanced Security'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';

.tariff__section {
  grid-row-gap: 50px;
}
.tariff {
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px 30px;
}

@media screen and (max-width: 970px){
  .tariff {
    grid-template-columns: repeat(2, 1fr)
  }
}
@media screen and(max-width: 500px) {
  .tariff {
    grid-template-columns: 1fr;
  }
}
</style>
