// pages/mine/pandaShopping/discounts/discount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listditels:'',
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
   */ onShow() {
    var listditels = wx.getStorageSync('listditels')
    this.setData({
      listditels: listditels
    })
document.querySelector
    // 添加点击事件处理逻辑
    document.querySelector('.button').addEventListener('click', function() {
      // 在这里添加兑换操作的逻辑
      alert('点击了立即兑换按钮！');
    });
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

  },
  /**
   * 点击按钮弹出兑换成功页面
   */
  onExchangeSuccess() {
    // 弹出兑换成功页面的代码
    wx.showToast({
      title: '恭喜，兑换成功！',
      icon: 'success',
      duration: 2000
    });
  }
})