// pages/page3/page3.js
Page({

    /**
     * 页面的初始数据
     */
   
    data: {
    
        item1:41,
        item2:0
    
    },
    refresh: function(){
        var that = this
        wx.showLoading({
            title: '',
          
          })
          setTimeout(function () {
            wx.hideLoading({
                success: (res) => {
                    that.setData({
                    item1: that.data.item1 - 8,
                    item2: that.data.item2 + 1})
                }
              })
          }, 1000)
        
          
         
        },
    
    
    /**
     * 生命周期函数--监听页面加载
     *     wx.showLoading({
            title: '',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 2000)
       
      
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})