// pages/buy/buyson/buying/buying.js\
var is6key=0,is7key=0,is8key=0;
var amount = 0;

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
    amount:1,
  },
  add(){
       amount +=1;
    this.data.amount=amount;
     console.log(amount);
    this.setData({
       amount:amount,
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
  
  },
  mcup(){
  this.setData({
    is1:"in",is2:"",color:"#094bdd",color2:"",
  })
  },
  lcup(){
    this.setData({
      is1:"",color:"",
      is2:"in",color2:"#094bdd",
    })
  },
  allt(){
    this.setData({
      is3:"in",is4:"",is5:"",
      color3:"#094bdd",color4:"",color5:"",
    })
  },
  halft(){
    this.setData({
      is3:"",is4:"in",is5:"",
      color3:"",color4:"#094bdd",color5:"",
    })
  },
  not(){
    this.setData({
      is3:"",is4:"",is5:"in",
      color3:"",color4:"",color5:"#094bdd",
    })
  },
  chage(){
    if(is6key==0){
      this.setData({
        is6:"in",
        color6:"#094bdd",
      })
      is6key=1;
    }else{
      this.setData({
        is6:"",
        color6:"",
      })
      is6key=0;
    }

  },
  onecup(){
    if(is7key==0){
      this.setData({
        is7:"in",
        color7:"#094bdd",
      })
      is7key=1;
    }else{
      this.setData({
        is7:"",
        color7:"",
      })
      is7key=0;
    }

  },
  twocup(){
    if(is8key==0){
      this.setData({
        is8:"in",
        color8:"#094bdd",
      })
      is8key=1;
    }else{
      this.setData({
        is8:"",
        color8:"",
      })
      is8key=0;
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