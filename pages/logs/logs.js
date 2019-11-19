//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    data: {
    text:'init data',
    array:[{text:'init data'}],
    obj:{
      text:'init data'
    },
     
    items: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    array: [1, 2, 3, 4, 5]  

  },
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
