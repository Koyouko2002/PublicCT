// index.js
Page({
  data: {
    imgUrls: [
      '/assets/首页Top2.png',
      '/assets/首页Top3.png',
      '/assets/首页Top4.png',
      '/assets/首页Top5.png',
    ],
    indicatorDots: true,    //是否显示指示点
    autoplay: true,         //是否自动播放
    interval: 3000,         //播放间隔时间
    duration: 1000,         //动画时长
    
    items: [
      {text: '熊猫币商城', mode:'/assets/熊猫币商城.png' },
      {text: '学子卡', mode:'/assets/学子卡.png' },
      {text: '会员任务', mode:'/assets/首页会员任务.png' },
      {text: '悦己计划', mode:'/assets/悦己计划.png' }
    ],

  }
})
