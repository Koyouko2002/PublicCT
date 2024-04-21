// pages/indexson/disfree/disfree.js
Page({


  data: {
    items2: ['/assets/元2无门槛.png', '/assets/元4无门槛.png', '/assets/元6无门槛.png', '/assets/元8无门槛.png'],
    modalHidden: true,
    actionSheetHidden: true,
    doommData: [],/*弹幕数据*/
  },
  fritit: function () {
    wx.showToast({
      title: '活动过于火爆请稍后重试', icon: 'none', duration: 1000,
    });
  },  
  /*-------------------规则弹窗的显示及取消--------------------*/ 
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

  /*-----------------上拉菜单的触发及动作------------------*/ 
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
  play: function () {
    wx.showToast({
      title: '保存成功', icon: 'none', duration: 1000 
    });
    this.setData({
    actionSheetHidden: !this.data.actionSheetHidden,
    })    
  },  

  

/*---------------------弹幕的触发-------------------------------*/ 
  onLoad: function() {
    // 开始定时执行代码
    this.startTimer();
  },
  // 定义定时执行函数
  startTimer: function() {
    // 保存当前页面的引用
    var that = this;
    // 设置每隔2秒执行一次
    this.timer = setInterval(function() {
      // 直接调用 bindbt 函数，并指定 this 的上下文为当前页面
      that.bindbt();
    }, 800); // 时间间隔(毫秒)
  },
  // 在页面销毁时清除定时器，防止内存泄漏
  onUnload: function() {
    clearInterval(this.timer);
  },
  bindbt: function() {
    doommList.push(new Doomm("你是我的小苹果", Math.floor(Math.random() * (80 - 10 + 1)) + 10, Math.ceil(Math.random() * 10), getRandomColor(), this));
    this.setData({
      doommData: doommList
    });
  },

})

/*-------------------------------弹幕数据的处理----------------------------*/ 
var doommList = [];
var i = 0;
class Doomm {
  constructor(text, top, time, color, page) {
    this.text = text + i;
    this.top = top;
    this.time = time;
    this.color = color;
    this.display = true;
    this.page = page; // 保存页面的引用
    this.id = i++;
    let that = this;
    setTimeout(function() {
      doommList.splice(doommList.indexOf(that), 1);
      // 在这里使用保存的页面引用来调用 setData 方法
      that.page.setData({
        doommData: doommList
      });
    }, this.time * 1000);
  }
}
function getRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}