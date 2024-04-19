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
    },
    {
      pic:"/assets/coinMall/dingdan.png",
      txt:"熊猫币订单",
  },
  {
    pic:"/assets/coinMall/guize.png",
    txt:"熊猫币规则",
},
  ]
,
  tickets:[
    {
      pic:"/assets/元2无门槛.png"  ,
      tip:"2元无门槛优惠券",
      text1:"100熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元4无门槛.png"  ,
      tip:"4元无门槛优惠券",
      text1:"150熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元6无门槛.png"  ,
      tip:"6元无门槛优惠券",
      text1:"200熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元8无门槛.png"  ,
      tip:"8元无门槛优惠券",
      text1:"400熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元2无门槛.png"  ,
      tip:"2元无门槛优惠券",
      text1:"100熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元2无门槛.png"  ,
      tip:"2元无门槛优惠券",
      text1:"100熊猫币",
      text2:"剩余78452",
    },
  ],
  
  recommend:[
    {
      pic:"/assets/元2无门槛.png"  ,
      tip:"2元无门槛优惠券",
      text1:"100熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元4无门槛.png"  ,
      tip:"4元无门槛优惠券",
      text1:"150熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元6无门槛.png"  ,
      tip:"6元无门槛优惠券",
      text1:"200熊猫币",
      text2:"剩余78452",
    },
    {
      pic:"/assets/元8无门槛.png"  ,
      tip:"8元无门槛优惠券",
      text1:"400熊猫币",
      text2:"剩余78452",
    }
  ],
  only:[
    { 
      pic:"/assets/元8无门槛.png"  ,
      tip:"8元无门槛优惠券",
      text1:"400熊猫币",
      text2:"剩余78452",

  },
  { 
    pic:"/assets/元4无门槛.png"  ,
    tip:"4元无门槛优惠券",
    text1:"400熊猫币",
    text2:"剩余78452",

},
{ 
  pic:"/assets/元2无门槛.png"  ,
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