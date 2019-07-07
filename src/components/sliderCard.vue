<template>
  <article class="container-full sliderCard">
    <div class="header grid g-center g-vcenter">
      <div class="link-box grid g-center g-vcenter">
        <div class="link-content grid g-center g-vcenter">
          <a href="#" class="link btn btn-dark"><span class="facebook"></span></a>
          <a href="#" class="link btn btn-dark"><span class="twitter"></span></a>
          <a href="#" class="link btn btn-dark"><span class="google"></span></a>
          <a href="#" class="link btn btn-dark"><span class="vimeo"></span></a>
          <a href="#" class="link btn btn-dark"><span class="dribbble"></span></a>
        </div>
      </div>
      <img class="header__img" :src="cardData.img" alt="#">
    </div>
    <div class="body grid">
      <div class="body__item grid g-center card__button">
        <button class="btn btn-dark button">{{ cardData.button }}</button>
      </div>
      <div class="body__item grid g-center">
        <h4 class="title">{{ cardData.title }}</h4>
      </div>
      <div class="body__item grid g-center">
        <div class="contact grid g-center g-vcenter">
          <span class="email-icon"></span>
          <span class="email-text">{{ cardData.email }}</span>
        </div>
      </div>
      <div class="body__item grid g-center">
        <div class="contact grid g-vcenter">
          <span class="phone-icon"></span>
          <span class="phone-text">{{ cardData.phone }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'cardData'
  ],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.sliderCard {
  border-radius: 10px;
  border: 1px solid $white-1;
  &:hover {
    .link-box {
      opacity: 1;
    }
  }
}
.body {
  grid-gap: 15px;
  padding: 15px;
}
.header {
  position: relative;
}
.header__img {
  width: 100%;
}
.link-box {
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: fade-out($green-1, .4);
  opacity: 0;
  transition: opacity .2s linear;
}
.link-content {
  grid-template-columns: repeat(5, 1fr);
}
.link {
  width: 40px;
  height: 40px;
  background-color: $white-2;
  border-radius: 3px;
  transform: rotate(45deg);
  z-index: 1;
  position: relative;
  &:hover {
    z-index: 2;
    .facebook {
      background: url('../assets/section_7/card/icon-1-hover.svg') no-repeat;
      background-position: center;
      background-size: 1.8em;
    }
    .twitter {
      background: url('../assets/section_7/card/icon-2-hover.svg') no-repeat;
      background-position: center;
      background-size: 1.8em;
    }
    .google {
      background: url('../assets/section_7/card/icon-3-hover.svg') no-repeat;
      background-position: center;
      background-size: 1.8em;
    }
    .vimeo {
      background: url('../assets/section_7/card/icon-4-hover.svg') no-repeat;
      background-position: center;
      background-size: 1.8em;
    }
    .dribbble {
      background: url('../assets/section_7/card/icon-5-hover.svg') no-repeat;
      background-position: center;
      background-size: 1.8em;
    }
  }
}
.facebook, .twitter, .google, .vimeo, .dribbble {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-45deg);
  transition: background .9s linear;
}

.facebook {
  background: url('../assets/section_7/card/icon-1.svg') no-repeat;
  background-position: center;
  background-size: 1.8em;
}
.twitter {
  background: url('../assets/section_7/card/icon-2.svg') no-repeat;
  background-position: center;
  background-size: 1.8em;
}
.google {
  background: url('../assets/section_7/card/icon-3.svg') no-repeat;
  background-position: center;
  background-size: 1.8em;
}
.vimeo {
  background: url('../assets/section_7/card/icon-4.svg') no-repeat;
  background-position: center;
  background-size: 1.8em;
}
.dribbble {
  background: url('../assets/section_7/card/icon-5.svg') no-repeat;
  background-position: center;
  background-size: 1.8em;
}
.header__img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.card__button {
  position: relative;
}
.button {
  position: absolute;
  top: -3em;
}
.title {
  padding: 15px 0 15px 0;
  border-bottom: 1px solid $white-1;
  font-size: 12px !important;
  line-height: 2em;
  font-weight: normal;
  color: $gray-1;
}
.contact {
  grid-template-columns: auto auto;
  grid-gap: 15px;
  font-size: 13px;
  color: $gray-4;
}
.email-icon {
  width: 1em;
  height: 1em;
  background: url('../assets/section_7/icon-email.svg') no-repeat;
  background-position: center;
  background-size: 1em 1em;
}
.phone-icon {
  width: 1em;
  height: 1em;
  background: url('../assets/section_7/icon-phone.svg') no-repeat;
  background-position: center;
  background-size: 1em 1em;
}
</style>
