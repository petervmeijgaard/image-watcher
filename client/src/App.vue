<template>
  <div id="app" class="app">
    <div
      class="background"
      :style="{ backgroundImage: `url(${imageUrl})` }"
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
  /**
   * The name of the application.
   */
  name: 'ImageWatcher',

  /**
   * The state of this component.
   *
   * @returns {Object} The View-Model.
   */
  data() {
    return {
      imageUrl: 'http://placekitten.com/500/600',
    };
  },

  /**
   * Will be fired when the component is mounted.
   */
  mounted() {
    this.$socket.on('NEW_IMAGE', (file) => {
      const image = new Image();
      image.src = `${process.env.VUE_APP_TIMELAPSE_URL}${file}`;
      image.onload = () => {
        this.imageUrl = image.src;
      };
    });
  }
};
</script>
<style lang="stylus">
@require '~normalize.css';

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
  z-index: 999
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
