<template>
  <div>
    <h2 class="text-center header">Experience With Vue</h2>
    <p class="text-center width sub-title">
      Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt
      aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio,
      unde doloremque repellendus iure, iste.Lorem ipsum dolor sit amet.
      Praesentium magnam consectetur vel in deserunt aspernatur est
      reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque
      repellendus iure, iste.
    </p>
    <div class="flex">
      <div class="card">
        <div class="item item-01">01</div>
        <h1 class="title">Book 1</h1>
        <p class="price">$19.99</p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p><button>Add to Cart</button></p>
      </div>
      <div class="card">
        <div class="item item-02">02</div>
        <h1 class="title">Book 2</h1>
        <p class="price">$9.99</p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p><button>Add to Cart</button></p>
      </div>
      <div class="card">
        <div class="item item-03">03</div>
        <h1 class="title">Book 3</h1>
        <p class="price">$39.99</p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p class="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Style the header */
.header {
  padding: 8px;
  text-align: center;
  font-size: 28px;
  color: var(--color);
}
.sub-title {
    color: var(--color);
}
.width {
  width: 70%;
  margin: auto;
}
.text-center {
  text-align: center;
}
.flex {
  display: flex;
  flex-direction: row;
  padding: 18px;
  margin: 18px;
}
.item {
  font-size: 38px;
  width: 20%;
}
.item-01 {
  color: var(--text-color-success);
  border-bottom: 3px solid var(--text-color-success);
}
.item-02 {
  color: var(--text-color-error);
  border-bottom: 3px solid var(--text-color-error);
}
.item-03 {
  color: var(--text-color-warning);
  border-bottom: 3px solid var(--text-color-warning);
}
.title {
  text-align: center;
  width: 30%;
  margin: auto;
  color: var(--color);
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  background: var(--card-color);
  border-radius: 20px;
  height: 70%;
  padding: 18px;
}
.price {
  color: var(--text-color-primary);
  font-size: 22px;
}
.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: var(--color);
  background: var(--background);
  text-align: center;
  cursor: pointer;
  width: 60%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.9;
}
</style>