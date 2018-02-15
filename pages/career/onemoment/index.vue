<template>
  <section>
    <section class="section-intro img-background">
      <div class="flex flex-wrap flex-ai-center flex-jc-center div-slogan">
        <div>
          <h1>ONE MOMENT</h1>
          <h2>Make a Magical Moment</h2>
        </div>
      </div>
    </section>
    <section class="container section-info">
      <div class="col-m-12 col-p-12">
        <h1>회사 소개</h1>
        <p>90분 당일 꽃배달 서비스 “원모먼트 플라워” 를 서비스 중인 스타트업.</p>
      </div>
      <div class="col-m-12 col-p-12">
        <h1>서비스</h1>
        <h2>Web</h2>
        <p>- <a href="https://1moment.co.kr/">https://1moment.co.kr/</a></p>
        <p>- 현재 Vue.js (SPA)로 개발된 사이트</p><br />
        <h2>iOS App</h2>
        <p>- <a href="https://goo.gl/jP2ZYR">https://goo.gl/jP2ZYR</a></p>
      </div>
    </section>
    <section class="container section-main-tab">
      <ul class="flex flex-wrap flex-jc-center col-m-12 col-p-12">
        <li :class="['col-m-6', 'col-p-6', activeMainTab === 'web' ? 'active' : '' ]" @click="clickMainTab('web')">
          <h1>Web Front-End</h1>
        </li>
        <li :class="['col-m-6', 'col-p-6', activeMainTab === 'app' ? 'active' : '' ]" @click="clickMainTab('app')">
          <h1>iOS App</h1>
        </li>
      </ul>
    </section>
    <section class="section-tab-contents">
      <section v-if="activeMainTab === 'web'">
        <section class="container flex-ai-center flex-jc-center">
          <nav>
            <ul class="flex">
              <li :class="activeWebTab === 'django' ? 'active' : ''" @click="clickWebTab('django')">서비스 런칭</li>
              <li><i class="fas fa-arrow-right"></i></li>
              <li :class="activeWebTab === 'vue' ? 'active' : ''" @click="clickWebTab('vue')">vue.js 도입</li>
              <li><i class="fas fa-arrow-right"></i></li>
              <li :class="activeWebTab === 'nuxt' ? 'active' : ''" @click="clickWebTab('nuxt')">nuxt.js 도입</li>
            </ul>
          </nav>
        </section>
        <section class="container">
          <section v-if="activeWebTab === 'django'">
            <div class="flex flex-wrap flex-jc-center">
              <h2 class="col-m-12 col-p-12">서비스 런칭</h2>
              <div class="col-m-12 col-p-12 div-info">
                <p>
                  - Django template을 이용한 front-end 개발<br/>
                  - 기여도 : 100%, 단독진행<br/>
                  stack: HTML5, CSS3, JavaScript, jQuery, Django
                </p>
              </div>
              <h2 class="col-m-12 col-p-12">메인 페이지</h2>
              <div class="col-m-12 col-p-12 div-img">
                <img src="~assets/image/om/onemoment.png" class="img-responsive"/>
              </div>
              <h2 class="col-m-12 col-p-12">상세 페이지</h2>
              <div class="col-m-12 col-p-12 div-img">
                <img src="~assets/image/om/onemoment-detail.png" class="img-responsive"/>
              </div>
            </div>
          </section>
          <section v-else-if="activeWebTab === 'vue'">
            <div class="flex flex-wrap flex-jc-center">
              <h2 class="col-m-12 col-p-12">vue.js 도입</h2>
              <div class="col-m-12 col-p-12 div-info">
                <p>
                  - 원모먼트 서비스 사이트 전체 리뉴얼<br/>
                  - Vue.js (SPA) 도입<br/>
                  - 비동기 처리를 이용한 서비스 속도 개선<br/>
                  - vue-resource 를 활용한 api call<br/>
                  - 기여도 : 45%<br/>
                  stack: Vue.js, Bootstrap 4, Bootstrap 3, jQuery
                </p>
              </div>
              <h2 class="col-m-12 col-p-12">메인 페이지</h2>
              <div class="col-m-12 col-p-12 div-img">
                <img src="~assets/image/om/onemoment-vue.png" class="img-responsive"/>
              </div>
              <h2 class="col-m-12 col-p-12">상세 페이지</h2>
              <div class="col-m-12 col-p-12 div-img">
                <img src="~assets/image/om/onemoment-vue-detail.png" class="img-responsive"/>
              </div>
            </div>
          </section>
          <section v-else-if="activeWebTab === 'nuxt'">
            <div class="flex flex-wrap flex-jc-center">
              <h2 class="col-m-12 col-p-12">nuxt.js 도입</h2>
              <div class="col-m-12 col-p-12 div-info">
                <p>
                  - 원모먼트 서비스 사이트 전체 리뉴얼<br/>
                  - Nuxt.js 도입 및 SSR 지원<br/>
                  - css 프레임워크 제거 및 LESS 도입<br/>
                  - 그리드 시스템 개발<br/>
                  - 시멘틱 웹 표준 준수<br/>
                  - axios 를 활용한 api call<br/>
                  - PM2, ecosystem을 이용한 배포 자동화<br/>
                  - 기여도 : 100%, 단독진행<br/>
                  stack: Vue.js, Nuxt.js, Less
                </p>
              </div>
              <h2 class="col-m-12 col-p-12">메인 페이지</h2>
              <div class="col-m-12 col-p-12 div-img">
                <img src="~assets/image/om/onemoment-nuxt.png" class="img-responsive"/>
              </div>
              <h2 class="col-m-12 col-p-12">상세 페이지</h2>
              <div class="col-m-12 col-p-12 div-img">
                <img src="~assets/image/om/onemoment-nuxt-detail.png" class="img-responsive"/>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section v-else-if="activeMainTab === 'app'">
        <section class="container">
          <div class="div-app-wrapper">
            <h2 class="col-m-12 col-p-12">스크린샷</h2>
            <div class="flex flex-wrap">
              <div class="col-m-6 col-p-3 div-app-img">
                <img src="~assets/image/om/app1.jpg" class="img-responsive"/>
              </div>
              <div class="col-m-6 col-p-3 div-app-img">
                <img src="~assets/image/om/app2.jpg" class="img-responsive"/>
              </div>
              <div class="col-m-6 col-p-3 div-app-img">
                <img src="~assets/image/om/app3.jpg" class="img-responsive"/>
              </div>
              <div class="col-m-6 col-p-3 div-app-img">
                <img src="~assets/image/om/app4.jpg" class="img-responsive"/>
              </div>
            </div>
          </div>
          <div class="div-app-wrapper col-m-12 col-p-12">
            <h2 class="col-m-12 col-p-12">영상</h2>
            <video width="100%" height="auto" controls>
              <source src="~assets/video/om/om.mp4" type="video/mp4">
            </video>
          </div>
        </section>
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
      activeMainTab: 'web',
      activeWebTab: 'django'
    }
  },
  methods: {
    clickMainTab (tab) {
      this.activeMainTab = tab
    },
    clickWebTab (tab) {
      this.activeWebTab = tab
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
  min-height: 100px;
}
.section-intro {
  position: relative;
  background-image: url('~assets/image/om/bg-intro.jpg');
  height: 80vh;
  .div-slogan {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    color: #ffffff;
    text-align: center;
    h1 {
      margin-bottom: 20px;
    }
  }
}
.section-info {
  padding-top: 40px;
  padding-bottom: 40px;
  h1 {
    padding-bottom: 10px;
  }
  div {
    margin-bottom: 20px;
  }
  p {
    line-height: 2;
  }
}
.section-main-tab {
  li {
    padding: 50px 0px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    color: #222944;
  }
  li.active {
    background-color: #222944;
    color: #89674e;
    text-decoration: underline;
  }
}
.section-tab-contents {
  li {
    padding: 5px;
    cursor: pointer;
  }
  li.active {
    border-bottom: 5px solid @dark-black;
  }
}
.div-info {
  margin: 10px 0px 60px 0px;
  p {
    font-size: 16px;
    line-height: 1.8;
  }
}
.div-img {
  margin: 10px 0px 60px 0px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
}
.div-app-wrapper {
  margin: 60px 0px 60px 0px;
  .div-app-img {
    padding: 10px;
    img {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    }
  }
  video {
    padding: 10px 0px;
  }
}

@media only screen and ( min-width : 768px ){
  h1 {
    font-size: 36px;
  }
  section {
    min-height: 200px;
  }
  .section-main-tab {
    li {
      padding: 100px 0px;
    }
  }
  .section-tab-contents {
    li {
      padding: 10px;
    }
  } 
}
</style>
