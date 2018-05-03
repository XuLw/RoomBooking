// pages/main/main.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    curDate: '',
    startTime: '',
    endTime: '',
    showNotification: true,
    isSearch : false,
    toView:'',
    buildings:['全部','信息楼 ','文馆楼','建筑馆','一号馆','生科楼'],
    chooseBuilding : '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var d = new Date();
      this.setData({
        curDate: `${d.getUTCFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${d.getUTCDate()}`,
        startTime:`${("0" + (d.getHours() )).slice(-2)}:${("0" + (d.getMinutes() )).slice(-2)}`,
        endTime: `${("0" + (d.getHours()+1)).slice(-2)}:${("0" + (d.getMinutes())).slice(-2)}`
      });
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

  bindDateChange: function (e) {
    this.setData({
      curDate: e.detail.value
    });
  },


  bindStartTimeChange: function (e) {
    this.setData({
      startTime: e.detail.value
    });
  },

  bindEndTimeChange:function (e){
    this.setData({
      endTime: e.detail.value
    })
  },


  catchSearchTap: function (e) {
    this.setData({
      isSearch : true,
      toView: 'search-result'
    });
   
  },

  onCancelTap: function () {
    this.setData({
      showNotification: false
    });
  },

  onHeadImageTap: function (){
    this.setData({
      showNotification:true
    });
  },

  selectBuilding:function(e){
    this.setData({
      chooseBuilding: this.data.buildings[e.detail.value]
    });
  }
})