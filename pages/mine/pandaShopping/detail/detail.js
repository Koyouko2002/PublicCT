// pages/mine/pandaShopping/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
   data:{
    info:[
     
      {
        source:"消费赠送熊猫币",
        time:"2024-04-09 10:14:10",
        score:10,
     },
     {
      source:"消费赠送熊猫币",
      time:"2024-04-08 12:30:09",
      score:14,
   },
   {
    source:"消费赠送熊猫币",
    time:"2024-04-07 08:20:05",
    score:13,
 },
  {
         source:"消费赠送熊猫币",
         time:"2024-04-06 12:17:09",
         score:8,
      },
      {
        source:"消费赠送熊猫币",
        time:"2024-04-05 12:17:09",
        score:5,
     },
     {
      source:"消费赠送熊猫币",
      time:"2024-04-01 17:17:09",
      score:5,
   },
   {
    source:"消费赠送熊猫币",
    time:"2024-03-31 16:11:09",
    score:166,
 },
 {
  source:"消费赠送熊猫币",
  time:"2024-03-30 12:11:07",
  score:300,
},
    ]
  },
  sumScores(data){
    let totalScore=0;
    for (let i = 0; i < data.length; i++) {
      totalScore += data[i].score;
    }
    return totalScore;s

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const total = this.sumScores(this.data.info);
    this.setData({
      total:total
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