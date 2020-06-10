<style>
form {
  display: flex;
  flex-direction: column;
}
form span {
  width: 80px;
  display: inline-block;
}
form input,
form select {
  width: 240px;
}
hr {
  border: 0;
  height: 1px;
  background-color: #eee;
  margin: 32px 0;
}
textarea {
  width: 560px;
  min-height: 240px;
}
</style>

<template>
  <div id="app">
    <form>
      <label>
        <span>Title</span>
        <input type="text"
               v-model="title">
      </label>
      <label>
        <span>Name</span>
        <input type="text"
               v-model="name">
      </label>
      <label>
        <span>Mobile</span>
        <input type="text"
               v-model="mobile">
      </label>

      <label>
        <span>Base</span>
        <select v-model="base">
          <option v-for="item in cityList"
                  :value="item"
                  v-text="item"></option>
        </select>
      </label>

      <label>
        <span>Address</span>
        <input type="text"
               v-model="address">
      </label>
    </form>
    <hr>
    <div v-html="html"></div>
    <hr>
    <textarea v-text="html"></textarea>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Designer',
    name: 'Panda WANG',
    mobile: '+86 175-2109-6154',
    base: 'SHANGHAI',
    address: '哈尔滨路 160 号老洋行 1913 创意园 A116-119',
    cityList: ['SHANGHAI', 'BEIJING', 'CHENGDU', 'TAIPEI', 'HONGKONG', 'TOKYO']
  }),
  computed: {
    html: function () {
      return `<div style="font-family:Verdana,sans-serif;font-size:x-small;color:#333;"><div>${this.title}&nbsp;·&nbsp;<b>${this.name}</b></div><div>Mobile&nbsp;·&nbsp;<b>${this.mobile}</b></div><div>${this.base}&nbsp;·&nbsp;${this.address}</div><img src="https://pics.kanjian.com/kanjiancom/logo_emali_signature.png" style="width:256px;height:64px;"><div>${this.cityList.join('·')}</div><div>看见音乐&nbsp;<a href="http://www.kanjian.com"><b style="color:#0000ff">KANJIAN.COM</b></a></div><div>星球发行&nbsp;<a href="http://star.kanjian.com"><b style="color:#0000ff">STAR.KANJIAN.COM</b></a></div><div>国际版&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://en.kanjian.com"><b style="color:#0000ff">EN.KANJIAN.COM</b></a></div></div>`
    }
  }
};
</script>
