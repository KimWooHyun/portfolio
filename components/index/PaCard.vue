<template>
  <figure class="flex flex-wrap flex-ai-center">
    <div>
      <p class="col-m-12 col-p-12">{{date}}</p>
      <h2 class="col-m-12 col-p-12">{{title}}</h2>
      <div class="col-m-12 col-p-12 div-contents">
        <div v-for="content in contents" :key="content.id" v-html="content"></div>
      </div>
    </div>
  </figure>
</template>

<script>

export default {
  name: 'pa-card',
  props: {
    logoImg: {
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
figure {
  min-height: 300px;
  margin: 0px 10px 20px 10px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
}
.div-contents {
  margin-top: 10px;
}

@media only screen and ( min-width : 768px ){
}
</style>
