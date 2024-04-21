// pages/buy/buyson/explan/explan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bt1sty:"top-1-b1",
    bt2sty:"top-1-b2",
    mapId:"RQVBZ-EOXCZ-AJYXQ-7G444-YNNQO-Q4F5M",maphide:"",mapopenkey:0,
    maptext:"收起地图",
    mapurl:"/assets/上.png",
  },
  bton1(){
    this.setData({
      bt1sty:"top-1-b1",bt2sty:"top-1-b2",
    })
  },
  bton2(){
    this.setData({
      bt1sty:"top-1-b2",bt2sty:"top-1-b1",
    })
  },
  mapcontrl(){
    if(this.data.mapopenkey==0){
       this.setData({
      maphide:"none",
      maptext:"放下地图",
      mapurl:"/assets/下 (1).png",
    })
      this.data.mapopenkey=1;
    }else{
      this.setData({
        maphide:"",
        maptext:"收起地图",
        mapurl:"/assets/上.png",
      })
      this.data.mapopenkey=0;
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