<template>
  <section class="container-full box g-center">
    <section-title :big="titleText.big" :smail="titleText.smail" :options="titleText.options"></section-title>
    <div class="doc grid">
      <div class="doc__item" v-for="(item, index) in hovers" :key="index">
        <hover :img="item.img" :title="item.title" :text="item.text" :like="item.like"></hover>
      </div>
    </div>
    <div class="container bottom">
      <button class="btn costom">view all works</button>
    </div>
    <img src="@/assets/section_3/blok.png" alt="icon" class="bottom-icon">
  </section>
</template>

<script>
import sectionTitle from '@/components/title.vue'
import hover from '@/components/hover.vue'
export default {
  components: {
    'section-title': sectionTitle,
    'hover': hover
  },
  data () {
    return {
      titleText: {
        big: 'sample works',
        smail: 'Let’s take a look at some of the best of our works here, we love them and hope you too',
        options: {}
      },
      hovers: [
        {
          img: require('@/assets/section_5/img/img-1.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '138'
        },
        {
          img: require('@/assets/section_5/img/img-2.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '55'
        },
        {
          img: require('@/assets/section_5/img/img-3.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '286'
        },
        {
          img: require('@/assets/section_5/img/img-4.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '75'
        },
        {
          img: require('@/assets/section_5/img/img-5.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '20'
        },
        {
          img: require('@/assets/section_5/img/img-6.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '88'
        },
        {
          img: require('@/assets/section_5/img/img-7.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '233'
        },
        {
          img: require('@/assets/section_5/img/img-8.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '152'
        },
        {
          img: require('@/assets/section_5/img/img-9.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '367'
        },
        {
          img: require('@/assets/section_5/img/img-10.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '15'
        },
        {
          img: require('@/assets/section_5/img/img-11.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '54'
        },
        {
          img: require('@/assets/section_5/img/img-12.jpg'),
          title: 'Corporate Brochure',
          text: 'Illustration / Print',
          like: '274'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.box {
  padding-top: 70px;
  padding-bottom: 100px;
  position: relative;
}
.doc {
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2px;
}
.bottom {
  margin-top: 50px;
}
.costom {
  border: 1px solid $green-1;
  background-color: rgba(255, 255, 255, 0);
  color: $black-2;
  &:hover {
    color: $white-2;
    background-color: $green-1;
  }
}
.bottom-icon {
  position: absolute;
  bottom: -27px;
  left: 50%;
  margin-left: -27px;
}
@media screen and (max-width: 1400px){
  .doc {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 1040px){
  .doc {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 750px){
  .doc {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 500px){
  .doc {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
