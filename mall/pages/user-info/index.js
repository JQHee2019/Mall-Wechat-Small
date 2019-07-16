// pages/user-info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    actions: [{
      name: "打开相机"
    },{
        name: "打开相册"
    }]

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
  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    this.setData({ show: false });
    console.log(event.detail);

  },
  submitClick: function() {
    console.log('提交')
  },
  showMenuAction: function() {
    // this.setData({ show: true });
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var filePath = res.tempFilePaths[0];
        console.log(filePath)
      },
    })
  }
})