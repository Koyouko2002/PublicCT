// pages/indexson/joingroup/joingroup.js
var open=0;
var store="千道茶坊绵阳涪城区店";
Page({

  /**
   * 页面的初始数据
   */
  data: { 
      url1:"/assets/点击入群bgi.jpg", 
      url2:"/assets/点击入群bgi2.png", 
      text:"绵阳市", 
      url3:"/assets/下.png", 
  },

  explanTop: function () {
      wx.navigateTo({ url: '/pages/buy/buyson/explan/explan' });
  },
  onReady() {
    store=wx.getStorageSync('Store')
    this.setData({
      store:store
    })
  },
  onShow: function () {
    // 监听数据变化
    this.setData({
      dynamicData: getApp().globalData.dynamicData
    })
  }
})

