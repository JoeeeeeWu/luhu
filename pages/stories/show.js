const app = getApp();

Page({
  data: {
    entity: null,
  },
  onLoad(options) {
    const id = options.id;
    const entity = app.globalData.stories.filter(item => item.id == id);
    this.setData({
      entity: entity[0],
    });
    wx.setNavigationBarTitle({
      title: this.data.entity.header,
    });
  },
});