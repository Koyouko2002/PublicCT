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
    interval: 3000,         //切换间隔
    duration: 700,         //动画时长

    imgUrls2: [
      '/assets/首页Top22.jpg',
      '/assets/首页Top33.jpg',
      '/assets/首页Top44.jpg',
      '/assets/首页Top55.jpg',
    ],
    duration2: 1200,         //动画时长
    items: [
      {text: '熊猫币商城', mode:'/assets/熊猫币商城.png', id:1 },
      {text: '学子卡', mode:'/assets/学子卡.png', id:2 },
      {text: '会员任务', mode:'/assets/首页会员任务.png', id:3 },
      {text: '悦己计划', mode:'/assets/悦己计划.png', id:4 }
    ],
  },
  tabbuy: function () {
    wx.switchTab({
      url: '/pages/buy/buy',
    });
  },
  onImage1Tap: function () {
    wx.showToast({
      title: '敬请期待',
      icon: 'none',
      duration: 1000
    });
  },
  friTap: function(e) {
    const index = e.currentTarget.dataset.index;
    switch (index) {
      case 1:
        wx.navigateTo({ url: '/pages/indexson/friend/friend' });
        break;
      case 3:
        wx.navigateTo({ url: '/pages/indexson/friend/friend' });
        break;
      default:
        break;
    }
  }
  
})
