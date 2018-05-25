2018.05.23 วันพุธ
08:52 saknarak เข้าร่วมกลุ่ม
08:52 saknarak สติกเกอร์
08:53 ..\\N~A~M//.. เข้าร่วมกลุ่ม
08:54 pocky Pre-Test Native Script และ Vue.js
https://goo.gl/forms/0mvEFqY0HzsIQgiM2
08:56 Attapol เชิญ somrak ให้เข้าร่วมกลุ่ม
08:56 somrak เข้าร่วมกลุ่ม
08:58 สมิทธ์ สุขขี เข้าร่วมกลุ่ม
09:01 Sirikanya95 Pre-Test Native Script และ Vue.js
https://goo.gl/forms/0mvEFqY0HzsIQgiM2
09:01 Nutjaja^__^ เข้าร่วมกลุ่ม
09:01 Sirikanya95 เขียนโน้ตใหม่
09:02 pocky เขียนโน้ตใหม่
09:03 Nutjaja^__^ เชิญ Tawatchai Sakate ให้เข้าร่วมกลุ่ม
09:03 TEERA BINKASEM เข้าร่วมกลุ่ม
09:05 Tawatchai Sakate เข้าร่วมกลุ่ม
09:05 Sirikanya95 เชิญ Kruking ให้เข้าร่วมกลุ่ม
09:14 pocky เขียนโน้ตใหม่
09:15 ฐารรรฎร #กัปตันฐา# สติกเกอร์
09:19 oak เข้าร่วมกลุ่ม
09:23 saknarak http://bit.ly/nodejs_vuejs_workshop
09:35 saknarak https://github.com/saknarak/vue-app
10:13 pocky เปลี่ยนรูปโปรไฟล์กลุ่ม
11:12 pocky สร้างอัลบั้ม "2018/05/23 #1"
11:26 saknarak VS Code
- install Vue.js Extension Pack
- reload
- disable Vue.js Extension Pack [only]
- disable Auto Rename Tag
- reload
11:28 oak เขียนโน้ตใหม่
11:40 saknarak <template>
  <div>
    <h1>About <i>{{ name }}</i></h1>
    <h2>age <b>{{ age }}</b></h2>
  </div>
</template>
11:41 saknarak <template>
  <div>
    <h1>About <i>{{ name }}</i></h1>
    <h2>age <b>{{ age }}</b></h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Somsak2',
      age: 25,
    }
  },
}
</script>
11:42 saknarak <input type="text" value="name">
11:51 saknarak <template>
  <div>
    <h1>About <i>{{ name.toUpperCase() }}</i></h1>
    <h2>age <b>{{ age * 2 }}</b></h2>
    <input :value="name" type="text"><br>
    <input v-model="name" type="text">
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Somsak2',
      age: 25,
    }
  },
}
</script>
12:30 TEERA BINKASEM อ.พรชัย
12:30 TEERA BINKASEM ครับ
12:40 DarkShadow คัฟ
12:40 DarkShadow ว่าไง
12:41 DarkShadow @TEERA BINKASEM หลังไมค์ ครั
12:41 DarkShadow บ
12:49 ฐารรรฎร #กัปตันฐา# หลังไมค์ก็ไม่ดังสิครับ
13:11 Sarawut Chaw เชิญ SARA ให้เข้าร่วมกลุ่ม
13:11 SARA เข้าร่วมกลุ่ม
13:12 saknarak <template>
  <div>
    <h1>About <i>{{ upperName }}</i></h1>
    <h2>age <b>{{ age * 2 }}</b></h2>
    <input :value="name" type="text"><br>
    <input v-model="name" type="text"><br>
    <input v-model="name" type="text">
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Somsak Lim',
      age: 25,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
  },
}
</script>
13:18 saknarak <template>
  <div>
    <h1>About <i>{{ newName }}</i></h1>
    <h2>age <b>{{ age * 2 }}</b></h2>
    <input :value="name" type="text"><br>
    <input v-model="name" type="text"><br>
    <input v-model="name" type="text">
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Somsak Lim',
      age: 25,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
    newName() {
      var tmp = this.name.split(' ')
      if (tmp.length === 1) {
        return this.name
      }
      return tmp[0] + ' ' + tmp[1].substr(0, 1)
    },
  },
}
</script>
13:25 saknarak <template>
  <div>
    <h1>About <i>{{ newName }}</i></h1>
    <h2>age <b>{{ age * 2 }}</b></h2>
    <input :value="name" type="text"><br>
    <input v-model="name" type="text"><br>
    <input v-model="name" type="text"><br>
    <button @click="doSave">SAVE</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Somsak Lim',
      age: 25,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
    newName() {
      var tmp = this.name.split(' ')
      if (tmp.length === 1) {
        return this.name
      }
      return tmp[0] + ' ' + tmp[1].substr(0, 1)
    },
  },
  methods: {
    doSave() {
      this.name += '*'
    },
  },
}
</script>
