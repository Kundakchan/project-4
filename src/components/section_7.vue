<template>
  <section class="container no-grid p-0 pipels">
    <div class="title__box full grid g-vcenter">
      <div class="left">
        <button class="btn btn-white nav__button-left" @click="$refs.carousel.goToPrev()"></button>
      </div>
      <div class="center">
        <section-title :big="titleText.big" :smail="titleText.smail" :options="titleText.options"></section-title>
      </div>
      <div class="right">
        <button class="btn btn-white nav__button-right" @click="$refs.carousel.goToNext()"></button>
      </div>
    </div>
    <div class="agile__box">
      <agile ref="carousel" :options="cardOptions">
        <div class="slide" v-for="(item, index) in cards" :key="index">
          <div class="slide__content">
            <slider-card :cardData="item"></slider-card>
          </div>
        </div>
      </agile>
    </div>
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
      cardOptions: {
        dots: false,
        navButtons: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 310,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
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
.pipels {
  padding: 80px 0 100px 0;
}
.slide__content {
  margin: 0 15px;
}
.title__box {
  padding: 0 15px;
  grid-template-columns: 32px 1fr 32px;
  height: 100px;
}

.nav__button-left {
  background: url('../assets/section_8/navButton/left-hover.svg') no-repeat;
  background-size: 32px 32px;
  background-position: center;
  background-color: $green-1;
  transition: background .2s linear;
  margin-right: 2px;
}
.nav__button-left:hover {
  background-color: $black-2;
}
.nav__button-right {
  background: url('../assets/section_8/navButton/right-hover.svg') no-repeat;
  background-size: 32px 32px;
  background-position: center;
  background-color: $green-1;
  transition: background .2s linear;
  margin-left: 2px;
}
.nav__button-right:hover {
  background-color: $black-2;
}

.agile__box {
  max-width: 1200px;
  width: 100vw;
  margin-top: 50px;
}

@media screen and (max-width: 460px){
  .title__box {
    grid-template-columns: 1fr;
  }
  .left, .right {
    display: none;
  }
}
</style>
