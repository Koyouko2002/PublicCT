Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind: [
      {
        name: "活动限定徽章",
        kind1: [
          {
            pic: "/assets/mine/badge/pic (9).png",
            text1: "熊猫守卫者",
            gray: false
          },
          {
            pic: "/assets/mine/badge/pic (12).png",
            text1: "都市探索者",
            gray: false

          },

        ]

      },
      {
        name: "等级徽章",
        kind1: [
          {
            pic: "/assets/mine/badge/pic (8).png",
            text1: "迷路徽章",
            gray: true
          },
          {
            pic: "/assets/mine/badge/pic (11).png",
            text1: "新生徽章",
            gray: true
          },
          {
            pic: "/assets/mine/badge/pic (6).png",
            text1: "好奇徽章",
          },
          {
            pic: "/assets/mine/badge/pic (2).png",
            text1: "饮茶徽章",
          },
          {
            pic: "/assets/mine/badge/pic (15).png",
            text1: "茶艺徽章",
          },
          {
            pic: "/assets/mine/badge/pic (5).png",
            text1: "茶道徽章",
          },
          {
            pic: "/assets/mine/badge/pic (3).png",
            text1: "黑金徽章",
          },

        ]
      },
      {
        name: "专属徽章",
        kind1: [
          {
            pic: "/assets/mine/badge/pic (9).png",
            text1: "大茶道家",
          },
          {
            pic: "/assets/mine/badge/pic (1).png",
            text1: "天选黑金",
          },

        ]

      },
      {
        name: "联名徽章",
        kind1: [
          {
            pic: "/assets/mine/badge/pic (4).png",
            text1: "夏彦限定徽章",
          },
          {
            pic: "/assets/mine/badge/pic (13).png",
            text1: "左然限定徽章",
          },
          {
            pic: "/assets/mine/badge/pic (7).png",
            text1: "4人限定徽章",
          },
          {
            pic: "/assets/mine/badge/pic (10).png",
            text1: "莫奕限定徽章",
          },
          {
            pic: "/assets/mine/badge/pic (14).png",
            text1: "陆景河限定徽章",
          },

        ]

      },
    ],
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      kind: this.data.kind
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
