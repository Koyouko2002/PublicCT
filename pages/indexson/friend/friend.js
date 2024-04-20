// pages/indexson/friend/friend.js
Page({
  data: {
    modalHidden: true,
    },
    ifregister: function () {
      var that = this;
        that.setData({
          modalHidden:false
        })
    },
    confirmChange: function () {
      this.setData({
        modalHidden: true
      })
    },
    playl: function () {
      wx.showToast({
        title: '很抱歉~暂不满足领取条件', icon: 'none', duration: 1000 
      });
    },  
})