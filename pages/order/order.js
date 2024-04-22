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
      // {
      //   position: "千道茶坊绵阳城市学院安州店",
      //   status: "已完成",
      //   buyTime: "2024-04-09 18:22:54",
      //   img: "/assets/Order/O1.png",
      //   amount: 14,
      //   count: 1
      // },
      // {
      //   position: "千道茶坊绵阳城市学院安州店",
      //   status: "已完成",
      //   buyTime: "2024-04-09 18:22:54",
      //   img: "/assets/Order/O3.png",
      //   amount: 22,
      //   count: 1


      // },
    ],

    // 卡卷订单
    cardList: []
  },

  // 列表切换
  changeTab(e) {
    // 获取传入id
    let id = e.currentTarget.dataset.activeid;
    let changeList = [
      this.data.orderList,
      this.data.cardList
    ]
    this.setData({
      activeId: id,
      changeList: changeList[id]
    })
    console.log(e.currentTarget.dataset.activeid);
  },

  // 订单点击事件
  intoDeitels(e){
    console.log(e.currentTarget.dataset.orderi);
    var orderi = e.currentTarget.dataset.orderi
    wx.setStorageSync('thisOrder', orderi)
    wx.navigateTo({
      url: '/pages/listdetail/listdetial',
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
    this.setData({
      changeList: this.data.orderList
    })
    // console.log(new Date());

    // 下单之后传回来的值
    var sotre = wx.getStorageSync('Store');//获取名字
    var name = wx.getStorageSync('totelname');//获取名字
    var value = wx.getStorageSync('overvalue')//获取总价
    var imgurl = wx.getStorageSync('totelimg')//获取图片
    var amount = wx.getStorageSync('totelamount')//获取数量
    var time = wx.getStorageSync('Time')//获取数量

    console.log(sotre);
    // 封装成订单
    if (time != '') {
      var order = {
        position: sotre,
        status: "已完成",
        buyTime: time,
        img: imgurl,
        amount: value,
        count: amount

      }
      this.data.orderList.push(order)
    }
    console.log(this.data.orderList);

    this.setData({
      changeList: this.data.orderList
    })

    // 加进去之后删除传入的缓存
    wx.removeStorageSync('Store');
    wx.removeStorageSync('totelname');
    wx.removeStorageSync('totelvalue')
    wx.removeStorageSync('totelimg')
    wx.removeStorageSync('totelamount')
    wx.removeStorageSync('Time')
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