<template>
  <section>
    <section class="section-intro">
      <img src="~assets/image/bg-intro.jpg" class="img-responsive"/>
      <div class="container flex-wrap flex-jc-center">
        <div class="div-intro-contents">
          <h1>Make a Magical Moment</h1>
          <h3>Flower On Demand Service</h3>
        </div>
      </div>
    </section>
    <section class="container flex-ai-center flex-jc-center">
      <nav>
        <ul class="flex">
          <li :class="activeTab === 'django' ? 'active' : ''" @click="clickTab('django')">서비스 런칭</li>
          <li><i class="fas fa-arrow-right"></i></li>
          <li :class="activeTab === 'vue' ? 'active' : ''" @click="clickTab('vue')">vue.js 도입</li>
          <li><i class="fas fa-arrow-right"></i></li>
          <li :class="activeTab === 'nuxt' ? 'active' : ''" @click="clickTab('nuxt')">nuxt.js 도입 및 ssr 지원</li>
        </ul>
      </nav>
    </section>
    <section class="container">
      <section :class="activeTab === 'django' ? 'show' : 'hide'">
        <div class="flex flex-wrap flex-jc-center">
          <h2 class="col-m-12 col-p-10">메인 페이지</h2>
          <div class="col-m-12 col-p-10 div-img">
            <img src="~assets/image/onemoment.png" class="img-responsive"/>
          </div>
          <h2 class="col-m-12 col-p-10">상세 페이지</h2>
          <div class="col-m-12 col-p-10 div-img">
            <img src="~assets/image/onemoment-detail.png" class="img-responsive"/>
          </div>
        </div>
      </section>
      <section :class="activeTab === 'vue' ? 'show' : 'hide'">
        <div class="flex flex-wrap flex-jc-center">
          <h2 class="col-m-12 col-p-10">메인 페이지</h2>
          <div class="col-m-12 col-p-10 div-img">
            <img src="~assets/image/onemoment-vue.png" class="img-responsive"/>
          </div>
          <h2 class="col-m-12 col-p-10">상세 페이지</h2>
          <div class="col-m-12 col-p-10 div-img">
            <img src="~assets/image/onemoment-vue-detail.png" class="img-responsive"/>
          </div>
        </div>
      </section>
      <section :class="activeTab === 'nuxt' ? 'show' : 'hide'">
        <div class="flex flex-wrap flex-jc-center">
          <h2 class="col-m-12 col-p-10">메인 페이지</h2>
          <div class="col-m-12 col-p-10 div-img">
            <img src="~assets/image/onemoment-nuxt.png" class="img-responsive"/>
          </div>
          <h2 class="col-m-12 col-p-10">상세 페이지</h2>
          <div class="col-m-12 col-p-10 div-img">
            <img src="~assets/image/onemoment-nuxt-detail.png" class="img-responsive"/>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>

export default {
  name: 'index',
  layout: 'noFooter',
  data () {
    return {
      activeTab: 'django'
    }
  },
  methods: {
    clickTab (tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/color.less';

h1 {
  font-size: 22px;
}
section {
  min-height: 200px;
}
li {
  padding: 10px;
  cursor: pointer;
}
li.active {
  border-bottom: 5px solid @dark-black;
}
.section-intro {
  background-color: #222944;
  color: #89674e;
}
.div-intro-contents {
  padding: 100px 0px;
  text-align: center;
  h1 {
    margin-bottom: 20px;
  }
}
.div-img {
  margin: 10px 0px 60px 0px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
}

@media only screen and ( min-width : 768px ){
  h1 {
    font-size: 36px;
  }
}
</style>
