<template>
  <header class="container-full start-window grid g-center g-vcenter">
    <div class="bg"></div>
    <section class="container">
      <article class="text-upp content-box">
        <p class="top-title text-center">{{ topTitle }}</p>
        <h1 class="bold-title">{{ boldTitle }}</h1>
        <p class="border"><span class="text-cap text-bold"><span class="color-green">s</span>tartuprr,</span> next generation & highly flexible wordpress theme</p>
        <div class="start-doing grid g-vcenter">
          <div class="start-doing__decor"></div>
          <div class="start-doing__box flex f-vcenter">
            <span class="my-icon my-icon__left"></span>
            <span>
              <p class="text-bold start-doing__text"><span class="color-green">start</span> doing that</p>
            </span>
            <span class="my-icon my-icon__right"></span>
          </div>
          <div class="start-doing__decor"></div>
        </div>
        <div class="grid g-center">
          <button class="btn btn-next"></button>
        </div>
      </article>
    </section>
  </header>
</template>

<script>
export default {
  data () {
    return {
      topTitle: 'what are you waiting for ?',
      boldTitle: 'let\'s be creative !'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/_varibels.scss';
  .content-box {
    max-width: 600px;
    width: 100%;
    z-index: 2;
  }
  .start-window {
    height: 100vh;
    background: url(../assets/startTitle/background.jpg) no-repeat;
    background-position: center;
  }
  .bg {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    background: $gray-3;
    opacity: .6;
    z-index: 1;
  }
  .top-title {
    font-size: 16px;
    color: $black-2;
  }
  .bold-title {
    font-size: 58px;
    margin: 0 0 15px 0;
    letter-spacing: 1.8px;
    color: $black-2;
  }
  .border {
    padding: .8em;
    background-color: $black-2;
    color: $white-2;
    font-size: 1.2em;
    border-radius: 5px;
  }
  .start-doing {
    margin: 42px 0;
    grid-template-columns: 1fr auto 1fr;
    font-size: 1.8em;
  }
  .start-doing__decor {
    border-top: 1px solid $white-2;
    border-bottom: 1px solid $white-2;
    height: 5px;
  }
  .start-doing__box {
  }
  .start-doing__text {
    color: $black-2;
    margin: 0 .4em;
  }
  .my-icon {
    width: 1em;
    height: .5em;
    margin: 0 .4em;
  }
  .my-icon__left {
    background: url(../assets/startTitle/icon-1.svg) no-repeat;
    background-size: 1em .5em;
    background-position: center;
  }
  .my-icon__right {
    background: url(../assets/startTitle/icon-2.svg) no-repeat;
    background-size: 1em .5em;
    background-position: center;
  }
  .btn-next {
    font-size: 4em;
    font-weight: 100;
    padding: 0;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: url(../assets/startTitle/icon-button.svg) no-repeat;
    background-size: 60px 60px;
    background-position: center;
    transform: rotate(90deg);
  }

  @media screen and (max-width: 640px){
    .content-box {
      max-width: 100%;
      text-align: center;
    }
    .bold-title {
      font-size: 38px;
    }
    .border {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 420px){
    .top-title {
      font-size: 14px;
    }
    .bold-title {
      font-size: 48px;
    }
    .border {
      font-size: 16px;
      line-height: 1.6em;
    }
    .start-doing__text {
      font-size: 18px;
    }
  }
</style>
