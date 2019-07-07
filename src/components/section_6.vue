<template>
  <section class="container-full bg-dark g-center box">
    <div class="container">
      <section-title :big="titleText.big" :smail="titleText.smail" :options="titleText.options"></section-title>
      <div class="content-fact grid full">
        <div class="content-fact__item" v-for="(item, index) in factsData" :key="index">
          <facts :data="item"></facts>
        </div>
      </div>
    </div>
    <div class="container-full g-center bg-green">
      <div class="container bottom g-vcenter">
        <h2 class="bottom__text text-upp">are you satisfied with unlimited features that we offer?</h2>
        <button class="btn btn-white">purchase it now</button>
        <button class="btn btn-white">contact us now</button>
      </div>
    </div>
  </section>
</template>

<script>
import sectionTitle from '@/components/title.vue'
import facts from '@/components/facts.vue'
export default {
  components: {
    'section-title': sectionTitle,
    'facts': facts
  },
  data () {
    return {
      titleText: {
        big: 'company facts',
        smail: 'We do love to work and increase our counter numbers, this is what we’ve done till now',
        options: {
          theme: 'dark'
        }
      },
      factsData: [
        {
          icon: require('@/assets/section_6/icon-1.png'),
          title: 'completed projects',
          number: 218
        },
        {
          icon: require('@/assets/section_6/icon-2.png'),
          title: 'hours of work / month',
          number: 360
        },
        {
          icon: require('@/assets/section_6/icon-3.png'),
          title: 'solved tickets',
          number: 135
        },
        {
          icon: require('@/assets/section_6/icon-4.png'),
          title: 'satisfied clients',
          number: 174
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.box {
  padding-top: 77px;
}
.content-fact {
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 20px 0 90px 0;
}
.bottom {
  grid-template-columns: 1fr auto auto;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-column-gap: 10px;
}
.bottom__text {
  color: $white-2;
  font-size: 16px;
  font-weight: 600;
}

@media screen and (max-width: 960px){
  .bottom {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 20px;
  }
  .content-fact {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 500px){
  .content-fact {
    grid-template-columns: 1fr;
  }
  .bottom__text {
    text-align: center;
  }
}
</style>
