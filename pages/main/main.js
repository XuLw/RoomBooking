// pages/main/main.js
var roomData = require("../../utils/util.js");

var rooms = roomData.dataList.rooms;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    curDate: '',
    curTime: '',
    startTime: '',
    endTime: '',
    showNotification: true,
    isSearch: false,
    toView: '',
    isSearchTap: false,
    buildings: ['全部', '信息楼', '文馆楼', '建筑楼', '一号馆', '生科楼'],
    chooseBuilding: '全部',
    selectRooms: [],

    status: {
      hasMultimedia: false,
      hasAircondition: false,
      hasBlackboard: false
    },
    people: 4
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
    var d = new Date();
    this.setData({
      curDate: `${d.getUTCFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${d.getUTCDate()}`,
      curTime: `${("0" + (d.getHours())).slice(-2)}:${("0" + (d.getMinutes())).slice(-2)}`,
      endTime: `${("0" + (d.getHours() + 1)).slice(-2)}:${("0" + (d.getMinutes())).slice(-2)}`,
      startTime: `${("0" + (d.getHours())).slice(-2)}:${("0" + (d.getMinutes())).slice(-2)}`
    });

    rooms = roomData.dataList.rooms;
    this.getRooms();
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

  bindEndTimeChange: function (e) {
    this.setData({
      endTime: e.detail.value
    })
  },


  catchSearchTap: function (e) {
    this.setData({
      isSearch: true
    });
    this.setData({
      toView: 'search-result'
    });



  },

  onCancelTap: function () {
    this.setData({
      showNotification: false
    });
  },

  onHeadImageTap: function () {
    this.setData({
      showNotification: true
    });
  },

  selectBuilding: function (e) {
    this.setData({
      chooseBuilding: this.data.buildings[e.detail.value]
    });
    this.getRooms();
  },

  selectStatus: function (e) {

    var checkItems = ["multimedia", "aircondition", "blackboard"];
    var sta = [false, false, false];
    for (var i = 0; i < checkItems.length; i++) {
      if (e.detail.value.indexOf(checkItems[i]) != -1) {
        sta[i] = true;
      }
    }
    this.setData({
      status: {
        hasMultimedia: sta[0],
        hasAircondition: sta[1],
        hasBlackboard: sta[2]
      }
    });

    this.getRooms();
  },
  selectPeople: function (e) {
    this.setData({
      people: e.detail.value
    });
    this.getRooms();
  },

  getRooms: function (e) {

    var sRooms = [];

    for (var i = 0; i < rooms.length; i++) {
      if (rooms[i].isBooked === false
        && (this.data.chooseBuilding === "全部" || this.data.chooseBuilding === rooms[i].building)
        && (this.data.status.hasAircondition === false || this.data.status.hasAircondition === rooms[i].airConditioin)
        && (this.data.status.hasBlackboard === false || this.data.status.hasBlackboard === rooms[i].blackBoard)
        && (this.data.status.hasMultimedia === false || this.data.status.hasMultimedia === rooms[i].hasMultimedia)
        && (this.data.people <= rooms[i].people)
        && (this.testFunc(rooms[i]))
      ) {
        sRooms.push(rooms[i]);
      }
    }
    this.setData({
      selectRooms: sRooms
    });
  },

  roomBooking: function (e) {
    //预定了房间，将

    if (getApp().globalData.orderNum > 0) {
      getApp().globalData.orderNum--;
      var room = this.data.selectRooms[e.currentTarget.id];

      room.date = this.data.curDate;
      room.stime = this.data.startTime;
      room.etime = this.data.endTime;

      getApp().globalData.bookedRooms.push(room);

      for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].building === room.building && rooms[i].roomNum === room.roomNum) {
          // rooms[i].isBooked = true;
        }
      }

      wx.showToast({
        title: '预定成功！',
      });

      this.getRooms();
    }else{
      wx.showModal({
        title: '提示',
        content: '每个人最多同时预定3个会议室',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },

  testFunc:function(e){
    var room = getApp().globalData.bookedRooms;
    for (var i = 0; i < room.length; i++){
      if (room[i].building === e.building && room[i].roomNum === e.roomNum){

        return false;
      }
    }
    return true;
  }
  

})