<template>
  <section>
    <section id="home" class="flex flex-wrap flex-jc-center flex-ai-center">
      <div class="col-m-12 col-p-12">
        <h1>김우현</h1>
        <h2><i class="far fa-envelope"></i>dngus242@gmail.com</h2>
      </div>
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
      <section id="career" class="col-m-12 col-p-12">
        <h1><span>Career</span></h1>
        <div class="flex flex-wrap row">
          <div class="col-m-12 col-p-6" v-for="card in CareerCards" :key="card.id">
            <career-card
              :logoImg="card.img"
              :cardStyle="card.style"
              :imgResponsive="card.imgResponsive"
              :link="card.link"
            ></career-card>
          </div>
        </div>
      </section>
      <section id="pa" class="col-m-12 col-p-12">
        <h1><span>Personal Activities</span></h1>
        <div class="flex flex-wrap flex-jc-center row">
          <div class="col-m-12 col-p-4" v-for="card in paCards" :key="card.id">
            <pa-card
              :date="card.date"
              :title="card.title"
              :img="card.img"
              :contents="card.contents"
            ></pa-card>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import CareerCard from '~/components/index/CareerCard.vue'
import PaCard from '~/components/index/PaCard.vue'

export default {
  name: 'index',
  components: { CareerCard, PaCard },
  data () {
    return {
      CareerCards: [
        {
          img: '/image/companyLogo/logo-om.png',
          imgResponsive: false,
          style: { 'background-color': '#222944' },
          link: 'onemoment'
        },
        {
          img: '/image/companyLogo/logo-ateam.svg',
          imgResponsive: true,
          style: { 'background-color': '#02c1f7' },
          link: 'ateamventures'
        }
      ],
      paCards: [
        {
          'date': '2018.02 - 현재',
          'title': 'Women Techmakers KR 2018',
          'img': '/pa/wtm-logo.png',
          'contents': [
            '<strong>Women Techmakers KR 2018 오거나이저</strong>',
            '- 행사준비',
            '- 안내사이트 제작',
            '- <a href="https://wtm-korea-2018.firebaseapp.com/">https://wtm-korea-2018.firebaseapp.com/</a>'
          ]
        },
        {
          'date': '2017.08 - 현재',
          'title': 'DjangoCon KR 2018',
          'img': '/pa/djangocon-logo.png',
          'contents': [
            '<strong>DjangoCon KR 2018 오거나이저</strong>',
            '- 행사준비',
            '- 안내사이트 제작',
            '- <a href="https://djangokr.github.io/django.conf2018/">https://djangokr.github.io/django.conf2018/</a>'
          ]
        },
        {
          'date': '2017.07 - 현재',
          'title': 'vue-lunar-calendar',
          'img': '/pa/vue-lunar-calendar.png',
          'contents': [
            '<strong>개인 프로젝트</strong>',
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
          'img': '/pa/whlunar.png',
          'contents': [
            '<strong>개인 프로젝트</strong>',
            '- Swift library',
            '- <a href="https://github.com/KimWooHyun/WHLunarCalendar">https://github.com/KimWooHyun/WHLunarCalendar</a>',
            '- 한국 음력 달력 라이브러리',
            '- opensource'
          ]
        },
        {
          'date': '2017.12',
          'title': 'Do it! Vue.js',
          'img': '/pa/doit-vue-js.png',
          'contents': [
            '<strong>vue.js 관련 책 기술 검토 및 자문</strong>',
            '서명: Do it! Vue.js 입문서',
            '저자: 장기효',
            '대상 독자: 프레임워크를 다뤄보지 않은 웹 개발 입문자, Vue.js를 배우고 싶은 대학생 & 퍼블리셔 & 실무자',
            '책 내용: 프론트엔드 개발 프레임워크인 Vue.js 소개, 뷰 기술요소 학습, 뷰를 이용한 실전 애플리케이션 제작'
          ]
        },
        {
          'date': '2017.12',
          'title': 'Vue.js Korea Meetup3',
          'img': '/pa/vuejs-kr.png',
          'contents': [
            '<strong>Vue.js Korea 3번째 밋업 스태프 및 행사 총괄</strong>'
          ]
        },
        {
          'date': '2017.11',
          'title': 'GDG DevFest',
          'img': '/pa/devfest-logo.png',
          'contents': [
            '<strong>GDG DevFest 스태프</strong>',
            '- 안내사이트 제작 참여',
            '- <a href="https://devfest17-seoul.firebaseapp.com/">https://devfest17-seoul.firebaseapp.com/</a>'
          ]
        },
        {
          'date': '2017.09',
          'title': '9XD 해커톤',
          'img': '/pa/9xd.jpg',
          'contents': [
            '<strong>9XD 해커톤 "내꺼만들기, 내꺼톤" 참가</strong>',
            '- Vue.js 전파',
            '- 팀 주제: 불만',
            '- 본인의 불만을 말하고 피드백을 받을 수 있는 게시판 형태의 웹 서비스 "불만투고" 제작 및 배포'
          ]
        },
        {
          'date': '2017.08',
          'title': 'GDG Web Tech',
          'img': '/pa/gdgwt.png',
          'contents': [
            '<strong>GDG Web Tech 발표</strong>',
            '- Vue.js 관련 발표',
            '- <a href="https://www.slideshare.net/ssuserd3aacb/vue-js-79169830">https://www.slideshare.net/ssuserd3aacb/vue-js-79169830</a>'
          ]
        },
        {
          'date': '2017.08',
          'title': 'Vue.js Korea Meetup2',
          'img': '/pa/vuejs-kr.png',
          'contents': [
            '<strong>vue.js Korea 2번째 밋업 스태프</strong>'
          ]
        },
        {
          'date': '2017.07',
          'title': 'GDG Korea Campus summer party',
          'img': '/pa/gdg-campus-korea.svg',
          'contents': [
            '<strong>GDG Korea Campus 스태프</strong>',
            '- 행사 준비',
            '- 안내사이트 제작 참여',
            '- <a href="https://gdgsummerparty.firebaseapp.com">https://gdgsummerparty.firebaseapp.com</a>'
          ]
        }
      ]
    }
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
  width: 100%;
  height: 300px;
  text-align: center;
  padding: 0px 20px;
  h1 {
    color: #fff;
    font-size: 4rem;
  }
  h2 {
    color: #fff;
    font-size: 1.8rem;
    i {
      margin-right: 10px;
    }
  }
	background-color: #f58a94;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(341)'%3E%3Cstop offset='0' stop-color='%23f58a94'/%3E%3Cstop offset='1' stop-color='%23dcebc2'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.04'%3E%3Cpolygon fill='%23444' points='90%2C150 0%2C300 180%2C300'/%3E%3Cpolygon points='90%2C150 180%2C0 0%2C0'/%3E%3Cpolygon fill='%23AAA' points='270%2C150 360%2C0 180%2C0'/%3E%3Cpolygon fill='%23DDD' points='450%2C150 360%2C300 540%2C300'/%3E%3Cpolygon fill='%23999' points='450%2C150 540%2C0 360%2C0'/%3E%3Cpolygon points='630%2C150 540%2C300 720%2C300'/%3E%3Cpolygon fill='%23DDD' points='630%2C150 720%2C0 540%2C0'/%3E%3Cpolygon fill='%23444' points='810%2C150 720%2C300 900%2C300'/%3E%3Cpolygon fill='%23FFF' points='810%2C150 900%2C0 720%2C0'/%3E%3Cpolygon fill='%23DDD' points='990%2C150 900%2C300 1080%2C300'/%3E%3Cpolygon fill='%23444' points='990%2C150 1080%2C0 900%2C0'/%3E%3Cpolygon fill='%23DDD' points='90%2C450 0%2C600 180%2C600'/%3E%3Cpolygon points='90%2C450 180%2C300 0%2C300'/%3E%3Cpolygon fill='%23666' points='270%2C450 180%2C600 360%2C600'/%3E%3Cpolygon fill='%23AAA' points='270%2C450 360%2C300 180%2C300'/%3E%3Cpolygon fill='%23DDD' points='450%2C450 360%2C600 540%2C600'/%3E%3Cpolygon fill='%23999' points='450%2C450 540%2C300 360%2C300'/%3E%3Cpolygon fill='%23999' points='630%2C450 540%2C600 720%2C600'/%3E%3Cpolygon fill='%23FFF' points='630%2C450 720%2C300 540%2C300'/%3E%3Cpolygon points='810%2C450 720%2C600 900%2C600'/%3E%3Cpolygon fill='%23DDD' points='810%2C450 900%2C300 720%2C300'/%3E%3Cpolygon fill='%23AAA' points='990%2C450 900%2C600 1080%2C600'/%3E%3Cpolygon fill='%23444' points='990%2C450 1080%2C300 900%2C300'/%3E%3Cpolygon fill='%23222' points='90%2C750 0%2C900 180%2C900'/%3E%3Cpolygon points='270%2C750 180%2C900 360%2C900'/%3E%3Cpolygon fill='%23DDD' points='270%2C750 360%2C600 180%2C600'/%3E%3Cpolygon points='450%2C750 540%2C600 360%2C600'/%3E%3Cpolygon points='630%2C750 540%2C900 720%2C900'/%3E%3Cpolygon fill='%23444' points='630%2C750 720%2C600 540%2C600'/%3E%3Cpolygon fill='%23AAA' points='810%2C750 720%2C900 900%2C900'/%3E%3Cpolygon fill='%23666' points='810%2C750 900%2C600 720%2C600'/%3E%3Cpolygon fill='%23999' points='990%2C750 900%2C900 1080%2C900'/%3E%3Cpolygon fill='%23999' points='180%2C0 90%2C150 270%2C150'/%3E%3Cpolygon fill='%23444' points='360%2C0 270%2C150 450%2C150'/%3E%3Cpolygon fill='%23FFF' points='540%2C0 450%2C150 630%2C150'/%3E%3Cpolygon points='900%2C0 810%2C150 990%2C150'/%3E%3Cpolygon fill='%23222' points='0%2C300 -90%2C450 90%2C450'/%3E%3Cpolygon fill='%23FFF' points='0%2C300 90%2C150 -90%2C150'/%3E%3Cpolygon fill='%23FFF' points='180%2C300 90%2C450 270%2C450'/%3E%3Cpolygon fill='%23666' points='180%2C300 270%2C150 90%2C150'/%3E%3Cpolygon fill='%23222' points='360%2C300 270%2C450 450%2C450'/%3E%3Cpolygon fill='%23FFF' points='360%2C300 450%2C150 270%2C150'/%3E%3Cpolygon fill='%23444' points='540%2C300 450%2C450 630%2C450'/%3E%3Cpolygon fill='%23222' points='540%2C300 630%2C150 450%2C150'/%3E%3Cpolygon fill='%23AAA' points='720%2C300 630%2C450 810%2C450'/%3E%3Cpolygon fill='%23666' points='720%2C300 810%2C150 630%2C150'/%3E%3Cpolygon fill='%23FFF' points='900%2C300 810%2C450 990%2C450'/%3E%3Cpolygon fill='%23999' points='900%2C300 990%2C150 810%2C150'/%3E%3Cpolygon points='0%2C600 -90%2C750 90%2C750'/%3E%3Cpolygon fill='%23666' points='0%2C600 90%2C450 -90%2C450'/%3E%3Cpolygon fill='%23AAA' points='180%2C600 90%2C750 270%2C750'/%3E%3Cpolygon fill='%23444' points='180%2C600 270%2C450 90%2C450'/%3E%3Cpolygon fill='%23444' points='360%2C600 270%2C750 450%2C750'/%3E%3Cpolygon fill='%23999' points='360%2C600 450%2C450 270%2C450'/%3E%3Cpolygon fill='%23666' points='540%2C600 630%2C450 450%2C450'/%3E%3Cpolygon fill='%23222' points='720%2C600 630%2C750 810%2C750'/%3E%3Cpolygon fill='%23FFF' points='900%2C600 810%2C750 990%2C750'/%3E%3Cpolygon fill='%23222' points='900%2C600 990%2C450 810%2C450'/%3E%3Cpolygon fill='%23DDD' points='0%2C900 90%2C750 -90%2C750'/%3E%3Cpolygon fill='%23444' points='180%2C900 270%2C750 90%2C750'/%3E%3Cpolygon fill='%23FFF' points='360%2C900 450%2C750 270%2C750'/%3E%3Cpolygon fill='%23AAA' points='540%2C900 630%2C750 450%2C750'/%3E%3Cpolygon fill='%23FFF' points='720%2C900 810%2C750 630%2C750'/%3E%3Cpolygon fill='%23222' points='900%2C900 990%2C750 810%2C750'/%3E%3Cpolygon fill='%23222' points='1080%2C300 990%2C450 1170%2C450'/%3E%3Cpolygon fill='%23FFF' points='1080%2C300 1170%2C150 990%2C150'/%3E%3Cpolygon points='1080%2C600 990%2C750 1170%2C750'/%3E%3Cpolygon fill='%23666' points='1080%2C600 1170%2C450 990%2C450'/%3E%3Cpolygon fill='%23DDD' points='1080%2C900 1170%2C750 990%2C750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	background-position: center;
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
