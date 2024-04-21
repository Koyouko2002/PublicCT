// pages/buy/buy.js
var is=0;
var total=0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    store:"绵阳城市学院安州区店",
    actionSheetHidden:"none",
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
      price:14
    },
    {
      name:"抹茶冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"抹茶",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑."
      , price:14
    },
    {
      name:"西瓜冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"西瓜",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑."
      ,price:14
    },
    { 
      name:"抹茶冰椰雪糕",
      t1:"椰子雪糕I ",
      t1prime:"抹茶",
      t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",            price:14
    },
  ],
    Order2:[{
    name:"紫气葡萄冻",
    t1:"香水柠檬I ",
    t1prime:"葡萄",
    t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",
    price:"17",
    img:"O2.jpg"
  },
  { 
    name:"紫气葡萄芝士",
    t1:"奶香芝士I ",
    t1prime:"葡萄",
    t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.", price:"17",
    img:"O2.jpg"
  },
],
    Order3:[{
  name:"芒果昔昔乐",
  t1:"香水柠檬I ",
  t1prime:"芒果",
  t2:"使用清甜芒果(新鲜芒果、芒果浆)加酸奶风味发酵乳。",
  price:"21",
  img:"O2.jpg"
},
{ 
  name:"芒果芝士",
  t1:"奶香芝士I ",
  t1prime:"芒果",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",   price:"21",
  img:"O2.jpg"
},
{ 
  name:"芒果黄金乐",
  t1:"奶香芝士I ",
  t1prime:"芒果",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",   price:"21",
  img:"O2.jpg"
},
],
    Order4:[{
  name:"乌漆嘛黑",
  t1:"香水柠檬I ",
  t1prime:"芒果",
  t2:"使用清甜芒果(新鲜芒果、芒果浆)加酸奶风味发酵乳。",
  price:"19",
  img:"O2.jpg"
},
{ 
  name:"是真的黑",
  t1:"奶香芝士I ",
  t1prime:"芒果",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",   price:"19",
  img:"O2.jpg"
},
{ 
  name:"黑暗骑士捏捏",
  t1:"铁壁I ",
  t1prime:"黑盾",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",   price:"19",
  img:"O2.jpg"
},
],
   Order5:[{
  name:"芒果昔昔乐",
  t1:"香水柠檬I ",
  t1prime:"芒果",
  t2:"使用清甜芒果(新鲜芒果、芒果浆)加酸奶风味发酵乳。",
  price:"27",
  img:"O2.jpg"
},
{ 
  name:"芒果芝士",
  t1:"奶香芝士I ",
  t1prime:"芒果",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",   price:"27",
  img:"O2.jpg"
},
],
   Order6:[{
  name:"芒果昔昔乐",
  t1:"香水柠檬I ",
  t1prime:"芒果",
  t2:"使用清甜芒果(新鲜芒果、芒果浆)加酸奶风味发酵乳。",
  price:"11",
  img:"O2.jpg"
},
{ 
  name:"芒果芝士",
  t1:"奶香芝士I ",
  t1prime:"芒果",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.",   price:"11",
  img:"O2.jpg"
},
],
    Order7:[{
  name:"椰果",
  t1:"香香甜甜I ",
  t1prime:"海南椰果",
  t2:"使用清甜芒果(新鲜芒果、芒果浆)加酸奶风味发酵乳。",
  price:"1",
  img:"O7.png"
},
{ 
  name:"红豆",
  t1:"奶香芝士I ",
  t1prime:"红豆",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.", price:"2",
  img:"O7.png"
},
{ 
  name:"西米露",
  t1:"奶想鲜煮I ",
  t1prime:"西米露",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.", price:"3",
  img:"O7.png"
},
{ 
  name:"钻头",
  t1:"超级钻头I ",
  t1prime:"700威力",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.", price:"3",
  img:"O7ZT.png"
},
{ 
  name:"崩破",
  t1:"性感武士提供I ",
  t1prime:"满100减50",
  t2:"妹妹没盾了吧！", price:"99",
  img:"O7BP.png"
},
],
   Order8:[{
  name:"单杯保温袋",
  t1:"香水柠檬I ",
  t1prime:"芒果",
  t2:"使用清甜芒果(新鲜芒果、芒果浆)加酸奶风味发酵乳。",
  price:"17",
  img:"O2.jpg"
},
{ 
  name:"钛合金量子保温袋",
  t1:"奶香芝士I ",
  t1prime:"芒果",
  t2:"经传统蒸青工艺处理制成的细腻抹茶搭配丝滑.", price:"999",
  img:"O2.jpg"
},
],
  isw1:"#ffffff",isw2:"none",isw3:"none",
  isw4:"none",isw5:"none",isw6:"none",isw7:"none",isw8:"none",swiperIs:"", Rtop:"",move:"Mid",is:0,page1:"block",page2:"none",page3:"none",
  page4:"none",page5:"none",page6:"none",
  page7:"none",page8:"none",
  open:"none",total:0,
  },
  aindtapctionSheetTap(){
    this.setData({
      actionSheetHidden:""
    })
  },
  aindtapctionSheetTapddis(){
    this.setData({
      actionSheetHidden:"none"
    })

  },
  buying1(){
    wx.setStorageSync('cupcupfull', 1)
    console.log("111")
  },
  buying2(){
    wx.setStorageSync('cupcupfull', 2)
    console.log("222")
  },
  buying3(){
    wx.setStorageSync('cupcupfull', 3)
    console.log("333")
  },
  buying4(){
    wx.setStorageSync('cupcupfull', 4)
    console.log("444")
  },
  buying5(){
    wx.setStorageSync('cupcupfull', 5)
    console.log("555")
  },
  buying6(){
    wx.setStorageSync('cupcupfull', 6)
    console.log("666")
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
  // ss(){
  //   wx.setStorageSync('key', data)
  // },
  // ss(){
  //   wx.getStorageSync('key') 
  // },
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
        isw1:"#ffffff",isw2:"none",
        isw3:"none",isw4:"none",isw5:"none",isw6:"none",isw7:"none",isw8:"none",
        page1:"block",page2:"none",page3:"none",
        page4:"none",page5:"none",page6:"none",
        page7:"none",page8:"none",
      })
  },
  button2(){
    wx.setStorageSync('cupcupfull', 2)
    this.setData({
      isw1:"none",
      isw2:"#ffffff",
      isw3:"none",
      isw4:"none",
      isw5:"none",
      isw6:"none",
      isw7:"none",
      isw8:"none",
      page1:"none",page2:"block",page3:"none",
      page4:"none",page5:"none",page6:"none",
      page7:"none",page8:"none",
    })
},
button3(){
  wx.setStorageSync('cupcupfull', 3)
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"#ffffff",
    isw4:"none",
    isw5:"none",
    isw6:"none",
    isw7:"none",
    isw8:"none",
    page1:"none",page2:"none",page3:"block",
    page4:"none",page5:"none",page6:"none",
    page7:"none",page8:"none",
  })
},
button4(){
  wx.setStorageSync('cupcupfull', 4)
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"#ffffff",
    isw5:"none",
    isw6:"none",
    isw7:"none",
    isw8:"none",
    page1:"none",page2:"none",page3:"none",
    page4:"block",page5:"none",page6:"none",
    page7:"none",page8:"none",
  })
},
button5(){
  wx.setStorageSync('cupcupfull', 5)
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"#ffffff",
    isw6:"none",
    isw7:"none",
    isw8:"none",
    page1:"none",page2:"none",page3:"none",
    page4:"none",page5:"block",page6:"none",
    page7:"none",page8:"none",
  })
},
button6(){
  wx.setStorageSync('cupcupfull', 6)
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"none",
    isw6:"#ffffff",
    isw7:"none",
    isw8:"none",
    page1:"none",page2:"none",page3:"none",
    page4:"none",page5:"none",page6:"block",
    page7:"none",page8:"none",
  })
},
button7(){
  wx.setStorageSync('cupcupfull', 7)
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"none",
    isw6:"none",
    isw7:"#ffffff",
    isw8:"none",
    page1:"none",page2:"none",page3:"none",
    page4:"none",page5:"none",page6:"none",
    page7:"block",page8:"none",
  })
},

button8(){
  wx.setStorageSync('cupcupfull', 8)
  this.setData({
    isw1:"none",
    isw2:"none",
    isw3:"none",
    isw4:"none",
    isw5:"none",
    isw6:"none",
    isw7:"none",
    isw8:"#ffffff",
    page1:"none",page2:"none",page3:"none",
    page4:"none",page5:"none",page6:"none",
    page7:"none",page8:"block",
  })
},
sumbit(){
  wx.redirectTo({
    url: '/pages/buy/buyson/buyed/buyed.wxml',
  })
  console.log(111)
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

    var open=0;
    var store="绵阳城市学院安州区店";
    store=wx.getStorageSync('Store')
    open = wx.getStorageSync('open');
    console.log(open)
    this.setData({
      store:store
    })
    if(open==1){ 
          this.setData({
      total:wx.getStorageSync('totelvalue'),
      open:"block"

    }),
    console.log("__________")
    console.log(open)
    }else{
      this.setData({
        open:"none"
      })
    }
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