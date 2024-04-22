// pages/mine/level/level.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo'),

    //此处----------为进度条相关配置
    progress: 25 * 3,
    color: '#07C160',
    activeColor: '#7395cd',
    borderRadius: '100',//圆角
    strokeWidth: '9rpx',//进度条粗细

    current: 0,
    // 控制经验小点显示
    dotActive: '',
    // 进度条小点样式
    dotActives: ["dotActive0", "dotActive1", "dotActive2", "dotActive3", "dotActive4", "dotActive5", "dotActive6",
    ],
    icons: ["LV.0", "LV.1", "LV.2", "LV.3", "LV.4", "LV.5", "LV.6"],
    colors: ["#8c9aa8", "#baca6f", "#7395cd", "#73c2c7", "#6fab9f", "#5f6a5b", "#2d2f2d"],


    // 此处---------控制背景图片的相关数据
    background: "",
    bacImg: [
      "/assets/mine/level/level_bac0.png",
      "/assets/mine/level/level_bac1.png",
      "/assets/mine/level/level_bac2.png",
      "/assets/mine/level/level_bac3.png",
      "/assets/mine/level/level_bac4.png",
      "/assets/mine/level/level_bac5.png",
      "/assets/mine/level/level_bac6.png",
    ],

    //  此处-------等级卡片相关样式
    // 成就名称
    levelName: [],
    // 经验数组
    ExpArr: [],
    banner: [
      {
        level: 0,
        bacImg: "/assets/mine/level/level0.png"
      },
      {
        level: 1,
        bacImg: "/assets/mine/level/level1.png"
      },
      {
        level: 2,
        bacImg: "/assets/mine/level/level2.png"
      },
      {
        level: 3,
        bacImg: "/assets/mine/level/level3.png"
      },
      {
        level: 4,
        bacImg: "/assets/mine/level/level4.png"
      },
      {
        level: 5,
        bacImg: "/assets/mine/level/level5.png"
      },
      {
        level: 6,
        bacImg: "/assets/mine/level/level6.png"
      },
    ],

    boxs: [
      {
        img: "/assets/mine/level/icon1.png",
        text: "会员日特权"
      },
      {
        img: "/assets/mine/level/icon2.png",
        text: "徽章特权"
      },
      {
        img: "/assets/mine/level/icon3.png",
        text: "升级礼遇"
      },
      {
        img: "/assets/mine/level/icon4.png",
        text: "生日特权"
      },
      {
        img: "/assets/mine/level/icon5.png",
        text: "专属兑换"
      },
      {
        img: "/assets/mine/level/icon9.png",
        text: "拼单特权"
      },
      {
        img: "/assets/mine/level/icon7.png",
        text: "IP特权"
      },
      {
        img: "/assets/mine/level/icon8.png",
        text: "等级特权"
      },
      {
        img: "/assets/mine/level/icon9.png",
        text: "升杯自由"
      },
    ]

  },
  // 轮播图切换事件
  bacChange(event) {
    // 拿到此时第几个轮播图的索引
    const current = event.detail.current;
    // 拿到记录的相关事件
    const source = event.detail.source;
    // 用户触摸引发的滑动事件 
    if (source === 'touch') {
      // 更新相关样式
      this.setData({
        current: current,
        background: this.data.bacImg[current],
        dotActive: this.data.dotActives[current],
        activeColor: this.data.colors[current]
      });
      console.log(this.data.color);
    }
  },

  // 加载等级进度条
  getUserInfo() {
    let userInfo = wx.getStorageSync('userInfo')
    // 得到等级名称
    let incomelevelName = wx.getStorageSync('levelName')
    // 获取经验数组
    let incomeExpArr = wx.getStorageSync('ExpArr')
    this.setData({
      // 渲染进度条
      progress: userInfo.level * 17,
      // 等级名称
      levelName: incomelevelName,
      // 经验数组
      ExpArr: incomeExpArr,
      // 得到缓存的用户登录信息
      userInfo: wx.getStorageSync('userInfo'),
      background: this.data.bacImg[userInfo.level],
      dotActive: this.data.dotActives[userInfo.level],
      activeColor: this.data.colors[userInfo.level]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo();
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})