<template>
  <!-- <div class="chat">
    <div class="chat-container">
      <div class="messages-container">
        <div v-for="chat in chats" :key="chat">
          [{{ chat.sessionId }}]: {{ chat.message }}
        </div>
      </div>

      <hr />

      <div class="message-input">
        <form @submit.prevent="sendMessage">
          <label>Message:</label>
          <input v-model="messageText" @input="emitTyping" />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <v-container
      class="fill-height pa-0 "
    >
      <v-row class="no-gutters elevation-4">
        <v-col
          cols="auto"
          class="flex-grow-1 flex-shrink-0"
        > -->
          <v-responsive
            class="overflow-y-hidden fill-height"
            height="500"
          >
            <v-card
              flat
              class="d-flex flex-column fill-height"
            >
              <v-card-title>
                In-call Messages
              </v-card-title>
              <v-card-text class="flex-grow-1 overflow-y-auto">
                <template v-for="chat in chats" :key="chat">
                  <div v-if="chat.roomId === roomId" :class="chat.sessionId === sessionId ? 'd-flex justify-end' : 'd-flex justify-start'">
                    <div>
                      <div class="sender d-flex">
                        <h4 class="mr-2">{{ chat.sessionId }}</h4>
                        <span class="text-caption text-disabled">{{ dateTime(chat.creationDate) }}</span>
                      </div>
                      <div :class="chat.sessionId === sessionId ? 'message-content d-flex justify-end' : 'message-content d-flex justify-start'">
                        <v-menu offset-y>
                          <template v-slot:activator="{ on }">
                            <v-hover
                              v-slot:default="{ hover }"
                            >
                              <v-chip
                                :color="chat.sessionId === sessionId ? 'primary' : ''"
                                dark
                                style="height:auto;white-space: normal;"
                                class="pa-4 mb-2"
                                v-on:load="on"
                              >
                                {{ chat.message }}
                                <!-- <sub
                                  class="ml-2"
                                  style="font-size: 0.5rem;"
                                >{{ msg.created_at }}</sub> -->
                                <v-icon
                                  v-if="hover"
                                  small
                                >
                                  expand_more
                                </v-icon>
                              </v-chip>
                            </v-hover>
                          </template>
                        </v-menu>
                      </div>
                    </div>
                  </div>
                </template>
              </v-card-text>
              <div v-if="typingDisplay">{{ typingDisplay }}</div>
              <v-card-text class="align-end flex-shrink-1">
                <v-text-field
                  v-model="messageText"
                  label="Type a message"
                  type="text"
                  no-details
                  outlined
                  append-inner-icon="mdi-send"
                  @keyup.enter="sendMessage"
                  @click:append-inner="sendMessage"
                  @input="emitTyping"
                  hide-details
                />
              </v-card-text>
            </v-card>
          </v-responsive>
        <!-- </v-col>
      </v-row>
    </v-container>
  </div> -->
</template>

<script>
import { io } from 'socket.io-client';
import moment from 'moment';

const socket = io('https://livestream-backend-98b8.onrender.com');

export default {
    props: {
        roomId:{
            type:String
        },
        sessionId:{
            type:String
        }
    },
  data() {
    return {
      chats: [],
      messageText: '',
      joined: true,
      name: '',
      typingDisplay: '',
    };
  },
  created() {
    socket.on('typing', ({ sessionId, roomId, isTyping }) => {
      if (isTyping && roomId === this.roomId) {
        this.typingDisplay = `${sessionId} is typing...`;
      } else {
        this.typingDisplay = '';
      }
    }),
    socket.on('chat', ({ chats}) => {
      this.chats = chats;
    })
  },
  watch: { 
    roomId: function(newVal) { // watch it
      socket.emit('findAllChat', { roomId: newVal }, (response) => {
        console.log('chats', response)
        this.chats = response;
      });
    },
  },
  methods: {
    // join() {
    //   socket.emit('join', { sessionId: this.name }, () => {
    //     this.joined = true;
    //   });
    // },
    sendMessage() {
      socket.emit('chat', { roomId: this.roomId, sessionId: this.sessionId, message: this.messageText }, (response) => {
        this.chats = response;
        this.messageText = '';
      });
    },
    emitTyping() {
      socket.emit('typing', { isTyping: true, sessionId: this.sessionId, roomId: this.roomId });
      setTimeout(() => {
        socket.emit('typing', { isTyping: false, sessionId: this.sessionId, roomId: this.roomId });
      }, 2000);
    },
    dateTime(value) {
      return moment(value).format('LT');
    },
  },
};
</script>

<style>
.chat {
  padding: 20px;
  height: 100vh;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.message-container {
  flex: 1;
}
</style>