//index.js
//获取应用实例

var common = require("../../common.js")
const app = getApp() 
Page({
  data: {
    text:'init data',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({ 
      url: '../logs/logs'
    })
  },
  //新添加的页面入口导航示例代码
  bindViewDemo:function(){
    wx.navigateTo({
      url: '../demo/demo',
    })
  },
  bindViewCommon: function () {
    wx.navigateTo({
      url: '../common/common',
    })
  },
  bindViewWxkey: function () {
    wx.navigateTo({
      url: '../wxkey/wxkey',
    })
  },  
  bindViewTest: function () {
    wx.navigateTo({
      url: '../test/test',
    })
  },  
  changeText: function () {
    this.setData({
      text: 'changed data'
    }),
      common.sayHi1(),
      common.sayHello1("luo"),
      common.Hello1()
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
