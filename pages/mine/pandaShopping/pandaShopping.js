// pages/mine/pandaShopping/pandaShopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexActive: 0,
    list: [],
    CoinActive: 0,
    userInfo:'',
    /*规则、订单、明细 */
    rule: [
      {
        pic: "/assets/coinMall/mingxi.png",
        txt: "熊猫币明细",
        url: "/pages/mine/pandaShopping/detail/detail"
      },
      {
        pic: "/assets/coinMall/dingdan.png",
        txt: "熊猫币订单",
        url: "/pages/order/order"
      },
      {
        pic: "/assets/coinMall/guize.png",
        txt: "熊猫币规则",
        url: "/pages/mine/pandaShopping/rule/rule"
      },
    ]
    ,
    tickets: [
      {
        pic: "/assets/coinMall/pic (3).jpg",
        tip: "2元无门槛优惠券",
        text1: 100,
        text2: "剩余70456",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic (5).jpg",
        tip: "3元无门槛优惠券",
        text1: 150,
        text2: "剩余11360",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic (4).jpg",
        tip: "满30减3元优惠券",
        text1: 150,
        text2: "剩余96692",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic (1).jpg",
        tip: "满50减5元优惠券",
        text1: 250,
        text2: "剩余70456",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic (3).jpg",
        tip: "单杯8.8折",
        text1: 150,
        text2: "剩余92556",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic(9).jpg",
        tip: "全场第二杯半价券",
        text1: 500,
        text2: "剩余4775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
    ],/*
 */
    recommend: [
      {
        pic: "/assets/coinMall/pic(8).jpg",
        tip: "【春日好茶】抹茶…",
        text1: 30,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic (6).jpg",
        tip: "【春日好茶】桂花…",
        text1: 150,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic(8).jpg",
        tip: "【新品尝鲜】柚子…",
        text1: 150,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/coinMall/pic (6).jpg",
        tip: "【新品尝鲜】真鲜…",
        text1: 150,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
    ],
    only: [
      {
        pic: "/assets/mine/coupon/tic (1).jpg",
        tip: "【Lv.3及以上专属…",
        text1: 30,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/mine/coupon/tic (2).jpg",
        tip: "【Lv.3及以上专属…",
        text1: 30,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },
      {
        pic: "/assets/mine/coupon/tic (3).jpg",
        tip: "【Lv.4及以上专属…",
        text1: 30,
        text2: "剩余96775",
        url: "/pages/mine/pandaShopping/discounts/discount",
      },

    ]

  },
  changeTab(e) {
    let id = e.currentTarget.dataset.id;
    let newList = [
      this.data.tickets,
      this.data.recommend,
      this.data.only
    ]
    this.setData({
      CoinActive: id,
      list: newList[id]

    })
  },

  into(e) {
    console.log(e.currentTarget.dataset.listditels);
    var listditels = e.currentTarget.dataset.listditels
    wx.setStorageSync('listditels', listditels)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var thisUserInfo = wx.getStorageSync('userInfo')
    this.setData({
      list: this.data.tickets,
      userInfo:thisUserInfo
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