// pages/indexson/disfree/disfree.js
Page({


  data: {
    items2: ['/assets/元2无门槛.png', '/assets/元4无门槛.png', '/assets/元6无门槛.png', '/assets/元8无门槛.png'],
    modalHidden: true,
    actionSheetHidden: true,
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

  actionSheetTap: function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  
})