// pages/reserved/rederved.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookedRooms: []
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
    //获取已经预定的房间记录
    this.setData({
      bookedRooms: getApp().globalData.bookedRooms
    });

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

  topOnReserved: function () {
    wx.navigateTo({
      url: 'order/order'
    })
  },
  cancelOrder: function (e) {
    this.data.bookedRooms.splice(e.currentTarget.id, 1);
    bookedRooms: getApp().globalData.bookedRooms.splice(e.currentTarget.id,1);
    this.setData({
      bookedRooms: this.data.bookedRooms
    });

    wx.showToast({
      title: '取消成功！',
    });

  }
})