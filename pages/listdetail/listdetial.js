// pages/listdetail/listdetial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store:"",
    totelname:"",
    totelvalue:"",
    totelimg:"",
    totelamout:"",
    Time:"",
    order:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {    

    var sotre=wx.getStorageSync('Store');//获取名字
    var name=wx.getStorageSync('totelname');//获取名字
    var value=wx.getStorageSync('totelvalue')//获取总价
    var imgurl=wx.getStorageSync('totelimg')//获取图片
    var amount=wx.getStorageSync('totelamount')//获取数量、
    var Time=wx.getStorageSync('Time');//获取名字
    var order = wx.getStorageSync('thisOrder');
    this.setData({
      store:sotre,
      totelname:name,
      totelvalue:value,
      totelimg:imgurl,
      totelamount:amount,
      Time:Time,
      order:order
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