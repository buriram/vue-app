<template>
  <div>
    <h1>Chat room</h1>
    <div>
      <v-text-field v-model="name" label="ชื่อ"/>
      <v-text-field v-model="text" label="ข้อความ"/>
      <v-btn @click="send">ส่ง</v-btn>
    </div>
    <ul>
      <li v-for="(m, idx) in msg" :key="idx">
        <b>{{ m.name }}</b> พูดว่า {{ m.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      text: '',
      lotto : '',
      msg: [
        {name: 'xxxx', text: 'Text'}
      ],
    }
  }, // data
  created() {
    this.$socket.subscribe('room39', this.onMsg)
    this.$socket.subscribe('lotto', this.onLotto)
  },
  beforeDestroy() {
    this.$socket.unsubscribe('lotto')
  },
  methods: {
    send() {
      this.$socket.publish('lotto', {
        num: this.num,
      })
    },
    onMsg(data) {
      this.msg.unshift(data)
      this.msg.splice(5)
    },
    onLotto(data) {
      console.log('lotto=', data)
      this.lotto = data
    },

  }, // methods
}
</script>
