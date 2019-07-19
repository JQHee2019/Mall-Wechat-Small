// pages/function/index.js
import { HomeModel } from '../../http/modules/index.js'
const _index = new HomeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [String],
    items: [],
    notices: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    _index.dataList('2', '10').then(res => {
      console.log(res)
    })

    var tImages = ['https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=35cbb2598e0a19d8d403820503fb82c9/34fae6cd7b899e51f6c7d1fc4ca7d933c9950d89.jpg']
    var tItems = [
      { "image": "/images/tabbar_message_n.png", "name": "测试"},
      { "image": "/images/tabbar_message_n.png", "name": "测试" },
      { "image": "/images/tabbar_message_n.png", "name": "测试" },
      { "image": "/images/tabbar_message_n.png", "name": "测试" },
      { "image": "/images/tabbar_message_n.png", "name": "测试" },
      { "image": "/images/tabbar_message_n.png", "name": "测试" },
      { "image": "/images/tabbar_message_n.png", "name": "测试" },
      { "image": "/images/tabbar_message_n.png", "name": "测试" }
    ]
    var tNotices = ['测试一', '测试二']
    this.setData({
      images: tImages,
      items: tItems,
      notices: tNotices
    })
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

  }
})