# Web Components

对于一个前端开发者，日常中使用组件库都是非常常见的事情，以此来简化开发流程。但是，像 AntDesign 只能用于 React，Element Plus 只能用于 Vue， 甚至只能用于 Vue3。

在前端领域上，组件库基本上是与前端框架深度绑定的，如果大多数时候只使用一种前端框架的话影响并不大，但如果经常在多个框架切换就不太方便了。

而 Iconify 确是一个可以跨框架使用的组件库，它提供了一套统一的图标库，可以在任何前端框架甚至原生 HTML 中使用，而它所使用到的技术就是 Web Components。

Web Components 主要由三大技术组成：

1. Custom Elements
2. Shadow DOM
3. HTML Templates

## Custom Elements

使用 `class` 关键字创建组件，并继承 `HTMLElement` 类，然后使用 `customElements.define(name, constructor)` 方法注册组件。

`name`： 组件名，且必须是带有短横线的小写字母，如 `moan-com`。
`constructor`： 即构造类，如 `MoanCom`。

```ts
class MoanCom extends HTMLElement {}

customElements.define('moan-com', MoanCom)
```

然后就可以在页面中引入了

### 生命周期 lifecycle callback

- `connectedCallback`：当元素被插入到 DOM 时调用。
- `disconnectedCallback`：当元素从 DOM 中删除时调用。
- `adoptedCallback`：当元素被移动到新的文档时调用。
- `attributeChangedCallback`：当元素的属性被添加、移除或更改时调用。
  - `observedAttributes`：返回一个数组，包含需要监听的属性名。

![moan-com-lifecycle](@/demo/image/moan-com-lifecycle.png)

如果想要为组件添加子元素，可以在 `connectedCallback` 中使用 `appendChild` 方法。

```js
class MoanCom extends HTMLElement {
  connectedCallback() {
    const button = document.createElement('button')
    button.textContent = 'Click Me'
    this.appendChild(button)

    button.addEventListener('click', () => {
      alert('Hello, World!')
    })

    // add style
    const style = document.createElement('style')
    style.textContent = `
      button {
        padding: 10px 20px;
        border: 1px solid #000;
        background-color: #f0f0f0;
        cursor: pointer;
      }
    `
    this.appendChild(style)
  }
}
```

但是这种方式添加样式会造成全局样式污染，所以就需要使用到 Shadow DOM 了。

## Shadow DOM

> Shadow DOM 的用途在于封装和隔离。它会在元素内附加一棵“影子” DOM 树，并让这棵树的内部与文档其他部分隔绝。

- `Shadow host`：Shadow DOM 的宿主元素。
- `Shadow tree`：Shadow DOM 的内部 DOM 树。
- `Shadow boundary`：Shadow DOM 的边界。
- `Shadow root`：Shadow DOM 的根节点。

![shadow-dom](@/demo/image/shadow-dom.png)

使用 `attachShadow` 方法创建 Shadow DOM，其返回到是 shadow root 的引用，参数为 `{ mode: 'open' | 'closed' }`，`open` 表示可以通过 `host.shadowRoot` 访问到 Shadow Root，`closed` 表示无法访问。

```js
class MoanCom extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })

    const button = document.createElement('button')
    button.textContent = 'Click Me'
    shadow.appendChild(button)

    button.addEventListener('click', () => {
      alert('Hello, World!')
    })

    const style = document.createElement('style')
    style.textContent = `
      button {
        padding: 10px 20px;
        border: 1px solid #000;
        background-color: #f0f0f0;
        cursor: pointer;
      }
    `
    shadow.appendChild(style)
  }
}
```

使用了 Shadow DOM 之后，就不会造成全局样式污染了。同时全局样式也无法影响到 Shadow DOM 内部。

同时 Shadow DOM 也隔离了js，所以无法通过 `document.querySelector` 获取到 Shadow DOM 内部的元素。

## HTML Templates

HTML templates 涉及两个标签：`<template>` 和 `<slot>`。前者包裹的是页面模板，后者是模板中的的占位符。

`<template>` 内部包含 HTML 片段，默认不显示，其中的样式也不会影响所在文档外观。

如何使用 `<template>`？

1. 获取 `<template>` 实例（通过 document.querySelector() 等方法）
2. 通过实例的 content 属性获取其中包含的 HTML 片段，类型是 DocumentFragment
3. 使用片段的 cloneNode() 方法复制新节点

## 最后

Web Components 是原生技术，它和前端框架是互补而非竞争关系。

现在的前端框架对 Web Component 多少都有一些支持。比如 Vue 3 的 defineCustomElement() 函数可以创建 Web Components。
