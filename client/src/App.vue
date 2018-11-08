<template>
  <div id="app" class="app">
    <div
      class="background"
      :style="{ backgroundImage: `url(${imgUrl})` }"
    ></div>
    <div class="foreground">
      <div class="header">
        <h1 class="title">
          Let's build this thing from the ground up!
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      imgUrl: 'http://placekitten.com/500/600',
    };
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `src(${this.imgUrl})`,
      };
    },
  },

  mounted() {
    this.$socket.on('NEW_IMAGE', (image) => {
      console.log(process.env);

      this.imgUrl = `${process.env.VUE_APP_TIMELAPSE_URL}${image}`;
    });
  }
};
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,400');

*
  padding: 0
  margin: 0
  box-sizing: border-box

html, body
  font-size: 16px

.app
  width: 100vw
  height: 100vh
  overflow: hidden

.background
  width: 100vw
  height: 100vh
  overflow: hidden
  background-position: center
  background-size: cover

.foreground
  position: absolute
  top: 0
  width: 100vw
  background-color: rgba(#bf242a, .5)
  display: flex;
  align-items: center;
  justify-content: center;

.title
  color: #fff
  font-family: 'Roboto', sans-serif
  font-weight: 100
  font-size: 3rem
</style>
