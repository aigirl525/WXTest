// pages/swiper/swiper.js

var initData = 'this is first line\nthis is second line'
var extraLine = [];
var types = ['default', 'primary', 'warm']
for (var i = 0; i < types.length; i++) {
  (function (type) {
    Page[type] = function(e){
      var key = type + 'Size'
      var changeData = {}
      changeData[key] = this.data[key] === 'default'?'mini':'default'
      this.setData(changeData)
    }
  })(types[i])
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["/images/hangup_normal.png",
      "/images/header.png",
      "/images/header2.png",
      "/images/intro.png"
    ],
    indicatoeDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'],
    iconType: ['success', 'info', 'warm', 'waiting', 'safe_success', 'safe_warm', 'success_circle',
      'success_no_circle', 'waiting_circle', 'circle', 'download', 'info_circle', 'cancel', 'search', 'clear'
    ],

    text: initData,

    defaultSize: 'default',
    primarySize: 'default',
    warmSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  
  setDisabled:function (e) {
    this.setData({
     disabled:!this.data.disabled
    })
  },

  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },


  add: function(e) {
    extraLine.push("other line")
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },



  changeIndicatorDots: function(e) {
    this.setData({
      indicatoeDots: !this.data.indicatoeDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intercalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
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