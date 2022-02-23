<template>
  <div class="misc">
    <h1>Here you can find some random things I made for the site!</h1>
    <br><br><br>
    <h2>This is a simple API tool that can get some data from users on the website <a href="https://codeforces.com">Codeforces</a></h2>
    <div class="result-container" v-if="cfResponse=='OK'">
      <div class="cfdata" v-for="user in cfData" v-bind:key="user.id">
        <div class="mode-rating" v-if="option=='Rating'">
          <img :src="user.avatar" alt="profile">
          <h2 v-if="user.rating">Rating of {{user.handle}}: 
            <span class="rating" v-if="user.rank=='newbie'" style="color: #9e9ea7">{{user.rating}}</span>
            <span class="rating" v-else-if="user.rank=='pupil'" style="color: #148625">{{user.rating}}</span>
            <span class="rating" v-else-if="user.rank=='specialist'" style="color: #23aeba">{{user.rating}}</span>
            <span class="rating" v-else-if="user.rank=='expert'" style="color: #100cff">{{user.rating}}</span>
            <span class="rating" v-else-if="user.rank=='candidate master'" style="color: #b520b0">{{user.rating}}</span>
            <span class="rating" v-else-if="user.rank=='master' || user.rank=='international master'" style="color: #ff910c">{{user.rating}}</span>
            <span class="rating" v-else style="color: #ff0019">{{user.rating}}</span>
          </h2>
          <h2 v-else>Rating of {{user.handle}}: Unrated</h2>
        </div>
        <div class="mode-rank" v-else-if="option=='Rank'">
          <img :src="user.avatar" alt="profile">
          <h2 v-if="user.rank">Rank of {{user.handle}}: 
            <span class="rating" v-if="user.rank=='newbie'" style="color: #9e9ea7">{{user.rank}}</span>
            <span class="rating" v-else-if="user.rank=='pupil'" style="color: #148625">{{user.rank}}</span>
            <span class="rating" v-else-if="user.rank=='specialist'" style="color: #23aeba">{{user.rank}}</span>
            <span class="rating" v-else-if="user.rank=='expert'" style="color: #100cff">{{user.rank}}</span>
            <span class="rating" v-else-if="user.rank=='candidate master'" style="color: #b520b0">{{user.rank}}</span>
            <span class="rating" v-else-if="user.rank=='master' || user.rank=='international master'" style="color: #ff910c">{{user.rank}}</span>
            <span class="rating" v-else style="color: #ff0019">{{user.rank}}</span>
          </h2>
          <h2 v-else>Rank of {{user.handle}}: Unrated</h2>
        </div>
        <div class="mode-name" v-else-if="option=='Name'">
          <img :src="user.avatar" alt="profile">
          <h2>Name of {{user.handle}}: {{user.firstName}} {{user.lastName}}</h2>
        </div>
        <div class="mode-none" v-else>
          <h2>Please select an option to get data</h2>
        </div>
      </div>
    </div>
    <div class="result-container" v-else-if="cfResponse">
      <h2>Please enter a valid handle!</h2>
    </div>
    <div class="result-container" v-else>
      <h2>Enter a handle to search</h2>
    </div>
    <div class="innerf">
      <v-select class="dropdown" placeholder="" v-model="option" :options="['Rating', 'Rank', 'Name']"  />
      <form v-on:submit.prevent="submitForm">
        <br>
        <h2>Handle:</h2>
        <br>
        <div class="form-group">
            <input type="text" class="form-control" id="handle" placeholder="" v-model="form.handle">
        </div>
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Misc',
  data() {
      return {
        cfResponse: '',
        cfData: [],
        form: {
          handle: ''
        },
        option: 'Rating',
      };
    },
    methods: {
      getData() {
        if (this.form.handle!="") {
          fetch(`https://codeforces.com/api/user.info?handles=${this.form.handle}`)
          .then((response) => response.json())
          .then((data) => {
            this.cfResponse = data.status;
            if (this.cfResponse=="OK") {
              this.cfData = data.result;
            }
          });
        }
        
      },
      submitForm() {
        if (!this.form.handle) {
          alert("Please enter a handle");
        }
        else {
          this.getData();
          this.form.handle = "";
        } 
      },
    },
    created() {
      this.getData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.misc {
    margin: 3vh;
}

.result-container {
    border: 3px solid var(--border);
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    padding-bottom: 30px;
    margin-top: 10vh;
    /*margin: 0;*/
    position: relative;
    /* top: 40%; */
    /* left: 50%; */
    /* -ms-transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -50%); */
    background-color: var(--footer);
    transition: background-color 2s, border 2s;
}

.innerf {
    border: 3px solid var(--border);
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    padding-bottom: 30px;
    margin-top: 5vh;
    /*margin: 0;*/
    position: relative;
    /* top: 40%; */
    /* left: 50%; */
    /* -ms-transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -50%); */
    background-color: var(--footer);
    transition: background-color 2s, border 2s;
}

input {
    border: #000;
    text-align: center;
    font-family: monospace;
    box-sizing: border-box;
    font-size: 20px;
}
input[type=text] {
    width: 70%;
    padding: 12px 20px;
    /*margin: 8px 0;*/
    border-radius: 10px;


}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type=number] {
    /*width: 7%;*/
    padding: 12px 20px;
    /*margin: 8px 0;*/
    border-radius: 10px;
    -moz-appearance: textfield;
}

input[type=submit] {
    /*width: 15%;*/
    /*font-size: 2vw;*/
    padding: 12px 20px;
    margin: 8px 0;
    margin-top: 30px;
    border-radius: 10px;
    background-color: var(--button);
    color: var(--button-text);
    border: 1px solid #111;
    transition: background-color 2s, color 2s;
}

input[type=submit]:hover {
    cursor: pointer;
    text-transform: lowercase;
    background-color: var(--button-hover);
    color: var(--button-hover-text);
    border: 1px solid var(--button-hover-text);
    /* transition: color 0s, background-color 0s; */
}

.dropdown {
    width: 30vw;
    position: relative;
    border: 1px solid #3a47f8;
    border-radius: 5px;
}

</style>
