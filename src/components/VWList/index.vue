<template>
  <div class="">
    <div class="header">
      <img class="header__img" src="../../assets/TB1PNLZKXXXXXaTXXXXXXXXXXXX-750-481.jpg">
    </div>
    <ul class="list">
      <li v-for="(item, key) in list" :key="key">
        <div  class="list-item">
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
        </div>
        <!-- 使用 background-image 加 svg实现的 real 1px 分割线，作为对比 -->
        <div class="real1px-div"></div>
        <!-- 使用background-image实现css像素级别的1px分割线，作为对比 -->
        <div class="css1px-div"></div>
      </li>
      <div class="border-box">
        四周边框
      </div>
      <div class="right-border-box">
        右边边框
      </div>
       <div class="bottom-border-box">
        底部边框
      </div>
    </ul>
  </div>
</template>
<!-- <style lang="less">
// less版本的适配demo
// @import './index.less';
</style> -->
<style lang="sass">
@import './index.scss';
</style>
<script src="./index.js">
</script>
