<template>
  <section class="container section-box">
    <div class="slider-nav grid">
      <div class="left-btn">
        <button class="btn btn-dark button-left"></button>
      </div>
      <div class="header grid g-center">
        <section-title :big="titleText.big" :smail="titleText.smail" :options="titleText.options"></section-title>
      </div>
      <div class="right-btn">
        <button class="btn btn-dark button-right"></button>
      </div>
    </div>
    <div class="contact grid">
      <slider-card v-for="(item, index) in cards" :key="index" :cardData="item"></slider-card>
    </div>
    <img src="@/assets/section_7/icon-bottom.png" alt="icon" class="bottom-icon">
  </section>
</template>

<script>
import sectionTitle from '@/components/title.vue'
import sliderCard from '@/components/sliderCard.vue'
export default {
  components: {
    'section-title': sectionTitle,
    'slider-card': sliderCard
  },
  data () {
    return {
      titleText: {
        big: 'team members',
        smail: 'We’re some creative people with powerful knowledge & awesome skills behind the scene bringing you the bests',
        options: {
          theme: ''
        }
      },
      cards: [
        {
          img: require('@/assets/section_7/img-1.jpg'),
          button: 'alexis simpson',
          title: 'CEO & Developer',
          email: 'a.simpson@unique.com',
          phone: '+1 911 (77) 222-1111'
        },
        {
          img: require('@/assets/section_7/img-2.jpg'),
          button: 'steven cole',
          title: 'User Interface Designer',
          email: 's.cole@unique.com',
          phone: '+1 911 (77) 222-1111'
        },
        {
          img: require('@/assets/section_7/img-3.jpg'),
          button: 'Frank piener',
          title: 'Sales Manager',
          email: 'f.piener@unique.com',
          phone: '+1 911 (77) 222-1111'
        },
        {
          img: require('@/assets/section_7/img-4.jpg'),
          button: 'ashley lennon',
          title: 'IT Specialist',
          email: 'a.lennon@unique.com',
          phone: '+1 911 (77) 222-1111'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.section-box {
  padding-top: 80px;
  padding-bottom: 100px;
  position: relative;
}
.slider-nav {
  grid-template-columns: 30px 1fr 30px;
}
.button-left {
  background: url('../assets/section_7/button-left.svg') no-repeat;
  background-position: 3px center;
  background-size: 20px;
  background-color: $green-1;
  margin-top: 5px;
}
.button-right {
  background: url('../assets/section_7/button-right.svg') no-repeat;
  background-position: center;
  background-size: 20px;
  background-color: $green-1;
  margin-top: 5px;
}
.contact {
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.bottom-icon {
  position: absolute;
  bottom: -27px;
  left: 50%;
  margin-left: -27px;
}

@media screen and (max-width: 960px){
  .slider__body {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 50px;
  }
  .contact {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 80px;
  }
}
@media screen and (max-width: 500px){
  .slider__body {
    grid-template-columns: 1fr;
  }
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
