<template>
  <div class="container-full g-center">
    <div class="container">
      <div class="flex f-between text-upp text-bold box">
        <div class="logo flex f-vcenter">
          <div class="logo__icon"></div>
          <span class="logo__text color-gray">startuperr</span>
        </div>
        <nav class="nav flex f-vcenter">
          <a href="#" class="nav__item btn color-dark">home</a>
          <a href="#" class="nav__item btn color-dark">portfolio</a>
          <a href="#" class="nav__item btn color-dark">blog</a>
          <a href="#" class="nav__item btn color-dark">pages</a>
          <a href="#" class="nav__item btn color-dark">features</a>
          <a href="#" class="nav__item btn color-dark">mega menu</a>
          <a href="#" class="nav__item btn color-dark">contact</a>
          <form action="#" class="search__group">
            <button class="btn search__btn color-dark" @click.prevent="searchToggler"></button>
            <input :class="{'search-shown': searchButtonStatus}" class="search__input" type="text" placeholder="search">
          </form>
        </nav>
      </div>
    </div>
    <div class="line full"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchButtonStatus: false
    }
  },
  methods: {
    searchToggler () {
      this.searchButtonStatus = !this.searchButtonStatus
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.box {
  margin: 30px 0;
}
.logo__icon {
  width: 50px;
  height: 50px;
  background: url(../../assets/section_1/nav_menu/logo__icon.svg) no-repeat;
  background-position: center;
  background-size: 50px 50px;
}
.logo__text {
  font-size: 16px;
  font-style: italic;
}
.nav {
  position: relative;
}

.search__btn {
  background: url(../../assets/section_1/nav_menu/search-icon.svg) no-repeat;
  background-position: center;
  background-size: 20px 20px;
  width: 3.4em;
  height: 3.4em;
  border-radius: 100%;
  transition: background-image .1s linear;
  &:hover {
    background: url(../../assets/section_1/nav_menu/search-icon-hover.svg) no-repeat;
    background-position: center;
    background-size: 20px 20px;
    background-color: $green-1;
  }
}
.search-shown {
  opacity: 1;
}
.line {
  height: 1px;
  background-color: $green-1;
}
@media screen and (max-width: 860px){
  .logo {
    display: none;
  }
  .nav {
    justify-content: space-between;
    width: 100%;
  }
}
@media screen and (max-width: 700px){
  .nav {
    flex-direction: column;
  }
  .nav__item {
    width: 100%;
  }
  .search__group {
    display: flex;
    width: 100%;
  }
  .search__input {
    position: initial;
    padding-left: 15px;
  }
}

</style>
