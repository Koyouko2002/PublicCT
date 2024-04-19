// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制列表切换
    activeId: 0,

    // 控制订单切换
    changeList: '',

    // 商品订单
    orderList: [
      {
        position: "千道茶坊绵阳城市学院安州店",
        status: "已完成",
        buyTime: "2024-04-09 18:22:54",
        img: "/assets/Order/O1.png",
        amount: 14,
        count: 1
      },
      {
        position: "千道茶坊绵阳城市学院安州店",
        status: "已完成",
        buyTime: "2024-04-09 18:22:54",
        img: "/assets/Order/O1.png",
        amount: 14,
        count: 1
      },
    ],

    // 卡卷订单
    cardList: []
  },

  // 列表切换
  changeTab(e) {
    // 获取传入id
    let id = e.currentTarget.dataset.activeid;
    let changeList=[
      this.data.orderList,
      this.data.cardList
    ]
    this.setData({
      activeId: id,
      changeList:changeList[id]
    })
    console.log(e.currentTarget.dataset.activeid);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      changeList: this.data.orderList
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