<template>
  <Header />
  <v-container>
    <div class="widget-wrapper">
      <chat-widget widgetId='c415d07f-ca1b-4684-acc0-e79c0f0b6252'></chat-widget>
    </div>
  </v-container>
</template>

<script>
// import ChatWidget from 'chatwidget/ChatWidget'
import Header from '../layouts/Header.vue'

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    // ChatWidget,
    Header
  }
};
</script>

<style scoped>
.widget-wrapper {
  position: absolute;
  right: 30px;
  bottom: 30px;
}
</style>