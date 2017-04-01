var app = getApp();
var pic = wx.getStorageSync('pic') || '';

Page({
  data:{
    imgSrc: pic
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  submit: function(e){
    var list = wx.getStorageSync('list') || [];

    wx.saveFile({
      tempFilePath: pic,
      success: function(res) {
        list.push({
          "text": e.detail.value.textarea.trim(),
          "pic": res.savedFilePath,
          "count": parseInt(e.detail.value.likeCount.trim()) || 0,
          "time": Date.now()
        })
        wx.setStorageSync('list', list);
      }
    })

    wx.redirectTo({
      url: '/pages/list/list'
    })
  }
})