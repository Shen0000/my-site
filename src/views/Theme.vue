<template>
  <div class="theme">
    <div v-bind:class="picked">
        <div class="color-palettes">
        <input
            v-for="color in colors"
            type="radio"
            class="input-color"
            :class="color.value"
            :value="color.value"
            :key="color.index"
            v-model="picked"
        />
        </div>

        <transition name="move-down">
        <card class="box blue" v-if="picked === 'blue'"></card>
        <card class="box light" v-else-if="picked === 'light'"></card>
        <card class="box dark" v-else-if="picked === 'dark'"></card>
        <card class="box orange" v-else></card>
        </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card.vue";

export default {
  name: 'Theme',
  components: {
      Card,
  },
  data() {
    return {
      picked: this.$picked,
      colors: this.$colors,
    }
  },
  methods: {
    getColor(picked) {
      this.$picked = picked;
    },
  },
}
</script>

<style scoped>
.box {
  min-height: 80vh;
  width: 100%;
  background-color: var(--background);
  position: absolute;
  /* font-family: 'Varela Round', sans-serif; */
}

.blue {
  --color: #081659;
  --color-secondary: #000121;
  background:#078fe9;
  --background: #dde3e7;
  --card-color: #081ab6;
  --text-color-primary: black;
  --text-color-success: #007a46;
  --text-color-error: #c83825;
  --text-color-warning: #ff6600;
}

.light {
  --color: #112d32;
  background:#ECEFF1;
  --background: #ECEFF1;
  --card-color: #f7f7f7;
  --text-color-primary: black;
  --text-color-success: #007a46;
  --text-color-error: #c83825;
  --text-color-warning: #ff6600;
}
.dark {
  --color: #c2c2c2;
   background: #505050;
  --background: #505050;
  --card-color: #323232;
  --text-color-primary: white;
  --text-color-success: #1eb980;
  --text-color-error: #ff6859;
  --text-color-warning: #ffcf44;
  
}
.orange {
  --color: #8e3d35;
  background: #edc7b7;
  --background: #edc7b7;
  --card-color: #f9f3f0;
  --text-color-primary: #8e3d35;
  --text-color-success: #008b52;
  --text-color-error: #e44838;
  --text-color-warning: #ff9900;
}
.background-style {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s;
}
.color-palettes {
  display: flex;
  padding: 30px;
}
input[type="radio"] {
  appearance: none;
}
.input-color {
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid white;
}
.text {
  color:var(--color);
  font-size: 28px;
  transition: all 2s;
}

.move-down-enter-active {
  animation: 3s down-enter;
}
.move-down-leave-active {
  animation: 3s down-leave;
}
@keyframes down-enter {
  0% {
    clip-path: inset(0 0 100% 0);
}
  100% {
    clip-path: inset(0);
  }
}
@keyframes down-leave {
  0% {
    clip-path: inset(0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
}
</style>