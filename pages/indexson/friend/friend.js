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
  
})