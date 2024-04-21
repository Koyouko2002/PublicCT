// pages/login1/login1.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
   id:0,
   password:0
  },
  getID(e){
     this.id = e.detail.value
    console.log(this.id);
  },
  getPassword(e){
    this.password = e.detail.value
    console.log(this.password);
  },
  Login(){
  
  if(this.id=="Koyouk" || this.password=="123"){
    wx.switchTab({
      url:"/pages/index/index"
    });
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  }else{
     wx.showModal({
        title: '登录失败',
        content: '账号或密码错误！',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
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


