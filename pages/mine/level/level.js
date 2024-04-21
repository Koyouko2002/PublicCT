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

    icons: ["LV.0", "LV.1", "LV.2", "LV.3", "LV.4"],

    boxs:[
      {
        img:"/assets/mine/level/icon1.png",
        text:"会员日特权"
      },
      {
        img:"/assets/mine/level/icon2.png",
        text:"会员日特权"
      },
      {
        img:"/assets/mine/level/icon3.png",
        text:"会员日特权"
      },
      {
        img:"/assets/mine/level/icon4.png",
        text:"会员日特权"
      },
      {
        img:"/assets/mine/level/icon5.png",
        text:"会员日特权"
      },
      {
        img:"/assets/mine/level/icon9.png",
        text:"会员日特权"
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let userInfo = wx.getStorageSync('userInfo')
    this.setData({
      progress: userInfo.level * 25
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
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
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