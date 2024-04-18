// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    move1:"none",
    move2:"block",
    T1C:"white",
    T2C:"black"
  },
  Top1move(){
   this.setData({
    move1:"block",
    move2:"none",
    T1C:"black",
    T2C:"white"
   })
  },
  Top1move2(){
    this.setData({
      move1:"none",
      move2:"block",
      T1C:"white",
      T2C:"black"
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