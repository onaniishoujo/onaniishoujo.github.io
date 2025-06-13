// 获取图片元素
var img = document.getElementById("navbar");

// 计算需要滑动的距离
var distance = 40;

var opacityValue = 0;
img.style.opacity = opacityValue.toString();

// 监听滚动事件
window.addEventListener("scroll", function() {
// 获取页面滚动的距离
var scrollDist = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

// 根据滚动距离计算不透明度
var opacityValue = (scrollDist / distance);

// 如果不透明度小于 0，设置为 0
if(opacityValue < 0) {
opacityValue = 0;
}

// 应用不透明度到图片
img.style.opacity = opacityValue.toString();
});