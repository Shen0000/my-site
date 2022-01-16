<template>
  <div class="academics" >
    <h1 class="title">This is my academics page</h1>
    <div class="AP-head">
        <h2>AP Tests</h2>
        <h3>2020-2021:</h3>
        <p>Computer Science A - 5</p>
        <p>Microeconomics - 5</p>
    </div>
    <br>
    <div class="SAT-head">
        <h2>SAT</h2>
        <p>2020-2021: 1540 - 780 Math, 760 English</p>
    </div>
    <!--
    <div id="solution">
		<input type="hidden" name="cpid" value="1135">
		<div class="field2">
			<label for="language">Language:</label>
				<select name="language">
					<option value="1">C</option>
                    <option value="6">C++11</option>
                    <option value="7">C++17</option>
                    <option value="9">Java</option>
                    <option value="3">Python 2.7.17</option>
                    <option value="4">Python 3.6.9</option>
				</select></div>
		<div class="field2">
			<label for="sourcefile">Source File:</label>
		<input name="sourcefile" size="50" type="file" class="required"></div>
		<div class="field2">
		<input name="solution-submit" id="solution-submit" type="submit" value="Submit Solution"></div>
    </div>
    -->
    
  </div>
</template>

<script>
export default {
    name: "academics",
};
</script>

<style scoped>

.academics {
    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-left: 3vw;
    padding: 10px;
    text-align: left;
    line-height: 200%;
    position:center; 
    justify-content: center;
    float:center; 
    left:30px; 
    top:45px; 
    width:92vw;
    border:1px solid black; 
    border-bottom: px solid black;
}

</style>