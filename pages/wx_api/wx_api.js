// pages/wx_api/wx_api.js
import tip from '../../utils/wx_api/WxTip.js';
import wxapi from '../../utils/wx_api/WxApi.js';
import WxRoute from '../../utils/wx_api/WxRoute.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        enable_satellite:false
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
        // wxapi.vibrateLong();
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
    
    onUpload(e){
        console.log(e.detail);
    },
    
    onMarkertap(e){
        console.log(e.detail);
    },
    
    location(e){
        console.log(e);
    }
});