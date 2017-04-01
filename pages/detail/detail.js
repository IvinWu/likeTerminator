import {formatTime} from "../../utils/util.js";

var app = getApp();
Page({
  data:{
    detail: {},
    userInfo: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    let list = wx.getStorageSync('list');
    let detail = list[options.id];
    detail.time = formatTime(new Date(detail.time));
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        detail:detail
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})