// pages/passwrod.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TYPE_NUMBER: "number",
    TYPE_MIX: "mix",
    btnEnable: true
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

  /**
   * 密码风格变更
   */
  onPasswordTypeChange: function (e) {
    var type = e.detail.value;
    wx.showToast({
      title: 'type:' + type,
      icon: "none",
      duration: 1500
    })
  },

  /**
   * 生成密码
   */
  onCreatePassWord: function () {
    wx.showToast({
      title: '生成密码',
      icon: "none",
      duration: 1500
    })
  }
})