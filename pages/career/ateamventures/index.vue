<template>
  <section>
    <section class="flex flex-jc-center flex-ai-center section-main">
      <div class="col-m-12 col-p-12">
        <h1>ATEAM VENTURES</h1>
        <h2>Free People's Creativity</h2>
      </div>
    </section>
    <section class="container section-info">
      <div class="col-m-12 col-p-12">
        <h1>회사 소개</h1>
        <p>3D Printer 공유 플랫폼 사이트 “ShapEngine” 을 서비스 중인 스타트업.</p>
      </div>
      <div class="col-m-12 col-p-12">
        <h1>서비스</h1>
        <h2>shapEngine</h2>
        <p>- 3D Printer를 보유한 사람과 3D Modeling 도면을 보유한 사람을 매칭해 주는 중개 플랫폼</p>
        <p>- <a href="https://shapengine.com/">https://shapengine.com/</a></p><br />
        <h2>creatable labs</h2>
        <p>- 자사 3D Printer 인 creatable 시리즈 판매 사이트</p>
        <p>- <a href="https://creatablelabs.com/">https://creatablelabs.com/</a></p>
      </div>
    </section>
    <section class="container">
      <div class="div-wrapper col-m-12 col-p-12">
        <section class="flex flex-jc-center flex-ai-center section-se col-m-12 col-p-12">
          <div class="col-m-10 col-p-4">
            <img src="~assets/image/companyLogo/logo-se.png" class="img-responsive"/>
          </div>
        </section>
        <h2 class="col-m-12 col-p-12">shapEngine 웹 서비스 제작</h2>
        <div class="col-m-12 col-p-12 div-info">
          <p>
            - 3D Printer 를 보유 한 사람이 프린터를 등록 할 수 있는 프로세스 개발<br />
            - Jinja2을 이용한 front-end 개발<br />
            - 기여도 : 25%<br />
            stack: Django, Jinja2, HTML5, CSS3, JavaScript
          </p>
        </div>
      </div>
      <div class="div-wrapper col-m-12 col-p-12">
        <h2 class="col-m-12 col-p-12">주문하는 사람 프로세스</h2>
        <video width="100%" height="auto" controls>
          <source src="~assets/video/se/sender.mp4" type="video/mp4">
        </video>
      </div>
      <div class="div-wrapper col-m-12 col-p-12">
        <h2 class="col-m-12 col-p-12">보내는 사람 프로세스</h2>
        <video width="100%" height="auto" controls>
          <source src="~assets/video/se/receiver.mp4" type="video/mp4">
        </video>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'index',
  layout: 'noFooter'
}
</script>

<style lang="less" scoped>
@import '~assets/css/color.less';

.section-main {
  height: 400px;
  background-color: #02c1f7;
  color: #ffffff;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
}

.section-se {
  height: 200px;
  background-color: #2fc1b6;
  margin-bottom: 40px;
}

.div-wrapper {
  margin: 60px 0px 0px 0px;
  video {
    padding: 10px 0px;
  }
}

.section-info {
  padding-top: 40px;
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

.div-info {
  margin: 10px 0px 0px 0px;
  p {
    font-size: 16px;
    line-height: 1.8;
  }
}

@media only screen and ( min-width : 768px ){
}
</style>
