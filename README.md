# yingqianshu
the website of yingqianshu on pc
* 使用了fullpage全屏滚动插件
* 使用了jquery.jquery.velocity.min.js动画插件
* 使用了css3动画

##### fullpage.js回调函数包括
* afterLoad:	滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
* onLeave:	滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
* nextIndex: 是滚动到的“页面”的序号，从1开始计算；
* direction: 判断往上滚动还是往下滚动，值是 up 或 down。
* afterRender:	页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
* afterSlideLoad:	滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数
* onSlideLeave:	某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数
