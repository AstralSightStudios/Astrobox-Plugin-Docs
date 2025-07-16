# UI

## 功能简介
实现插件设置页的UI渲染。

## 权限声明
使用此接口需要向manifest的permissions中加入`ui`权限

## 相关类型
- **PluginUIButton** – `{ primary: boolean; text: string; callback_fun_id: string }`
- **PluginUIDropdown** – `{ options: string[]; callback_fun_id: string }`
- **PluginUIInput** – `{ text: string; callback_fun_id: string }`
- **PluginUINodeContent** – 联合类型（Text / Button / Dropdown / Input / HtmlDocument）
- **PluginUINode** – `{ node_id: string; visibility: boolean; disabled: boolean; content: PluginUINodeContent }`

## 接口
### updatePluginSettingsUI
`updatePluginSettingsUI(ui: PluginUINode[]): void`  
> 刷新插件设置页面，仅影响已打开的设置页。

### openPageWithNodes
`openPageWithNodes(ui: PluginUINode[]): void`  
> 以节点数组形式打开新页面。
（未实现）

### openPageWithUrl
`openPageWithUrl(url: string): void`  
> 用内置浏览器打开远端网页。
（未实现）

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const ui = [
  {
    node_id: "btn1",
    visibility: true,
    disabled: false,
    content: {
      type: "Button",
      value: { primary: true, text: "同步", callback_fun_id: "syncFun" },
    },
  },
];

AstroBox.ui.updatePluginSettingsUI(ui)