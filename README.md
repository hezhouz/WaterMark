# 实现无法删除的水印

## 实现思路

使用 [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 来监视对 DOM 树所做更改， 如果删除了就重新绘制一遍

水印是由 [Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) 绘制成型, 根据配置宽高，旋转角度，颜色，字体，等配置生成一个 canvas 图片平铺浏览器


### 参考文档

https://juejin.cn/post/6854573209920995336