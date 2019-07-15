// components/mine/mine-cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftIcon: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    rightIcon: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemTapAction: function(e) {
      console.log(e)
      let name = e.currentTarget.id
      this.triggerEvent('parentEvent', name)
    }
  }
})
