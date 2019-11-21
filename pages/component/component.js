// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'usa',
        value: '美国'
      },
      {
        name: 'chn',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'bra',
        value: '巴西'
      },
      {
        name: 'jpn',
        value: '日本'
      },
      {
        name: 'eng',
        value: '英国'
      },
      {
        name: 'tur',
        value: '法国'
      },
    ],
    checkBoxItems: [{
      name: 'usa',
      value: '美国'
    },
    {
      name: 'chn',
      value: '中国',
      checked: 'true'
    },
    {
      name: 'bra',
      value: '巴西'
    },
    {
      name: 'jpn',
      value: '日本'
    },
    {
      name: 'eng',
      value: '英国'
    },
    {
      name: 'tur',
      value: '法国'
    },
    ],
    radioItems: [{
        name: 'usa',
        value: '美国'
      },
      {
        name: 'chn',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'bra',
        value: '巴西'
      },
      {
        name: 'jpn',
        value: '日本'
      },
      {
        name: 'eng',
        value: '英国'
      },
      {
        name: 'tur',
        value: '法国'
      },
    ],
    focus: false,
    inputValue: '',
    hidden: false
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  checkboxChange1: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkBoxItems.length; i++) { 
      if (checked.indexOf(this.data.checkBoxItems[i].name) !== -1) {
        changed['checkBoxItems[' + i + '].checked'] = true
      } else {
        changed['checkBoxItems[' + i + '].checked'] = false
      }
    } 
    this.setData(changed)
  },
  radioChange: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      console.log('1111：', e.detail.value)
      console.log('11112222：', this.data.radioItems[i].name)
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    console.log('11112222333：', changed)
    this.setData(changed)
  },


  bindButtonTap: function(e) {
    this.setData({
      focus: Date.now(),

    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos)
      //计算光标的位置
      pos = left.replace(/11/g, '2').length
    }
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      //光标在中间 方法可从已有的数组中返回选定的元素。
      var left = e.detail.value.slice(0, pos)
      //计算光标的位置
      pos = left.replace(/11/g, '2').length
    }
    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
    //或者直接返回字符串，光标在最后
    //return value.replace(/11/g, '2')
  },
  bindHideKeyboard: function(e) {
    if (e.detail.value === '123') {
      //收起键盘
      wx.hideKeyboard()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    inputValue
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