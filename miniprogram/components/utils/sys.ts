/**
 * 获取tabbar信息（用于自定义tabbar, 或者吸顶）
 */
export function getNavBarInfos(): {
  navBarHeight: number,
  menuRight: number,
  menuTop: number,
  menuHeight: number
} {
	wx.hideTabBar({})
	// 获取系统信息
	const systemInfo = wx.getSystemInfoSync();
	// 胶囊按钮位置信息
	const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
	// 导航栏高度 = 状态栏高度 + 44
	return {
		navBarHeight: systemInfo.statusBarHeight + 44,
		menuRight: systemInfo.screenWidth - menuButtonInfo.right,
		menuTop: menuButtonInfo.top,
		menuHeight: menuButtonInfo.height
	}
}
