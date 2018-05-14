// pages/mycenter/mycenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name: '',
     institude: '',
     duties: '',
     phone: '',
     cell: '',
     office:''
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
    var that = this;
    wx.getStorage({
      key: 'name',
      success: function (res) {
        console.log(res.data)
        that.setData({
          name: res.data
        })
      }
    })
    var that = this;
    wx.getStorage({
      key: 'institude',
      success: function (res) {
        console.log(res.data)
        that.setData({
          institude: res.data
        })
      }
    }) 
    var that = this;
    wx.getStorage({
      key: 'duties',
      success: function (res) {
        console.log(res.data)
        that.setData({
          duties: res.data
        })
      }
    })
    var that = this;
    wx.getStorage({
      key: 'phone',
      success: function (res) {
        console.log(res.data)
        that.setData({
          phone: res.data
        })
      }
    })
    var that = this;
    wx.getStorage({
      key: 'cell',
      success: function (res) {
        console.log(res.data)
        that.setData({
          cell: res.data
        })
      }
    })
    var that = this;
    wx.getStorage({
      key: 'office',
      success: function (res) {
        console.log(res.data)
        that.setData({
          office: res.data
        })
      }
    })
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
  tapOnName:function(){
    wx.navigateTo({
      url: '../myname/myname'
    })
  },
   tapOnInstitude: function () {
    wx.navigateTo({
      url: '../institude/institude'
    })
  },
   tapOnDuties: function () {
     wx.navigateTo({
       url: '../duties/duties'
     })
   },
    tapOnPhone: function () {
     wx.navigateTo({
       url: '../phonenumber/phonenumber'
     })
   },
    tapOnCell: function () {
      wx.navigateTo({
        url: '../cellnumber/cellnumber'
      })
    },
     tapOnOffice: function () {
      wx.navigateTo({
        url: '../office/office'
      })
    }
})