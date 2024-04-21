// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //此处为进度条相关配置
    progress: 49,
    color: '#07C160',
    activeColor: '#fff',
    borderRadius: '100',//圆角
    strokeWidth: '9rpx',//进度条粗细

    // 用户信息
    userInfo: {
      username: "00000",
      password: "23333",
      nike: "夜倾",
      avatar: "/assets/mine/touxiang.png",
      pandacoin: 50,
      coupon: 20,
      level: 2,
      expValue: 85,
      createDate: "2024-03-30",
      phone: "18166882589",
      sex: "男",
      birthday: "2024-2-28",
    },

    day: 0,//创建天数
    // 成就名称
    levelName: [
      "迷路Panda",
      "新生Panda",
      "好奇Panda",
      "饮茶Panda",
      "茶艺Panda",
      "茶道Panda",
      "黑金Panda",
    ],

    // 经验值数组
    levelExp: [],

    // 应用数据
    apps: [
      {
        img: "/assets/mine/商城.png",
        appDes: "熊猫币商城",
        url: "/pages/mine/pandaShopping/pandaShopping"
      },
      {
        img: "/assets/mine/礼品卡.png",
        appDes: "礼品卡",
        url: "/pages/mine/card/card"
      },
      {
        img: "/assets/mine/券码兑换.png",
        appDes: "券码兑换"
      },
      {
        img: "/assets/mine/z.png",
        appDes: "信息"
      },
      {
        img:"/assets/mine/zz.png",
        appDes:"悦己计划",
        url:"/pages/indexson/friend/friend"
      },
      {
        img: "/assets/mine/会员任务.png",
        appDes: "会员任务"
      },
      {
        img: "/assets/mine/福利.png",
        appDes: "社区福利"
      },
      {
        img: "/assets/mine/个人资料.png",
        appDes: "个人资料",
        url:"/pages/mine/more/userdata/userdata"
      },
      {
        img: "/assets/mine/加盟申请.png",
        appDes: "加盟申请"
      },
      {
        img: "/assets/mine/联系客服.png",
        appDes: "联系客服"
      },
      {
        img: "/assets/mine/我的勋章.png",
        appDes: "我的勋章",
        url:"/pages/mine/medals/medal",

      },
      {
        img: "/assets/mine/更多.png",
        appDes: "更多",
        url:"/pages/mine/more/more"
      },
    ]

  },

  //获取注册天数
  getCreateDay() {
    // 注册时间
    const targetDate = new Date(this.data.userInfo.createDate);
    // 当前时间
    const currentDate = new Date();

    const timeDiff = currentDate.getTime() - targetDate.getTime();

    const day = Math.ceil(timeDiff / (1000 * 3600 * 24))
    console.log(day);
    return day
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 缓存登陆信息
    wx.setStorageSync('userInfo', this.data.userInfo)

    // 缓存等级数组
    wx.setStorageSync('levelName', this.data.levelName)

    let userInfo = wx.getStorageSync('userInfo');
    // 注册日期距今
    let theDay = this.getCreateDay()

    // 经验数组
    let ExpArr = [
      20, 40, 100, 200, 310, 430, 560
    ];
    wx.setStorageSync('ExpArr', ExpArr);

    //经验值
    let expValue = this.data.userInfo.expValue
    // console.log((expValue / ExpArr[userInfo.level]) + "进度条");

    // 进度条
    let pro = Math.floor((expValue / ExpArr[userInfo.level]) * 100)

    this.setData({
      day: theDay,        //距离今天的天数
      levelExp: ExpArr,   //经验值数组
      progress: pro       //进度条百分比
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