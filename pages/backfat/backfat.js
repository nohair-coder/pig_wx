import { backfatArray } from '../../data/backfat' 

Page({
  data: {
    nodeArray: [],
    nodeIndex: 0,
    pigArray: [],
    backfatItems: {}
  },
  onLoad() {
    const { stationArray } = getApp().globalData
    this.setData({
      nodeArray: stationArray.map(item => item.node),
      pigArray: stationArray[0].pigs,
      backfatItems: backfatArray[stationArray[0].node]
    })
  },
  bindNodeChange(e) {
    const { stationArray } = getApp().globalData
    const { value } = e.detail
    this.setData({
      nodeIndex: value,
      pigArray: stationArray[value].pigs,
      backfatItems: backfatArray[stationArray[value].node]
    })
  },
})