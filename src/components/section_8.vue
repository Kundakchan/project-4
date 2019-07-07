<template>
  <section class="container-full">
    <div class="container-full bg-green">
      <div class="container">
        <agile>
          <div class="slide" v-for="(item, index) in comments" :key="index">
            <article class="comment grid g-center">
              <div class="comment__button-box">
                <button class="btn btn-white comment__button">
                  {{ item.name }} <span class="post">{{ item.post }}</span>
                </button>
              </div>
              <div class="comment__content">
                <p class="comment__text text-center">
                  {{ item.comment }}
                </p>
              </div>
            </article>
          </div>
          <span class="btn btn-white" slot="prevButton">prev</span>
          <span class="btn btn-white" slot="nextButton">next</span>
        </agile>
      </div>
    </div>
  </section>
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
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.container {
  padding-top: 77px;
  padding-bottom: 50px;
}
.agile {
 max-width: 1170px;
}
.comment {
  grid-row-gap: 30px;
}
.comment__text {
  color: $white-2;
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
}
</style>
