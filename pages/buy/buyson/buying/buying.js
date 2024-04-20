// pages/buy/buyson/buying/buying.js\
var is6key=0,is7key=0,is8key=0;var price=0;
var amount = 1;
var fjvalue=0;
var total=0;
var whatup=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BackgroundUrl:"/assets/Order/BG1.png",
    title:"红茶冰椰雪糕",
    t1:"椰子乳I",t1prime:"椰子雪糕",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:17,
    is1:"in",is2:"",
    color:"#094bdd",color2:"",
    is3:"in",is4:"",is5:"",
    color3:"#094bdd",color4:"",color5:"",
    is6:"",
    color6:"",
    is:"",is8:"",
    color7:"",color7:"",
    amount:1,subbg:"",subcolor:"",
    Key1:"none",Key2:"",
    Key3:"",Key4:"none",Key5:"none",
    Key6:"",Key7:"none",Key8:"none",
    fjvalue:0,total:0,img:""
  },
  sumbit(){
    price=this.data.price;
    total=price*amount+fjvalue;
    this.data.total=total;
    wx.setStorageSync('totelimg', this.data.img)
    wx.setStorageSync('totelname', this.data.title)
    wx.setStorageSync('totelamount', this.data.amount)
    wx.setStorageSync('totelvalue', this.data.total)
    wx.setStorageSync('open', 1)
    console.log(this.data.total)
    console.log("--------------------")
    wx.switchTab({
      url: '/pages/buy/buy',
    })
  },
  add(){
       amount +=1;
    this.data.amount=amount;
     console.log(amount);
    this.setData({
       amount:amount,
       subbg:"#184ce1",
       subcolor:"#ffffff"
    })
  },
  sub(){
    if(amount>1){ 
        amount -=1;
    this.data.amount=amount;
    console.log(amount);
    this.setData({
       amount:amount,
    })
    }
    if(amount==1){
        this.setData({
          subbg:"",
          subcolor:""
        })
    }
  
  },
  mcup(){
  this.setData({
    is1:"in",is2:"",color:"#094bdd",color2:"",Key1:"none",Key2:"block"
  })
  },
  lcup(){
    this.setData({
      is1:"",color:"",
      is2:"in",color2:"#094bdd",
      Key1:"block",Key2:"none"
    })
  },
  allt(){
    this.setData({
      is3:"in",is4:"",is5:"",
      color3:"#094bdd",color4:"",color5:"",
      Key3:"block",Key4:"none",
      Key5:"none"
    })
  },
  halft(){
    this.setData({
      is3:"",is4:"in",is5:"",
      color3:"",color4:"#094bdd",color5:"",
      Key3:"none",Key4:"block",
      Key5:"none"
    })
  },
  not(){
    this.setData({
      is3:"",is4:"",is5:"in",
      color3:"",color4:"",color5:"#094bdd",
      Key3:"none",Key4:"none",
      Key5:"block"
    })
  },
  chage(){
    if(is6key==0){
      this.setData({
        is6:"in",
        color6:"#094bdd",
        Key5:"block"
      })
      is6key=1;
    }else{
      this.setData({
        is6:"",
        color6:"",
        Key5:"none"
      })
      is6key=0;
    }

  },
  onecup(){
    if(is7key==0){
      fjvalue+=1;
      this.data.fjvalue=fjvalue;
      this.setData({
        fjvalue:fjvalue,
        is7:"in",
        color7:"#094bdd",
        Key7:"block"
      })
      is7key=1;
    }else{     
      fjvalue-=1;    
       this.data.fjvalue=fjvalue;
      this.setData({
        fjvalue:fjvalue,
        is7:"",
        color7:"",
        Key7:"none"
      })
      is7key=0;
    }

  },
  twocup(){
    if(is8key==0){
      fjvalue+=2;
      this.data.fjvalue=fjvalue;
      this.setData({
        fjvalue:fjvalue,
        is8:"in",
        color8:"#094bdd",
        Key8:"block"
      })
      is8key=1;
    }else{
      fjvalue-=2;
      this.data.fjvalue=fjvalue;
      this.setData({
        fjvalue:fjvalue,
        is8:"",
        color8:"",
        Key8:"none"
      })
      is8key=0;
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      switch(wx.getStorageSync('cupcupfull')){
          case 1:
        this.setData({
        BackgroundUrl:"/assets/Order/BG1.png",
        img:"/assets/Order/O1.png",
        title:"红茶冰椰雪糕",
        t1:"椰子乳I",t1prime:"椰子雪糕",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:14,
      })
      break;
      case 2:
        this.setData({
        BackgroundUrl:"/assets/Order/BG2.png",
        img:"/assets/Order/O2.jpg",
        title:"紫气葡萄",
        t1:"椰子乳I",t1prime:"葡萄",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:17,
      })
      break;
      case 3:
        this.setData({
        BackgroundUrl:"/assets/Order/BG3.png",
        img:"/assets/Order/O3.png",
        title:"芒果昔昔乐",
        t1:"椰子乳I",t1prime:"芒果",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:21,
      })
      break;
      case 4:
        this.setData({
        BackgroundUrl:"/assets/Order/BG4.png",
        title:"乌漆嘛黑",
        img:"/assets/Order/O4.png",
        t1:"椰子乳I",t1prime:"桑葚",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:19,
      })
      break;
      case 6:
        this.setData({
        BackgroundUrl:"/assets/Order/BG6.png",
        img:"/assets/Order/O6.png",
        title:"紫米嘻嘻",
        t1:"椰子乳I",t1prime:"紫米",t11:"I 黑糖珍珠",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:27,
      })
      break;
      case 5:
        this.setData({
        BackgroundUrl:"/assets/Order/BG5.png",
        img:"/assets/Order/O5.png",
        title:"鲜果茶",
        t1:"椰子乳I",t1prime:"鸡屎果",t11:"I 鲜牛奶",t2:"甄选闽北地区特色梅占茗茶搭配冰椰雪糕，清新甘甜兼具浓郁椰香。",price:11,
      })
      break;






      }

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