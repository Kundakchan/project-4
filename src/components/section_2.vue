<template>
  <div class="container-full bg-dark g-center">
    <div class="container">
      <section-title class="test" :big="titleText.big" :smail="titleText.smail" :options="titleText.options"></section-title>
      <div class="body-box grid g-vcenter g-center">
        <div class="content__item grid g-vcenter list">
          <div class="list__item grid g-vcenter">
            <div class="icon">
              <img src="@/assets/section_2/icon-1.png" alt="#">
            </div>
            <div class="text">
              <h3 class="text-upp">responsive & multipurpose</h3>
              <p>Proin in magna a ipsum viverra scelerisq enec turp, nunc vestibulum.</p>
            </div>
          </div>
          <div class="list__item grid g-vcenter">
            <div class="icon">
              <img src="@/assets/section_2/icon-2.png" alt="#">
            </div>
            <div class="text">
              <h3 class="text-upp">easy customization</h3>
              <p>Proin in magna a ipsum viverra scelerisq enec turp, nunc vestibulum.</p>
            </div>
          </div>
          <div class="list__item grid g-vcenter">
            <div class="icon">
              <img src="@/assets/section_2/icon-3.png" alt="#">
            </div>
            <div class="text">
              <h3 class="text-upp">unlimited features</h3>
              <p>Proin in magna a ipsum viverra scelerisq enec turp, nunc vestibulum.</p>
            </div>
          </div>
        </div>
        <div class="content__item divaices__box">
          <img src="@/assets/section_2/img-1.png" alt="img" class="divaices">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from '@/components/title.vue'
export default {
  components: {
    'section-title': title
  },
  data () {
    return {
      titleText: {
        big: 'amazing features',
        smail: 'With unlimited features that we offer, we promise it’s possible to make everything that was impossible for you !',
        options: {
          theme: 'dark'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.test {
  margin: 50px 0;
}
.body-box {
  grid-template-columns: 1fr auto;
  grid-column-gap: 120px;
}
.list {
  grid-auto-rows: auto;
  grid-row-gap: 67px;
}
.list__item {
  grid-template-columns: auto 1fr;
  grid-column-gap: 34px;
}
.text {
  h3 {
    color: $white-2;
    margin-bottom: 20px;
  }
  p {
    color: $gray-2;
    line-height: 2em;
  }
}
.divaices__box {
  align-self: flex-end;
}
@media screen and (max-width: 1040px){
  .body-box {
    grid-template-columns: 1fr;
  }
  .content__item:last-child {
    display: none;
  }
}
</style>
