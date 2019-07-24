<template>
  <div id="app" class="grid g-center">
    <start-window/>
    <nav-menu></nav-menu>
    <section-1/>
    <section-2/>
    <section-3/>
    <section-4/>
    <section-5/>
    <section-6/>
    <section-7/>
    <section-8/>
    <section-9/>
    <section-10/>
    <section-11/>
    <footer-app/>
  </div>
</template>

<script>
import startWindow from '@/components/startTitle.vue'
import menu from '@/components/section_1/menu.vue'
import section1 from '@/components/section_1.vue'
import section2 from '@/components/section_2.vue'
import section3 from '@/components/section_3.vue'
import section4 from '@/components/section_4.vue'
import section5 from '@/components/section_5.vue'
import section6 from '@/components/section_6.vue'
import section7 from '@/components/section_7.vue'
import section8 from '@/components/section_8.vue'
import section9 from '@/components/section_9.vue'
import section10 from '@/components/section_10.vue'
import section11 from '@/components/section_11.vue'
import footerApp from '@/components/footer.vue'

export default {
  components: {
    'start-window': startWindow,
    'nav-menu': menu,
    'section-1': section1,
    'section-2': section2,
    'section-3': section3,
    'section-4': section4,
    'section-5': section5,
    'section-6': section6,
    'section-7': section7,
    'section-8': section8,
    'section-9': section9,
    'section-10': section10,
    'section-11': section11,
    'footer-app': footerApp
  }
}
</script>

<style lang="sass" scoped>
</style>
