// pages/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [String]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var datas = ['name', 'name2']
    // 处理数据
    this.setData({
      datas: datas
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
    // 标题栏显示刷新图标，转圈圈
    wx.showNavigationBarLoading()
    console.log('下拉')
    setTimeout(() => {
      // 标题栏隐藏刷新转圈圈图标
      wx.hideNavigationBarLoading()

    }, 2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})