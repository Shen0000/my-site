<template>
  <div id="app" class="main-container" v-bind:class="picked">
    <div id="nav">
      <div class="color-palettes">
        <router-link to="/" class="nav-link" style="padding-left 10px">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <!-- <router-link to="/academics" class="nav-link">Academics</router-link> -->
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/cs" class="nav-link">CS</router-link>
        <!-- <router-link to="/theme" class="nav-link">Theme</router-link> -->
        <router-link to="/blogs" class="nav-link">Blogs</router-link>
        <router-link to="/misc" class="nav-link">Misc</router-link>
        <h2 style="padding-left: 20px; color: var(--text-color-primary); transition: all 2s;">Choose a theme: </h2>
        <input
            v-for="color in colors"
            type="radio"
            class="input-color"
            :class="color.value"
            :value="color.value"
            :key="color.index"
            v-model="picked"
            style="margin-left: 20px;"
        />
        </div>
    </div>
    <body>
      <router-view/>
    </body>
    <footer>
      <!-- <h1 style="color: rgb(255, 255, 255)">Hello World Footer</h1> -->
      <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="mailto: bshen.324@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com/shen0000" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://codeforces.com/profile/bshen324" target="_blank"><i class="fas fa-laptop-code" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://www.facebook.com/brendan.shen.31/" target="_blank"><i class="fab fa-facebook square" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://www.linkedin.com/in/brendan-shen-642b79230/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
          </li>
      </ul>
      
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colors: [
                {id: 1, value: "blue"},
                {id: 2, value: "light"},
                {id: 3, value: "dark"},
                {id: 4, value: "neon"},
            ],
            picked: "blue",
        }
    },
    mounted() {
      console.log('App Mounted');
      if (localStorage.getItem('picked'))
        this.picked = localStorage.getItem('picked');
    },
    watch: {
      picked: {
        handler() {
          console.log('Theme changed!');
          localStorage.setItem('picked', this.picked);
        },
        deep: true,
      },
    },
}
</script>

<style>

* {
    margin: 0;
}

body {
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    min-height: 100vh;
    /*the above is*/
    color: var(--text-color-primary);
    background-color: var(--body);
    transition: background-color 2s, color 2s;
}

body::-webkit-scrollbar {
    display: none;
}

#app {
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(207, 204, 204);
    width:100%;
    margin: 0;
    padding: 0;
    height: 100%;
}

#type {
    margin-left: 5px;
    border-right: 0.05em solid;
    animation: caret 1s steps(1) infinite;
    color: #111;
}

@keyframes caret {
    50% {
        border-color: transparent;
    }
}

#nav {
    padding: 15px;
    text-align: left;
    background-color: var(--nav);
    vertical-align: middle;
    display: table;
    width: 100%;
    transition: all 2s;
}


#nav a {
    font-weight: bold;
    vertical-align: middle;
    color: var(--nav-link);
    transition: color 2s;
}

#nav a:hover {
    opacity:0.8;
}

#nav a.router-link-exact-active {
    color: var(--nav-link-exact);
    transition: color 2s;
}

.logo {
    height: 75px;
    width: 75px;
    margin-left: 10px;
    transition: transform 250ms ease-in-out;
}
.main-container {
    /*min-height: 100vh;*/
    overflow: show;
    display: block;
    position: relative;
    margin: 0;
}
.nav-link {
    font-size: 18px;
    text-decoration: none;
    transition: transform 250ms ease-in-out;
    vertical-align: middle;
    /*border: 1px solid #000000;*/
    padding-left: 20px;
}

@media(max-width: 400px) {
    .nav-link {
        font-size: 12px;
    }
}

/*.nav-link_about {
    font-size: 18px;
    text-decoration: none;
    transition: transform 250ms ease-in-out;
    vertical-align: middle;
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
}*/


.nav-link:hover {
	transform: scale(1.1);
}

footer {
	background-color: var(--footer);
    /* padding: 3vw; */
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 15%;
    width: 100%;
    transition: all 2s;
}

.footer-text {
	font-size: 50px;
	color: #272525;
}

.logo:hover {
	opacity: 0.8;
	transform: scale(1.1);
}

.social-list__link:focus,
.social-list__link:hover {
	opacity: .8;
	outline: none;

}

.social-list__item:hover {
	transform: scale(1.1);

}

.social-list {
	list-style: none;
	display: flex;
	justify-content: center;
	margin: 2em 0;
	padding: 0;

}

.social-list__item {
	transition: transform 250ms ease-in-out;
	margin: 0 .5em;
}

.social-list__link {
	font-size: 40px;
	color: var(--social);
	padding: .5em;
    transition: color 2s;
}

.title {
    padding-top: 3vh;
    padding-bottom: 3vh;
}

.blue {
  --color: #081659;
  --color-secondary: #9f07e6;
  --nav: rgb(13, 15, 133);
  --nav-link: #4db8ff;
  --nav-link-exact: #02f7ff;
  --body: #081659;
  --footer: #000121;
  --social: #57ddff;
  --border: #3a47f8;
  --button: #23a7ff;
  --button-text: black;
  --button-hover: rgb(9, 6, 151);
  --button-hover-text: #2a50fa;
  background:rgb(13, 15, 133);
  --background: #dde3e7;
  --text-color-primary: rgb(255, 255, 255);

  --vs-controls-color: #0513db;
  --vs-border-color: #0513db;

  --vs-dropdown-bg: var(--footer);
  --vs-dropdown-color: var(--text-color-primary);
  --vs-dropdown-option-color: var(--text-color-primary);

  --vs-selected-bg: #240c7c;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #192c80;
  --vs-dropdown-option--active-color: #51b1f1;
}

.light {
  --color: #112d32;
  --color-secondary: #92ee68;
  --nav: rgb(240, 240, 175);
  --nav-link: #6d6202;
  --nav-link-exact: #e2a115;
  --body: #fffcd6;
  --footer: #fff99f;
  --social: #614002;
  --border: #ffd665;
  --button: #ece6b1;
  --button-text: black;
  --button-hover: rgb(165, 161, 137);
  --button-hover-text: #f0c871;
  background:rgb(240, 240, 175);
  --background: #ECEFF1;
  --text-color-primary: #6d6202;

  --vs-controls-color: #db9209;
  --vs-border-color: #db9209;

  --vs-dropdown-bg: var(--footer);
  --vs-dropdown-color: var(--text-color-primary);
  --vs-dropdown-option-color: var(--text-color-primary);

  --vs-selected-bg: #c0810b;
  --vs-selected-color: #db9209;

  --vs-search-input-color: #db9209;

  --vs-dropdown-option--active-bg: #f1eb8d;
  --vs-dropdown-option--active-color: #db9209;
}
.dark {
  --color: #c2c2c2;
  --color-secondary: #0a0a0a;
  --nav: #323232;
  --nav-link: #858585;
  --nav-link-exact: #c0bcbc;
  --body: #505050;
  --footer: #2e2e2e ;
  --social: #c2c2c2;
  --border: #b1b1b1;
  --button: #807e7d;
  --button-text: rgb(0, 0, 0);
  --button-hover: rgb(151, 151, 150);
  --button-hover-text: #ffffff;
   background: #323232;
  --background: #505050;
  --text-color-primary: #c2c2c2;
  
  --vs-controls-color: #a3a2a5;
  --vs-border-color: #c4c3ca;

  --vs-dropdown-bg: var(--footer);
  --vs-dropdown-color: var(--text-color-primary);
  --vs-dropdown-option-color: var(--text-color-primary);

  --vs-selected-bg: #928e9e;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #413f47;
  --vs-dropdown-option--active-color: #eeeeee;
}
.neon {
  --color: #8e3d35;
  --color-secondary: red;
  --nav: #252525;
  --nav-link: #a10ae7;
  --nav-link-exact: #ee37cf;
  --body: #6930C3;
  --footer: #2f1544;
  --social: #80FFDB;
  --border: #eb7a39;
  --button: #80FFDB;
  --button-text: rgb(0, 0, 0);
  --button-hover: #6930C3;
  --button-hover-text: #64DFDF;
   background: #64DFDF;
  --background: #f80000;
  --text-color-primary: #64DFDF;

  --vs-controls-color: #664cc3;
  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;
  --vs-dropdown-color: #cc99cd;
  --vs-dropdown-option-color: #cc99cd;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #eeeeee;

  --vs-search-input-color: #eeeeee;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #eeeeee;
}
.color-palettes {
  display: flex;
  /* justify-content: right; */
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
    transition: all 2s;
}

.router-link {
    justify-content: center;
}

</style>
