<template>
  <figure class="flex flex-ai-center flex-jc-center" :style="cardStyle" @click="clickCard()">
    <img :src="require('~/assets' + logoImg)" :class="imgResponsive ? 'img-responsive' : ''"/>
  </figure>
</template>

<script>

export default {
  name: 'career-card',
  props: {
    logoImg: {
      type: String,
      required: true
    },
    cardStyle: {
      type: Object,
      required: false
    },
    imgResponsive: {
      type: Boolean,
      required: false,
      default: false
    },
    link: {
      type: String,
      required: false
    }
  },
  methods: {
    clickCard () {
      if (this.link) {
        this.$router.push(`/career/${this.link}`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
figure {
  height: 250px;
  margin: 0px 10px 20px 10px;
  padding: 0px 10px;
  border-radius: 3px;
  transform: scale(1);
  transition: transform 0.35s;
  cursor: pointer;
}
figure:hover {
  transform: scale(1.05);
  transition: transform 0.35s;
}
p {
  color: #ffffff;
  text-align: center;
  font-size: 4rem;
}

@media only screen and ( min-width : 768px ){
}
</style>
