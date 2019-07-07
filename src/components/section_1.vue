<template>
  <section class="container content">
    <div class="item title grid">
      <div class="title__item line left-line"></div>
      <div class="title__item left"></div>
      <h2 class="title__item title__text text-upp color-dark">what we <span class="color-green">offer</span></h2>
      <div class="title__item right"></div>
      <div class="title__item line right-line"></div>
    </div>
    <div class="item grid g-center title-2">
      <p class="title-2__text">We offer our customers the best services & solutions, this is our main services list</p>
    </div>
    <div class="item grid g-center options">
      <article class="options__item grid g-center">
        <div class="options__header grid g-center g-vcenter">
          <img src="@/assets/section_1/icon-1.png" alt="img" class="options__image">
        </div>
        <div class="options__body">
          <h3 class="options__title text-upp">responsive & multipurpose</h3>
          <p class="options__text">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</p>
        </div>
        <div class="options__footer">
          <button class="options__button btn">read more</button>
        </div>
      </article>
      <article class="options__item grid g-center">
        <div class="options__header grid g-center g-vcenter">
          <img src="@/assets/section_1/icon-2.png" alt="img" class="options__image">
        </div>
        <div class="options__body">
          <h3 class="options__title text-upp">easy customization</h3>
          <p class="options__text">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</p>
        </div>
        <div class="options__footer">
          <button class="options__button btn">read more</button>
        </div>
      </article>
      <article class="options__item grid g-center">
        <div class="options__header grid g-center g-vcenter">
          <img src="@/assets/section_1/icon-3.png" alt="img" class="options__image">
        </div>
        <div class="options__body">
          <h3 class="options__title text-upp">awesome friendly support</h3>
          <p class="options__text">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</p>
        </div>
        <div class="options__footer">
          <button class="options__button btn">read more</button>
        </div>
      </article>
    </div>
    <div class="item grid g-center">
      <img class="bottom-icon" src="@/assets/section_1/icon-4.png" alt="#">
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.content {
  //grid-auto-rows: minmax(200px, auto);
  grid-row-gap: 18px;
  margin: 80px 0;
  position: relative;
}
.title {
  grid-template-columns: 1fr 50px auto 50px 1fr;
}
.title__text {
  font-size: 26px;
}
.left {
  background: url(../assets/startTitle/icon-1.svg) no-repeat;
  background-position: center;
}
.right {
  background: url(../assets/startTitle/icon-2.svg) no-repeat;
  background-position: center;
}
.line {
  height: 6px;
  align-self: center;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}
.left-line {
  border-image: linear-gradient(to right, $opacity-0 0%, $gray-3 100%);
  border-image-slice: 1;
}
.right-line {
  border-image: linear-gradient(to left, $opacity-0 0%, $gray-3 100%);
  border-image-slice: 1;
}
.title-2__text {
  font-size: 16px;
  text-align: center;
}
.options {
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
}
.options__item {
  grid-row-gap: 20px;
  &:hover{
    .options__header {
      background-color: $green-1;
      transition: background-color .2s linear;
    }
  }
}
.options__header {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: $black-2;
}
.options__body {
  text-align: center;
  line-height: 2em;
}
.options__button {
  border: 1px solid $green-1;
  background-color: $opacity-0;
  color: $gray-3;
  font-size: 10px;
  padding: 1em;
  &:hover {
    background-color: $green-1;
  }
}
.bottom-icon {
  position: absolute;
  bottom: -110px;
  left: 50%;
  margin-left: -27px;
}
@media screen and (max-width: 700px){
  .options {
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
  }
  .options__item {
    max-width: 500px;
  }
}
@media screen and (max-width: 460px){
  .title__text {
    font-size: 18px;
  }
}

</style>
