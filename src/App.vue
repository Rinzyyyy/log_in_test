<script setup>
import { ref, computed, watch } from 'vue'
import data from './assets/data.json'

const account = ref(null)
const password = ref(null)
const wrongHint = ref('hide')
const clock = ref(Date.now())
const mode = ref('left')
const modeChcked = ref(false)
const back = ref(null)
const button = ref(null)
const a = ref(null)
const p = ref(null)
const lang = ref('en')

let enter = data[lang.value].account
let pass_word = data[lang.value].password
let forget = data[lang.value].forgot
let log_in = data[lang.value].login
let or = data[lang.value].or
let signupP = data[lang.value].have
let signupA = data[lang.value].signUp
let sucess = data[lang.value].alert
let err = data[lang.value].error

watch(lang, (newlang) => {
  enter = data[newlang].account
  pass_word = data[newlang].password
  forget = data[newlang].forgot
  log_in = data[newlang].login
  or = data[newlang].or
  signupP = data[newlang].have
  signupA = data[newlang].signUp
  sucess = data[newlang].alert
  err = data[newlang].error
})

setInterval(() => {
  clock.value = Date.now()
}, 1000)

const now = computed(() => {
  return new Date(clock.value).toString().slice(0, -8)
})

function accese() {
  if (account.value === 'abc123' && password.value === 'abc123') {
    wrongHint.value = 'hide'
    alert(sucess)
  } else {
    wrongHint.value = 'show'
    account.value = ''
    password.value = ''
  }
}

function modeSwitch() {
  modeChcked.value = !modeChcked.value
  if (!modeChcked.value) {
    mode.value = 'left'
    back.value = ''
    button.value = ''
    a.value = ''
    p.value = ''
  } else {
    mode.value = 'right'
    back.value = 'blackmode_back'
    button.value = 'blackmode_button'
    a.value = 'blackmode_a'
    p.value = 'blackmode_p'
  }
}
</script>

<template>
  <div class="back" :class="back">
    <nav>
      <label>Mode</label>
      <button
        :class="button"
        type="button"
        role="switch"
        :aria-checked="modeChcked"
        class="switch"
        @click="modeSwitch"
      >
        <span :class="mode">Ｏ</span>
      </button>

      <select v-model="lang">
        <option value="en">US</option>
        <option value="cn">中文</option>
      </select>
    </nav>
    <header>
      <img class="logo" src="./assets/logo.svg" alt="logo" />
      <p class="time">{{ now }}</p>
    </header>

    <main>
      <section>
        <input v-model="account" type="text" :placeholder="enter" />
        <input v-model="password" type="text" :placeholder="pass_word" />
        <p :class="wrongHint">{{ err }}</p>
        <a href="#" :class="a">{{ forget }}</a>
      </section>
      <button @click="accese" :class="button">{{ log_in }}</button>
      <div>
        <hr />
        <p :class="p">{{ or }}</p>
        <hr />
      </div>
      <div>
        <p :class="p">{{ signupP }}</p>
        <a :class="a">{{ signupA }}</a>
      </div>
    </main>
  </div>
</template>

<style scoped>
* {
  transition: all 0.5s ease-in-out;
}
.time {
  transition: none;
}
.back {
  display: block;
  height: 100vh;
}

label {
  padding-left: 1rem;
}
header,
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
img {
  padding-bottom: 1rem;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(224, 222, 219, 0.3);
  width: 20rem;
  padding: 1rem 1.5rem;
}
.logo {
  height: 9vh;
}
input,
button {
  margin: 0.3rem;
  width: 20rem;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 0.05rem solid rgb(158, 157, 157);
  background-color: rgba(235, 240, 243, 0.8);
}
button {
  margin: 0.6rem;
  width: 5rem;
  background-color: rgb(241, 237, 237);
  color: rgb(113, 115, 116);
}
a {
  text-decoration: none;
  margin: 0.3rem;
  color: rgb(92, 162, 174);
  align-self: flex-start;
}
hr {
  width: 10rem;
  height: 0rem;
  border: 0.05rem solid rgb(217, 224, 228);
  margin: 0.5rem;
}
div {
  height: 2rem;
  display: flex;
  align-items: center;
  color: rgb(113, 115, 116);
}
.hide {
  display: none;
}
.show {
  display: block;
  color: red;
  align-self: flex-start;
  margin: 0 0 1rem 0;
}
.switch {
  width: 2.5rem;
  padding: 0.01rem;
  border-radius: 20px;
}
.right {
  font-size: 1rem;
  padding-right: 2rem;
}
.left {
  font-size: 1rem;
  padding-left: 1.2rem;
}
select {
  margin-left: 0.5rem;
  width: 3.5rem;
  height: 1.2rem;
  padding: 0rem 0.5rem;
  font-size: 0.8rem;
  background-color: rgb(223, 218, 218);
  border: none;
  border-radius: 0.5rem;
}
.blackmode_back {
  background-color: rgb(32, 31, 31);
  color: aliceblue;
}
.blackmode_p {
  color: aliceblue;
}
.blackmode_a {
  color: rgb(82, 232, 182);
}
.blackmode_button {
  background-color: rgb(62, 62, 62);
  color: aliceblue;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(161, 158, 158);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(161, 158, 158);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(161, 158, 158);
}

@media (max-width: 300px) {
  section {
    width: 18rem;
  }
  input {
    width: 15rem;
  }
  .time {
    text-align: center;
  }
}
</style>
