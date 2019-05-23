// pages/uploadFile/uploadFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

    btn:function(){
        wx.chooseImage({
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                const uploadTask = wx.uploadFile({
                    url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        'user': 'test'
                    },
                    success: function (res) {
                        var data = res.data
                        //do something
                    }
                })
                uploadTask.onProgressUpdate((res) => {
                        console.log('上传进度', res.progress)
                        console.log('已经上传的数据长度', res.totalBytesSent)
                        console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
                })
                uploadTask.abort() // 取消上传任务

            }
        })
    }
})
