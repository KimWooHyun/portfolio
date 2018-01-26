<template>
  <section>
    <section id="home" class="flex flex-jc-center flex-ai-center">
      <h1>Hello.</h1>
    </section>
    <div class="container">
      <section id="about" class="col-m-12 col-p-12">
        <h1>About</h1>
        <div>
          <p>
            2014년부터 Front-End 개발을 하고 있는 김우현입니다.<br/>
            마크업과 Vue.js를 이용한 Front-End 개발에 관해 관심이 많으며 최근에는 flex와 크로스 브라우징, 반응형 웹과 사용자 인터랙션에도 관심을 두고 있습니다.<br/>
            주로 사용하는 언어는 HTML, CSS, JavaScript 입니다.<br/>
          </p>
          <div class="flex flex-ai-center div-more-infomation">
            <a class="btn btn-primary btn-resume" href="https://kimwoohyun.github.io/resume/">이력서 보러가기 <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>
      <section id="work" class="col-m-12 col-p-12">
        <h1>Work</h1>
        <div class="flex flex-wrap row">
          <work-card v-for="card in workCards"
            :key="card.id"
            :logoImg="card.img"
            :cardStyle="card.style"
            :imgResponsive="card.imgResponsive"
          ></work-card>
        </div>
      </section>
      <section id="pa" class="col-m-12 col-p-12">
        <h1>Personal Activities</h1>
      </section>
    </div>
  </section>
</template>

<script>
import WorkCard from '~/components/index/WorkCard.vue'

export default {
  name: 'index',
  components: { WorkCard },
  data () {
    return {
      workCards: [
        {
          img: '/image/logo-om.png',
          imgResponsive: false,
          style: { 'background-color': '#222944' }
        },
        {
          img: '/image/logo-se.png',
          imgResponsive: true,
          style: { 'background-color': '#2fc1b6' },
        }
      ]
    }
  },
  created () {
    console.log('Hello stranger!')
  }
}
</script>

<style lang="less" scoped>
@import '~assets/css/color.less';

.container {
  margin-bottom: 60px;
  section {
    margin-top: 60px;
    line-height: 1.8;
  }
  h1 {
    margin-bottom: 15px;
  }
}
.row {
  margin: -10px;
}
#home {
  height: 200px;
  background-color: @main-color;
  h1 {
    color: #fff;
    font-size: 4rem;
  }
}
#about {
  .div-more-infomation {
    margin-top: 20px;
  }
  .btn-resume {
    transform: scale(1);
    transition: transform 0.35s;
  }
  .btn-resume:hover {
    transform: scale(1.1);
    transition: transform 0.35s;
  }
}
#work {
}

@media only screen and ( min-width : 768px ){
}
</style>

<style lang="less">
</style>
