// pages/buy/buy.js
var is=0;
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
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    Order:[{
      name:"抹茶冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"抹茶",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",
      price:"17"
    },
    {
      name:"抹茶冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"抹茶",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",      price:"17"
    },
    {
      name:"西瓜冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"西瓜",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",      price:17
    },
    { 
      name:"抹茶冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"抹茶",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",      price:"17"
    },
  ],
  isw1:"#ffffff",
  isw2:"none",
  isw3:"none",
  isw4:"none",
  isw5:"none",
  isw6:"none",
  isw7:"none",
  isw8:"none",
  swiperIs:"",
  Rtop:"",
  move:"Mid",
  is:0,
  },
scrolling(){
if(is==0){
    console.log("在滚了");
      this.setData({
        swiperIs:"swiper_dis",
        Rtop:0,
        move:"MidUp",
        is:1
      })
      is=1;
}

  },
  scrolled(){
    console.log("回滚");
    this.setData({
      swiperIs:"swiper_app",
      Rtop:0,
      move:"MidDown",
      is:0
    })
    setTimeout(() =>  is=0, 1000)
   
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
        isw6:"none",
        isw7:"none",
        isw8:"none",
      })
  },
  button2(){
    this.setData({
      isw1:"none",
      isw2:"#ffffff",
      isw3:"none",
      isw4:"none",
      isw5:"none",
      isw6:"none",
      isw7:"none",
      isw8:"none",
    })
},
button3(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"#ffffff",
    isw4:"none",
    isw5:"none",
    isw6:"none",
    isw7:"none",
    isw8:"none",
  })
},
button4(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"#ffffff",
    isw5:"none",
    isw6:"none",
    isw7:"none",
    isw8:"none",
  })
},
button5(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"#ffffff",
    isw6:"none",
    isw7:"none",
    isw8:"none",
  })
},
button6(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"none",
    isw6:"#ffffff",
    isw7:"none",
    isw8:"none",
  })
},
button7(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"none",
    isw6:"none",
    isw7:"#ffffff",
    isw8:"none",
  })
},
button8(){
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"none",
    isw6:"none",
    isw7:"none",
    isw8:"#ffffff",
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