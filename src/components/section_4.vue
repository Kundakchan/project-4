<template>
  <div class="container-full bg-dark g-center">
    <div class="container costom">
      <section-title class="test" :big="titleText.big" :smail="titleText.smail" :options="titleText.options"></section-title>
      <div class="skills grid g-center">
        <div class="skills__item" v-for="(item, index) in skillSetting" :key="index">
          <skills :name="item.name" :level="item.level"></skills>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from '@/components/title.vue'
import skills from '@/components/skills.vue'
export default {
  components: {
    'section-title': title,
    'skills': skills
  },
  data () {
    return {
      titleText: {
        big: 'our powerful skills',
        smail: 'We’re good and experienced at different things and areas and we promise about qulity of our works',
        options: {
          theme: 'dark'
        }
      },
      skillSetting: [
        {
          name: 'web design',
          level: 75
        },
        {
          name: 'web development',
          level: 92
        },
        {
          name: 'speed optimization',
          level: 68
        },
        {
          name: 'customer support',
          level: 100
        },
        {
          name: 'marketing',
          level: 83
        },
        {
          name: 'advertisement',
          level: 50
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_varibels.scss';
.costom {
  grid-row-gap: 50px;
  padding-top: 70px;
  padding-bottom: 70px;
}

.skills {
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
}

@media screen and (max-width: 900px){
  .skills {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 50px;
  }
}

@media screen and (max-width: 460px){
  .skills {
    grid-template-columns: 1fr;
  }
}
</style>
