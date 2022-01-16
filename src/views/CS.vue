<template>
  <div class="CS">
    <div class="head">
        <h1 class="title">Welcome to my CS page!</h1>
        <h2>Here you can find all things about my journey in computer science</h2>
        <div class="result-container" v-if="cfResponse=='OK'">
          <div class="cfdata" v-for="user in cfData" v-bind:key="user.id">
            <h2>Rating of {{user.handle}}: {{user.rating}}</h2>
            <!-- <h3>{{user.rating}}</h3> -->
          </div>
        </div>
        <div class="result-container" v-else-if="cfResponse">
          <p>Please enter a valid handle!</p>
        </div>
        <div class="result-container" v-else>
          <h2>Enter a handle to search</h2>
        </div>
        <div class="innerf">
          <form v-on:submit.prevent="submitForm">
            <p>Handle:</p>
            <div class="form-group">
                <input type="text" class="form-control" id="handle" placeholder="" v-model="form.handle">
            </div>
            <input type="submit" value="submit">
          </form>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    name: "CS",
    data() {
      return {
        cfResponse: '',
        cfData: [],
        form: {
          handle: ''
        }
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
      }
    },
    created() {
      this.getData();
    }
};
</script>

<style scoped>

/* 
CSS taken from https://waylandcs.com
*/

.result-container {
    border: 5px dashed #3a47f8;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    padding-bottom: 30px;
    margin-top: 25vh;
    /*margin: 0;*/
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #1f1d1d;
}

.innerf {
    border: 5px dashed #3a47f8;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    padding-bottom: 30px;
    margin-top: 52vh;
    /*margin: 0;*/
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #1f1d1d;
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
    background-color: #23a7ff;
    border: 1px solid #111;

}
input[type=submit]:hover {
    cursor: pointer;
    text-transform: lowercase;
    background-color: rgb(9, 6, 151);;
    color: #2a50fa;
    border: 1px solid #2a50fa;



}

</style>