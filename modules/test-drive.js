const testDrive = () => {
  wx.showModal({
    title: '抱歉',
    content: '暂不支持预约试驾',
    showCancel: false,
    confirmText: '知道了',
    confirmColor: '#000',
  });
};

export default testDrive;