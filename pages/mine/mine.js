// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //此处为进度条相关配置
    progress:40,
    color:'#07C160',
    activeColor:'#fff',
    borderRadius:'100',//圆角
    strokeWidth:'9rpx',//进度条粗细

    // 用户信息
    userInfo:{
      username:"",
      password:"",
      nike:"",
      avatar:"",
      pandacoin:"",
      level:0,
      phone:"",
      sex:"",
      birthday:"",
    },

    // 应用数据
    apps:[
      {
        img:"/assets/mine/商城.png",
        appDes:"熊猫币商城",
        url:"/pages/mine/pandaShopping/pandaShopping"
      },
      {
        img:"/assets/mine/礼品卡.png",
        appDes:"礼品卡"
      },
      {
        img:"/assets/mine/券码兑换.png",
        appDes:"券码兑换"
      },
      {
        img:"/assets/mine/z.png",
        appDes:"信息"
      },
      {
        img:"/assets/mine/zz.png",
        appDes:"悦己计划",
        url:"/pages/indexson/friend/friend"
      },
      {
        img:"/assets/mine/会员任务.png",
        appDes:"会员任务"
      },
      {
        img:"/assets/mine/福利.png",
        appDes:"社区福利"
      },
      {
        img:"/assets/mine/个人资料.png",
        appDes:"个人资料"
      },
      {
        img:"/assets/mine/加盟申请.png",
        appDes:"加盟申请"
      },
      {
        img:"/assets/mine/联系客服.png",
        appDes:"联系客服"
      },
      {
        img:"/assets/mine/我的勋章.png",
        appDes:"我的勋章"
      },
      {
        img:"/assets/mine/更多.png",
        appDes:"更多"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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