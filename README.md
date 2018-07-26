# h5-mobile-layout

## 简介
移动端手机屏幕适配demo    
* 该项目是手淘团队针对移动端屏幕的flexible适配方案以及vw适配方案，这两种适配方案的demo项目。   
* 该项目展示了如何使用less或者scss加上postcss插件的方式来实现这两种适配方案。     
* 关于flexible适配方案的具体详情，请参考：http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html   
* 关于vw适配方案的具体详情，请参考：https://www.w3cplus.com/css/vw-for-layout.html

参考网页：   
* 使用Flexible实现手淘H5页面的终端适配：http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html
* 再聊移动端页面的适配：https://www.w3cplus.com/css/vw-for-layout.html
* flexible官方github地址：https://github.com/amfe/lib-flexible

## 本地运行

``` bash
# clone仓库
git clone https://github.com/aasailan/h5-mobile-layout.git

cd h5-mobile-layout

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
在浏览器中输入 http://localhost:8080/ 可以访问到flexible适配方案的页面   
在浏览器中输入 http://localhost:8080/vw-index.html 可以访问到vw适配方案的页面

## 要点总结

### 关于手机屏幕适配要解决的问题要点：
* 如何在retina屏幕下显示 **物理像素** 级别的1px线
* 如何在不同比例的屏幕下实现各种元素的等比缩放，保持布局上的观感

### flexible适配的思想以及优缺点
flexible适配的主要思想有以下三点：   
1. 通过flexible.js来根据手机浏览器信息动态修改dpr以及root-font-size（关于dpr的知识请自行了解）
2. 根据dpr的值来修改缩放viewport，进而实现显示 **物理像素** 级别的 1px 细线
3. 使用less或者scss等css拓展语言，将代码中的px转换为rem，实现等比缩放

flexible适配的优点：  
1. rem的浏览器兼容性很好，详情见：https://caniuse.com/#search=rem
2. 淘宝提供了flexible.js的[**cdn加速**](http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js)，引用非常方便

flexible适配的缺点：
1. flexible.js仅对ios进行了dpr的检测判断，android因为dpr分布过于碎片化，所以统一设置为dpr等于1。这导致在android的retina屏幕上面，实际上没有对viewport进行缩放，所以无法显示 **物理像素** 级别的 1px 细线。
2. flexible方案由于缩放了viewport，所以会导致一些意想不到的问题，比如微信浏览器中无法长按二维码进行扫面，详见：https://github.com/amfe/lib-flexible/issues/99  flexible官方github的issue中还有各种神奇的bug

### vw适配的思想以及优缺点
vw适配的主要思想是：
1. 利用css3新单位vw的特性来实现等比缩放（vw的知识请自行了解）
2. 利用border-image、background-image加svg图片的方式来显示 **物理像素** 级别的1px细线

工程实现上主要有两个要点：
1. 使用postcss-px-to-viewport插件将px自动转换为vw单位
2. 使用postcss-write-svg插件可以在css中定义svg图片

vw适配的优点：
1. 无论是ios还是android，都能实现较好的等比缩放
2. 无论是ios还是android，都能较好的显示 **物理像素** 级别的1px细线

vw适配的缺点：
1. vw的浏览器兼容性不如rem好，详见：https://caniuse.com/#search=vw