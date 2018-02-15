<template>
  <div class="flip-container">
    <div class="flipper">
      <div class="flex flex-wrap flex-ai-center flex-jc-center front">
        <img :src="require('~/assets/image' + img)" class="thumbnail"/>
        <div class="front-title flex flex-wrap flex-ai-center">
          <div class="col-m-12 col-p-12">
            <p>{{title}}</p>
            <p v-html="contents[0]"></p>
          </div>
        </div>
      </div>
      <figure class="flex flex-wrap flex-ai-center back">
        <div>
          <p class="col-m-12 col-p-12">{{date}}</p>
          <h2 class="col-m-12 col-p-12">{{title}}</h2>
          <div class="col-m-12 col-p-12 div-contents">
            <div v-for="content in contents" :key="content.id" v-html="content"></div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pa-card',
  props: {
    img: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    contents: {
      type: Array,
      required: true
    }
  } 
}
</script>

<style lang="less" scoped>
.flip-container {
	perspective: 1000px;
}
.flip-container:hover .flipper, .flip-container.hover .flipper {
  transform: rotateY(180deg);
  transition: transform 0.5s ease;
}
.flipper {
  position: relative;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  margin: 0px 10px 20px 10px;
  min-height: 300px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease .25s;
}
figure {
  min-height: 300px;
  padding: 20px;
  .div-contents {
    margin-top: 10px;
  }
}
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
}
.front {
	z-index: 2;
  transform: rotateY(0deg);
  .front-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(180deg,hsla(0%,0%,100%,0),#e5e5e5);
    p {
      padding: 0px 20px;
      color: #444;
      font-size: 16px;
    }
  }
}
.back {
	transform: rotateY(180deg);
}
.thumbnail {
  width: auto;
  max-width: 100%;
  max-height: 100%;
}

@media only screen and ( min-width : 768px ){
}
</style>
