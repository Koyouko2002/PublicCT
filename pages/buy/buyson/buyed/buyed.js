// pages/buy/buyson/buyed/buyed.js
var some=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"0",
    Cup:{
      name:"茉莉奶绿",
      img:"O3.png",
      total:14,
      t1:"一些相关的文本描述",
      amout:"1",
    },
    store:"绵阳城市学院安州区店",
    img2:"O3.png",
    Change1:[{
      img:"O7.png",
      name:"椰果+份",
      value:"0.99",
    },
    {
      img:"O7.png",
      name:"西米+份",
      value:0.99,
    },
    {
      img:"O8.png",
      name:"口袋+份",
      value:"0.99",
    },
    {
      img:"O7.png",
      name:"红豆+份",
      value:"0.99",
    }
  ],    
    Change2:[{
    img:"O7.png",
    name:"雪糕+份",
    value:"1.99",
  },
  {
    img:"O7.png",
    name:"椰蓉+份",
    value:1.99,
  }
],
  }
  ,buysome1(){
    this.data.Cup.total.toFixed(2);
    some=this.data.Cup.total;
    some+=0.99;
    this.setData({
    Cup:{
         total:some
    }

    })
    // console.log(this.data.total)
  },
  buysome2(){
    some=this.data.Cup.total;
    some+=1.99;
    this.setData({
    Cup:{
         total:some
    }

    })
    // console.log(this.data.total)
  },
  sumbit(){
    wx.showToast({
      title: '成功',
      icon:'success',
      duration:2000
    })
    wx.setStorageSync('open', 0)
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    wx.setStorageSync('Time', formattedDate);
    
    wx.setStorageSync('overvalue', this.data.Cup.total);


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
    var store=wx.getStorageSync('Store');//获取店名
    var name=wx.getStorageSync('totelname');//获取名字
    var value=wx.getStorageSync('totelvalue')//获取总价
    var imgurl=wx.getStorageSync('totelimg')//获取图片
    var amount=wx.getStorageSync('totelamount')//获取数量
    this.setData({
      store:store,
      value:value,
      Cup:{
        name:name,
        total:value,
        img:imgurl,
        amout:amount,
        t1:"一些相关的文本描述",
      },
 
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