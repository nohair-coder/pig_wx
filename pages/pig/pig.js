import { intakeArray } from '../../data/intake'

Page({
  data: {
    nodeArray: [],
    nodeIndex: 0,
    pigArray: [],
    pigIndex: 0,
    intake: []
  },
  onLoad() {
    const { stationArray } = getApp().globalData;
    const defaultStation = stationArray[0].node
    const defaultPig = stationArray[0].pigs[0]
    this.setData({
      nodeArray: stationArray.map(item => item.node),
      pigArray: stationArray[0].pigs,
      // 这里
      intake: intakeArray[defaultStation][defaultPig]
    })
  },
  bindNodeChange(e) {
    const { stationArray } = getApp().globalData;
    const { value } = e.detail
    const defaultStation = stationArray[value].node
    const defaultPig = stationArray[value].pigs[0]
    this.setData({
      nodeIndex: value,
      pigArray: stationArray[value].pigs,
      intake: intakeArray[defaultStation][defaultPig]
    })
  },
  bindPigChange(e) {
    const { stationArray } = getApp().globalData;
    const { nodeArray, nodeIndex } = this.data
    const { value } = e.detail
    const nowPig = stationArray[nodeIndex].pigs[value]
    this.setData({
      pigIndex: value,
      intake: intakeArray[nodeArray[nodeIndex]][nowPig]
    })
  }
})