// app.js
import { stationArray } from './data/station'
// const { stationArray } = require('./data/station')

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.globalData.stationArray = stationArray
  },
  globalData: {
    userInfo: null,
    stationArray: []
  }
})
