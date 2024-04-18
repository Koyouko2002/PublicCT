// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    move1:"none",
    move2:"block",
    T1C:"white",
    T2C:"black",
    // order:{
    //   id:1,
    //   name:"紫气葡萄"
    // },
    arrOder:[{
      name:"紫气葡萄"
    },
    {
      name:"牧场嘻嘻乐"
    },
    {
      name:"找真果茶"
    },
    { 
      name:"招牌奶茶"
    },
  ],
  isw1:"#ffffff",
  isw2:"none",
  isw2:"none",
  isw3:"none",
  isw4:"none",
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
  button1(){
      this.setData({
        isw1:"#ffffff",
        isw2:"none",
        isw3:"none",
        isw4:"none",
        isw5:"none",
      })
  },
  button2(){
    this.setData({
      isw1:"none",
      isw2:"#ffffff",
      isw3:"none",
      isw4:"none",
      isw5:"none",
    })
},
button3(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"#ffffff",
    isw4:"none",
    isw5:"none",
  })
},
button4(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"#ffffff",
    isw5:"none",
  })
},
button5(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"#ffffff",
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