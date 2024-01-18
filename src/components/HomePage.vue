<template>
  <Header />
  <v-container>
    <div class="widget-wrapper">
      <ChatWidget widgetId='c415d07f-ca1b-4684-acc0-e79c0f0b6252'></ChatWidget>
    </div>
  </v-container>
</template>

<script>
// import ChatWidget from 'chatwidget/ChatWidget'
import Header from '../layouts/Header.vue'
import ChatWidget from 'chatwidget/ChatWidget'

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