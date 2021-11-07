Page({
  data: {
    stationArray: []
  },
  onLoad() {
    let { stationArray } = getApp().globalData;
    this.setData({
      stationArray
    })
  }
})