<template>
  <section>
    <section id="home" class="flex flex-jc-center flex-ai-center">
      <h1>Hello.</h1>
    </section>
    <div class="container">
      <section id="about" class="col-m-12 col-p-12">
        <h1><span>About</span></h1>
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
        <h1><span>Work</span></h1>
        <div class="flex flex-wrap row">
          <div class="col-m-12 col-p-6" v-for="card in workCards" :key="card.id">
            <work-card
              :logoImg="card.img"
              :cardStyle="card.style"
              :imgResponsive="card.imgResponsive"
            ></work-card>
          </div>
        </div>
      </section>
      <section id="pa" class="col-m-12 col-p-12">
        <h1><span>Personal Activities</span></h1>
        <div class="flex flex-wrap row">
          <div class="col-m-12 col-p-4" v-for="card in paCards" :key="card.id">
            <pa-card
              :date="card.date"
              :title="card.title"
              :contents="card.contents"
            ></pa-card>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import WorkCard from '~/components/index/WorkCard.vue'
import PaCard from '~/components/index/PaCard.vue'

export default {
  name: 'index',
  components: { WorkCard, PaCard },
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
      ],
      paCards: [
        {
          'date': '2017.07 - 현재',
          'title': 'vue-lunar-calendar',
          'contents': [
            '- Vue.js component library',
            '- <a href="https://github.com/KimWooHyun/vue-lunar-calendar">https://github.com/KimWooHyun/vue-lunar-calendar</a>',
            '- 한국 음력 달력 라이브러리',
            '- opensource',
            '- 총 7명의 contributors, 6개의 언어'
          ]
        },
        {
          'date': '2017.08',
          'title': 'WHLunarCalendar',
          'contents': [
            '- Swift library',
            '- <a href="https://github.com/KimWooHyun/WHLunarCalendar">https://github.com/KimWooHyun/WHLunarCalendar</a>',
            '- 한국 음력 달력 라이브러리',
            '- opensource'
          ]
        },
        {
          'date': '2017.12',
          'title': 'Do it! Vue.js',
          'contents': [
            'vue.js 관련 책 기술 검토 및 자문',
            '서명: Do it! Vue.js 입문서',
            '저자: 장기효',
            '대상 독자: 프레임워크를 다뤄보지 않은 웹 개발 입문자, Vue.js를 배우고 싶은 대학생 & 퍼블리셔 & 실무자',
            '책 내용: 프론트엔드 개발 프레임워크인 Vue.js 소개, 뷰 기술요소 학습, 뷰를 이용한 실전 애플리케이션 제작'
          ]
        },
        {
          'date': '2017.12',
          'title': 'Vue.js Korea Meetup3',
          'contents': [
            'Vue.js Korea 3번째 밋업 스태프 및 행사 총괄'
          ]
        },
        {
          'date': '2017.11',
          'title': 'GDG DevFest',
          'contents': [
            'GDG DevFest 스태프',
            '- 안내사이트 제작 참여',
            '- <a href="https://devfest17-seoul.firebaseapp.com/">https://devfest17-seoul.firebaseapp.com/</a>'
          ]
        },
        {
          'date': '2017.09',
          'title': '9XD 해커톤',
          'contents': [
            '9XD 해커톤 "내꺼만들기, 내꺼톤" 참가',
            '- Vue.js 전파',
            '- 팀 주제: 불만',
            '- 본인의 불만을 말하고 피드백을 받을 수 있는 게시판 형태의 웹 서비스 "불만투고" 제작 및 배포'
          ]
        },
        {
          'date': '2017.08',
          'title': 'GDG Web Tech',
          'contents': [
            'GDG Web Tech 발표',
            '- Vue.js 관련 발표',
            '- <a href="https://www.slideshare.net/ssuserd3aacb/vue-js-79169830">https://www.slideshare.net/ssuserd3aacb/vue-js-79169830</a>'
          ]
        },
        {
          'date': '2017.08',
          'title': 'Vue.js Korea Meetup2',
          'contents': [
            'vue.js Korea 2번째 밋업 스태프'
          ]
        },
        {
          'date': '2017.07',
          'title': 'GDG Korea Campus summer party',
          'contents': [
            'GDG Korea Campus 스태프',
            '- 행사 준비',
            '- 안내사이트 제작 참여',
            '- <a href="https://gdgsummerparty.firebaseapp.com">https://gdgsummerparty.firebaseapp.com</a>'
          ]
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
    span {
      border-bottom: 5px solid @dark-black;
    }
  }
}
.row {
  margin: 0px -10px;
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
    color: #ffffff;
    transform: scale(1);
    transition: transform 0.35s;
  }
  .btn-resume:hover {
    transform: scale(1.1);
    transition: transform 0.35s;
  }
}

@media only screen and ( min-width : 768px ){
}
</style>
