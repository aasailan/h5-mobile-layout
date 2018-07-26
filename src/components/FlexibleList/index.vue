<template>
  <div class="nottovw">
    <div class="header">
      <img class="header__img" src="../../assets/TB1PNLZKXXXXXaTXXXXXXXXXXXX-750-481.jpg">
    </div>
    <ul class="list">
      <li class="list-item" v-for="(item, key) in list" :key="key">
        <img src="../../assets/grayscale.jpg" class="list-item__img">
        <div class="list-item__info">
          <div class="list-item__info-title">Carter's1年式灰色长袖连体衣包脚爬服全棉鲸鱼男婴儿童装115G093</div>
          <div class="list-item__info-price">
            <span>双11价</span>
            <strong>￥299.06</strong>
            <small>满400减100</small></div>
          <div class="list-item__info-hot">
            1小时内热卖5885件
          </div>
          <a class="list-item__info-buy">马上抢！</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<!-- <style lang="less">
// less版本的适配demo
@import './index.less';
</style> -->
<style lang="sass">
@import './index.scss';
</style>
<script src="./index.js">
</script>
