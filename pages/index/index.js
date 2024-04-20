// index.js
Page({
  data: {
    userInfo: [],

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
    imgUrls3: [
      '/assets/到店自取.png',
      '/assets/外卖配送.png',
    ],
    items: [
      { text: '熊猫币商城', mode: '/assets/熊猫币商城.png' },
      { text: '学子卡', mode: '/assets/学子卡.png' },
      { text: '会员任务', mode: '/assets/首页会员任务.png' },
      { text: '悦己计划', mode: '/assets/悦己计划.png' }
    ],
  },

  /* 页面加载监听 */
  onLoad(option) {
    // 得到缓存的用户登陆数据
    let thisUserInfo = wx.getStorageSync('userInfo');
    // console.log(thisUserInfo);
    // 刷新渲染
    this.setData({
      userInfo: thisUserInfo
    })
  },

  login(){
    let userInfo=wx.getStorageSync('userInfo')
    wx.showModal({
      title: '是否一键的登陆',
      content: "手机号登陆："+userInfo.phone,
      complete: (res) => {
        if (res.cancel) {
          wx.showToast({
            title: '用户取消登陆',
          })
        }
    
        if (res.confirm) {
          this.setData({
            userInfo:userInfo
          })
        }
      }
    })
  },


  /**
   * 生命周期函数---页面显示监听
   */

  moreTop: function (e) {
    const index = e.currentTarget.dataset.index;
    if(index===0)
      wx.switchTab({ url: '/pages/buy/buy' });
    else
      wx.showToast({ title: '敬请期待', icon: 'none', duration: 1000 });
  },  
  tabbuy: function () {
    wx.switchTab({
      url: '/pages/buy/buy',
    });
  },
  tabjoin: function () {
    wx.navigateTo({
      url: '/pages/indexson/joingroup/joingroup',
    });
  },
  tabfree: function () {
    wx.navigateTo({
      url: '/pages/indexson/disfree/disfree',
    });
  },
  onImage1Tap: function () {
    wx.showToast({
      title: '敬请期待',
      icon: 'none',
      duration: 1000
    });
  },
  friTap: function (e) {
    const index = e.currentTarget.dataset.index;
    switch (index) {
      case 0:
        wx.navigateTo({ url: '/pages/mine/pandaShopping/pandaShopping' });
        break;
      case 1:
        wx.navigateTo({ url: '/pages/indexson/stucard/stucard' });
        break;
      case 2:
        wx.showToast({ title: '请先登录', icon: 'none', duration: 1000 });
        break;
      case 3:
        wx.navigateTo({ url: '/pages/indexson/friend/friend' });
        break;
      default:
        break;
    }
  }

})
