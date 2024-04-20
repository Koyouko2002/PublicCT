// pages/mine/pandaShopping/pandaShopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexActive:0,
    list:[],
    /*规则、订单、明细 */
    rule:[
      {
        pic:"/assets/coinMall/mingxi.png",
        txt:"熊猫币明细",
        url:"/pages/mine/pandaShopping/detail/detail"
    },
    {
      pic:"/assets/coinMall/dingdan.png",
      txt:"熊猫币订单",
      url:"/#"
  },
  {
    pic:"/assets/coinMall/guize.png",
    txt:"熊猫币规则",
    url:"/pages/mine/pandaShopping/rule/rule"
},
  ]
,
tickets:[ {
  pic:"/assets/coinMall/ticket (1).jpg"  ,
  tip:"现蒸芋头系列饮品…",
  text1:"300熊猫币",
  text2:"剩余35452",
  url:"/pages/mine/pandaShopping/discounts/discount",
},
{
  pic:"/assets/coinMall/ticket (2).jpg"  ,
  tip:"抹茶布丁8.8折",
  text1:"300熊猫币",
  text2:"剩余63252",
  url:"/pages/mine/pandaShopping/discounts/discount",
},
{
  pic:"/assets/coinMall/ticket (3).jpg"  ,
  tip:"草莓奶的8.8折",
  text1:"300熊猫币",
  text2:"剩余98520",
  url:"/pages/mine/pandaShopping/discounts/discount",
},
{
  pic:"/assets/coinMall/ticket (4).jpg"  ,
  tip:"真鲜奶茶/轻乳茶…",
  text1:"300熊猫币",
  text2:"剩余35452",
  url:"/pages/mine/pandaShopping/discounts/discount",
},
  {
    pic:"/assets/coinMall/ticket (5).jpg"  ,
    tip:"新品8.5折",
    text1:"150熊猫币",
    text2:"剩余78985",
    url:"/pages/mine/pandaShopping/discounts/discount",
  },
  {
    pic:"/assets/coinMall/ticket (9).jpg"  ,
    tip:"指定饮品3元优惠券",
    text1:"100熊猫币",
    text2:"剩余78452",
    url:"/pages/mine/pandaShopping/discounts/discount",
  }
],/*

 */
  recommend:[
    {
      pic:"/assets/coinMall/youhuiquan.png"  ,
      tip:"2元无门槛优惠券",
      text1:"100熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/coinMall/youhuiquan.png"  ,
      tip:"4元无门槛优惠券",
      text1:"150熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/coinMall/youhuiquan.png"  ,
      tip:"6元无门槛优惠券",
      text1:"200熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/coinMall/youhuiquan.png"  ,
      tip:"8元无门槛优惠券",
      text1:"400熊猫币",
      text2:"剩余78452",
    }
  ],
  only:[
    { 
      pic:"/assets/coinMall/youhuiquan.png"  ,
      tip:"8元无门槛优惠券",
      text1:"400熊猫币",
      text2:"剩余78452",

  },
  { 
    pic:"/assets/coinMall/youhuiquan.png"  ,
    tip:"4元无门槛优惠券",
    text1:"400熊猫币",
    text2:"剩余78452",

},
{ 
  pic:"/assets/coinMall/youhuiquan.png"  ,
  tip:"2元无门槛优惠券",
  text1:"400熊猫币",
  text2:"剩余78452",

},
]

  },
  changeTab(e){
    let id=e.currentTarget.dataset.id;
    let newList=[
      this.data.tickets,
      this.data.recommend,
      this.data.only
    ]
    this.setData({
      CoinActive:id,
      list:newList[id]

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
this.setData({
  list:this.data.tickets
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