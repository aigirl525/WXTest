// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    object: {
      key: 'Hello '
    },
    array: ['MINA'],
    staffA: {
      firstName: 'Hulk',
      lastName: 'Hu'
    },
    staffB: {
      firstName: 'Hulk1',
      lastName: 'Hu1'
    },
    staffC: {
      firstName: 'Hulk2',
      lastName: 'Hu2'
    },
    e: 1,
    f: 2,
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    },
    item: {
      index: 0,
      msg: 'this is a template',
      time: '20160915'
    },
  },
  tapName: function(event) {
    console.log(event)
  },
  bindViewTap: function(event) {
    console.log(event.target.dataset.alphaBeta)
    console.log(event.target.dataset.alphabeta)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})