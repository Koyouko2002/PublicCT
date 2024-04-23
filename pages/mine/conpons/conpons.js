// pages/mine/conpons/conpons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:'',
  },
  huoqv(e){
    console.log(e)
    this.setData({
      x:e.detail.value
    })
  },
  duihuan(){
    console.log(this.data.x)
    if(this.data.x=="vip666"){
      wx.setStorageSync('flex', "flex")
      wx.showToast({
        title: '兑换成功',
      })
      this.setData({
        juan:"flex"
      })

    }else{
      wx.showToast({
        icon:'error',
        title: '兑换失败',
      })
    }
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