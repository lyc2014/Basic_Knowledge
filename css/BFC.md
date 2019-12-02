## 学习BFC

> [lyc2014](https://github.com/lyc2014) 2019.04.09

BFC在布局中的应用： 防止margin重叠（塌陷，以最大的为准）； 清楚内部浮动；自适应两（多）栏布局。

### 1、BFC全称

`block formatting context` = `block-level box` + `Formatting Context`

#### Formatting context
BFC: 块级格式化上下文

### 2、BFC的生成
CSS2.1中规定 满足下列css声明之一的元素便会生成BFC。
+ 根元素
+ float的值不为none
+ overflow的值不为visible
+ display的值为inline-block、table-cell、table-caption
+ position的值为absolute或者fixed

### 3. BFC的约束规则

+ 内部的Box会在垂直方向上一个接一个的放置
+ 垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生重叠（塌陷），与方向无关。）
+ 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
+ BFC的区域不会与float的元素区域重叠
+ 计算BFC的高度时，浮动子元素也参与计算
+ BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然