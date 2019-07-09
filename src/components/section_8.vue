<template>
  <article class="agile__container-full bg-green">
    <div class="agile__container">
      <agile ref="carousel" :options="agileOptions">
        <div class="slide" v-for="(item, index) in comments" :key="index">
          <div class="content grid g-center">
            <div class="comment__top">
              <div class="button btn btn-white costom">{{ item.name }} <span class="postfix">{{ item.post }}</span> </div>
            </div>
            <div class="comment__bottom">
              <p class="comment__text text-center">{{ item.comment }}</p>
            </div>
          </div>
        </div>
      </agile>
      <div class="nav__group">
        <button class="btn btn-white nav__button-left" @click="$refs.carousel.goToPrev()"></button>
        <button class="btn btn-white nav__button-right" @click="$refs.carousel.goToNext()"></button>
      </div>
    </div>
    <div class="agile__container-full bg-dark">
      <div class="agile__container partners">
        <div class="partners__carousel">
          <agile :options="partnersOptions">
            <div class="slide" v-for="(item, index) in partners" :key="index">
              <div class="partners__content grid g-center g-vcenter">
                <img :src="item.img" alt="img">
                <div class="img__hover"></div>
              </div>
            </div>
          </agile>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      comments: [
        {
          name: 'alexis simpson',
          post: ' - CEO & Developer',
          comment: 'Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.'
        },
        {
          name: 'jon smoll',
          post: ' - Developer',
          comment: 'Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.'
        },
        {
          name: 'tim west',
          post: ' - tester',
          comment: 'Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.'
        },
        {
          name: 'alexsander troickey',
          post: ' - Team leader',
          comment: 'Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.'
        }
      ],
      partners: [
        {
          img: require('@/assets/section_8/img-1.png')
        },
        {
          img: require('@/assets/section_8/img-2.png')
        },
        {
          img: require('@/assets/section_8/img-3.png')
        },
        {
          img: require('@/assets/section_8/img-4.png')
        },
        {
          img: require('@/assets/section_8/img-1.png')
        },
        {
          img: require('@/assets/section_8/img-2.png')
        },
        {
          img: require('@/assets/section_8/img-3.png')
        }
      ],
      agileOptions: {
        dots: false,
        navButtons: false
      },
      partnersOptions: {
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
            breakpoint: 640,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';

.agile__container-full {
  max-width: 100vw;
  width: 100%;
  display: grid;
  justify-items: center;
}
.agile__container {
  max-width: 1200px;
  width: 100vw;
  padding: 0 15px;
  padding-top: 77px;
  padding-bottom: 50px;
}

.content {
  grid-row-gap: 30px;
  cursor: grab;
}

.costom {
  color: $gray-4;
  cursor: pointer;
}
.postfix {
  color: $green-1;
  text-transform: capitalize;
}
.comment__text {
  color: $white-2;
  font-size: 20px;
  line-height: 34px;
}
.nav__group {
  display: flex;
  justify-content: center;
}
.nav__button-left {
  background: url('../assets/section_8/navButton/left.svg') no-repeat;
  background-size: 32px 32px;
  background-position: center;
  background-color: $white-2;
  transition: background .2s linear;
  margin-right: 2px;
}
.nav__button-left:hover {
  background: url('../assets/section_8/navButton/left-hover.svg') no-repeat;
  background-size: 32px 32px;
  background-position: center;
  background-color: $black-2;
}
.nav__button-right {
  background: url('../assets/section_8/navButton/right.svg') no-repeat;
  background-size: 32px 32px;
  background-position: center;
  background-color: $white-2;
  transition: background .2s linear;
  margin-left: 2px;
}
.nav__button-right:hover {
  background: url('../assets/section_8/navButton/right-hover.svg') no-repeat;
  background-size: 32px 32px;
  background-position: center;
  background-color: $black-2;
}

// ---partners--- //

.partners {
  padding: 50px 15px;
  position: relative;
}
.partners__content {
  background-color: $black-1;
  height: 160px;
  margin: 0 15px;
  position: relative;
  &:hover {
    .img__hover {
      opacity: 0;
    }
  }
}
.img__hover {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 100%;
  height: 100%;
  background-color: $black-1;
  opacity: .5;
  transition: opacity .2s linear;
}
</style>
