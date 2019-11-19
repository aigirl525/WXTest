// pages/common/common.js  
Page({
 
  /**
   * 页面的初始数据
   */
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
    array: [1, 2, 3, 4, 5],
    flag:false
  },
changeText:function(){
   //这样设置this.data.text = 'changed data'是不行的，会出错
  this.setData({
    text:'changed data'
  })
},  
changeItemInArray: function () {
    //可以这样使用setData以修改动态的数据路径
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () { 
  this.setData({
    'obj.text': 'changed data'
  })
},
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  
})
