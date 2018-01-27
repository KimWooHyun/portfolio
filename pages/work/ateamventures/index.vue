<template>
  <section>
    <section class="flex flex-jc-center flex-ai-center section-main">
      <div class="col-m-10 col-p-4">
        <img src="~assets/image/companyLogo/logo-se.png" class="img-responsive"/>
      </div>
    </section>
    <section class="container">
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
  background-color: #2fc1b6;
  height: 400px;;
}

.div-wrapper {
  margin: 60px 0px 60px 0px;
  video {
    padding: 10px 0px;
  }
}

@media only screen and ( min-width : 768px ){
}
</style>
