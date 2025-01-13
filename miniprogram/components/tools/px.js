// 公共函数：获取屏幕宽度（单位：px）
function getScreenWidth() {
  const systemInfo = wx.getSystemInfoSync();
  return systemInfo.windowWidth;
}

// rpx 转 px
function rpxToPx(rpxValue) {
  const screenWidth = getScreenWidth();
  const pxValue = (rpxValue * screenWidth) / 750;
  return pxValue;
}

// px 转 rpx
function pxToRpx(pxValue) {
  const screenWidth = getScreenWidth();
  const rpxValue = (pxValue * 750) / screenWidth;
  return rpxValue;
}

// 导出函数
module.exports = {
  rpxToPx: rpxToPx,
  pxToRpx: pxToRpx,
};