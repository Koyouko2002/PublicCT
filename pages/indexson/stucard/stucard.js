// pages/indexson/stucard/stucard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discounts: [
      { amount: 5, limit: 1, image: "/assets/全场立减5元.jpg" },
      { amount: 10, limit: 2, image: "/assets/全场85折.jpg" },
      { amount: 15, limit: 3, image: "/assets/第二杯5折.jpg" }
    ]
  },
  fristurule: function () {
    wx.navigateTo({
      url: '/pages/indexson/sturule/sturule',
    });
  },
})