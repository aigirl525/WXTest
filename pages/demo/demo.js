// pages/demo/demo.js
Page({ 
    formSubmit:function(e) {
      console.log('form发生了sunbmit事件，携带数据为：',e.detail.value)
  },
    formReset:function() {
      console.log('form发生了reset事件')
    },
  /**
   * 页面的初始数据
   */
  data: { 
      item: {
        index: 0,
        msg: 'this is a template',
        time: '2016-09-15'
      } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var appInstance = getApp()
  console.log(appInstance.globalData.name)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
  
 
})