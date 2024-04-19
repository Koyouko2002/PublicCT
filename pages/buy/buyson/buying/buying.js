// pages/buy/buyson/buying/buying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BackgroundUrl:"/assets/Order/BG1.png",
    title:"红茶冰椰雪糕",
    t1:"椰子乳I",t1prime:"椰子雪糕",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",
    is1:"in",is2:"",color:"#094bdd",color2:"",
  },
  mcup(){
  this.setData({
    is1:"in",is2:"",color:"#094bdd",color2:"",
  })
  },
  lcup(){
    this.setData({
      is1:"",color:"",
      is2:"in",color2:"#094bdd",
    })
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