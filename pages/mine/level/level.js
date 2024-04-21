// pages/mine/level/level.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo'),

    //此处为进度条相关配置
    progress: 25 * 3,
    color: '#07C160',
    activeColor: '#7395cd',
    borderRadius: '100',//圆角
    strokeWidth: '9rpx',//进度条粗细

    current:0,
    bacImg:[
      "/assets/mine/level/level_bac0.png",
      "/assets/mine/level/level_bac1.png",
      "/assets/mine/level/level_bac2.png",
      "/assets/mine/level/level_bac3.png",
      "/assets/mine/level/level_bac4.png",
      "/assets/mine/level/level_bac5.png",
      "/assets/mine/level/level_bac6.png",
    ],
    background:"",
    icons: ["LV.0", "LV.1", "LV.2", "LV.3", "LV.4", "LV.5", "LV.6"],
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
  // 切换背景图片
  bacChange(event){
    console.log(event);
    const current = event.detail.current;
    console.log(current);
    const source = event.detail.source;

    if (source === 'touch') {
      // 用户触摸引发的滑动事件
      const direction = current > this.data.current ? 'next' : 'previous';
      this.setData({
        current: current
      });

      this.setData({
        background:this.data.bacImg[current]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 得到登录用户信息
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
      ExpArr:incomeExpArr,
      // 得到缓存的用户登录信息
      userInfo: wx.getStorageSync('userInfo'),
      background:this.data.bacImg[userInfo.level]
    })
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