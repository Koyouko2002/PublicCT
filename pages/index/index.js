// index.js
Page({
  data: {
    userInfo: [],
    /*------------------轮播图数据-----------------*/
    imgUrls: [
      '/assets/首页Top2.png',
      '/assets/首页Top3.png',
      '/assets/首页Top4.png',
      '/assets/首页Top5.png',
    ],
    indicatorDots: true,    //是否显示指示点
    autoplay: true,         //是否自动播放
    interval: 3000,         //切换间隔
    duration: 700,          //动画时长
    imgUrls2: [
      '/assets/首页Top22.jpg',
      '/assets/首页Top33.jpg',
      '/assets/首页Top44.jpg',
      '/assets/首页Top55.jpg',
    ],
    interval2: 3000,
    duration2: 1200,         //动画时长


    imgUrls3: [/*------------到店自取外面配送的数据-----------------*/
      '/assets/到店自取.png',
      '/assets/外卖配送.png',
    ],
    items: [/*------------------功能选项的数据-----------------*/
      { text: '熊猫币商城', mode: '/assets/熊猫币商城.png' },
      { text: '学子卡', mode: '/assets/学子卡.png' },
      { text: '会员任务', mode: '/assets/首页会员任务.png' },
      { text: '悦己计划', mode: '/assets/悦己计划.png' }
    ],
    imgUrls4: [/*----------------信息框的数据-----------------*/
      '/assets/开卡减五元.png',
      '/assets/女生专属.png',
    ],
    imgUrls5: [/*----------------三宫格的数据-----------------*/
      '/assets/首页Bot2.jpg',
      '/assets/首页Bot3.jpg',
    ],
    imgUrls6: "/assets/首页Bot1.jpg",
  },

  syncSwiper: function (e) {/*----------------轮播图动作的联动-----------------*/
    var current = e.detail.current;// 获取第一个轮播图当前的滑动位置
    this.setData({// 更新第二个轮播图的滑动位置
      current: current,
      interval2: 0,//重置切换间隔时长
    });
    // interval:3000
  },



  /* 页面加载监听 */
  onLoad(option) {
    wx.setStorageSync('Store', "绵阳城市学院安州区店")
    // 得到缓存的用户登陆数据
    let thisUserInfo = wx.getStorageSync('userInfo');
    // console.log(thisUserInfo);
    // 刷新渲染
    this.setData({
      userInfo: thisUserInfo
    })
  },
  /*---------这里被小朱修改了部分，浅浅给你个注释----------*/
  login() {
    // let userInfo=wx.getStorageSync('userInfo')

    var userInfo = {
      username: "00000",
      password: "23333",
      nike: "夜倾",
      avatar: "/assets/mine/touxiang.png",
      pandacoin: 50,
      coupon: 20,
      level: 2,
      expValue: 85,
      createDate: "2024-03-30",
      phone: "18166882589",
      sex: "男",
      birthday: "2024-2-28",
    };
    wx.setStorageSync('userInfo', userInfo)
    
    wx.showModal({
      title: '是否一键的登陆',
      content: "手机号登陆：" + userInfo.phone,
      complete: (res) => {
        if (res.cancel) {
          wx.showToast({
            title: '用户取消登陆',
          })
        }

        if (res.confirm) {
          this.setData({
            userInfo: userInfo
          })
        }
      }
    })
  },



  /*------------------到店自取外卖配送的交互-----------------*/
  moreTop: function (e) {
    const index = e.currentTarget.dataset.index;
    if (index === 0)
      wx.switchTab({ url: '/pages/buy/buy' });
    else
      wx.showToast({ title: '敬请期待', icon: 'none', duration: 1000 });
  },
  /*------------------功能选择的交互-----------------*/
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
        wx.showToast({ title: '敬请期待', icon: 'none', duration: 1000 });
        break;
      case 3:
        wx.navigateTo({ url: '/pages/indexson/friend/friend' });
        break;
      default:
        break;
    }
  },
  tabjoin: function () {
    wx.navigateTo({ url: '/pages/indexson/joingroup/joingroup', });
  },
  tabbuy: function (e) {
    const index = e.currentTarget.dataset.index;
    if (index === 0)
      wx.switchTab({ url: '/pages/buy/buy', });
    else
      wx.navigateTo({ url: '/pages/indexson/disfree/disfree', });
  },



})
