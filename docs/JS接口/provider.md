# Provider

## 功能简介
向社区市场动态注册 JS 插件数据源。

## 权限声明
使用此接口需要向manifest的permissions中加入`provider`权限

## 注意事项
方法id应使用[Native](native)接口中的`regNativeFun`方法注册。

## 相关类型
**JSPluginProvider**
- `name` – 源名称
- `plugin_name` – 插件名称（必须填写PLUGIN_NAME相同值）  
- `fn_get_page` – 获取分页数据的方法id
- `fn_get_item` – 获取详情的数据方法id
- `fn_download` – 下载入口方法id

## 接口
### registerCommunityProvider
- **签名**：`registerCommunityProvider(provider: JSPluginProvider): Promise<void>`  
- **说明**：注册后即可在社区市场展示。  

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

await AstroBox.provider.registerCommunityProvider({
  name: "Alice",
  plugin_name: "CoolWatchFaces",
  fn_get_page: "list",
  fn_get_item: "detail",
  fn_download: "download",
});