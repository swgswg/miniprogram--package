// pages/websocket/websocket.js
let SocketTask = null;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        receiveData:null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        SocketTask = wx.connectSocket({
            url: 'ws://127.0.0.1:8000',
            success: function (res) {
                console.log('WebSocket连接创建connectSocket', res);
            }
        });

        SocketTask.onOpen((res) => {
            isOpen = true;
            console.log('监听 WebSocket 连接打开事件onOpen。', res);
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },



})