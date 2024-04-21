// pages/indexson/disfree/disfree.js
Page({


  data: {
    items2: ['/assets/元2无门槛.png', '/assets/元4无门槛.png', '/assets/元6无门槛.png', '/assets/元8无门槛.png'],
    items3: [
      '1、此活动仅限在“ 茶百道点餐+”小程序参与，仅限“茶百道点餐+”女性会员参与，活动期间内每个符合条件的ID最多领取1次;',
      '2、所有个人资料性别的填写修改和新会员注册完善个人信息后，均将在填写后第二天开始正式生效，生效后方可领券;', 
      '3、此活动仅限2024年4月10日00:00- 4月30日23:59可参与，会员仅可在上述期限内领取折扣券;', 
      '4、点击页面下方[立即领券] ，即可参与活动，领取1张暖心陪伴礼-指定饮品中杯8.8元券(黑糖珍珠奶茶中杯);',
      '5、凭此券在购买黑糖珍珠奶茶中杯时，可享8.8元购买(不包括保温袋、0卡糖);',
      '6、指定饮品中杯8.8元券，最高抵扣约1.2元.(实际优惠价格以门店菜单价为基准计算),活动期间不限量，具体使用规则以券详情页面为准;', 
      '7、此活动优惠券自实际领取到账之日起至2024年4月30日23:59有效，过期自动作废,不退不补，会员未在活动期间领取的，视为放弃;', 
      '8、此活动优惠券仅限“茶百道点餐+”小程序自提下单时使用，全国门店均可使用，部分门店因特殊原因可能临时无法使用，具体请咨询门店;',
      '9、此活动优惠券限一次性使用，单笔订单限使用1张，不兑换现金、不开票、不找零、不与其他优惠券/优惠活动同享;',
      '10、若发生优惠券抵扣订单退款时，该优惠券将退回至["茶百道点餐+"小程序-我的-优惠券]，抵扣金额不予退回;', 
      '11、 此次活动优惠券在领取后将自动发送至，会员账户，可在[“ 茶百道点餐+”小程序-我的-优惠券]查看;', 
      '12、 任何参与活动的用户不得修改页面参数，或者以任何机器人软件、爬虫软件、刷屏软件、任何非人工方式参与活动，一经发现立即取消参与和领奖资格，且该用户于活动中获得的奖励全部回收;',
    ],
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