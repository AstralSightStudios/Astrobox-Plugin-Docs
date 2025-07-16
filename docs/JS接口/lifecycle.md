# Lifecycle

## 功能简介
用于在AstroBox加载插件完成后执行初始化逻辑。

## 权限声明
使用此接口需要向manifest的permissions中加入`lifecycle`权限

## 接口
### onLoad
- **签名**：`onLoad(callback: () => void): void`  
- **说明**：当宿主完成所有依赖注入后触发。

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

AstroBox.lifecycle.onLoad(() => {
  console.log("插件已加载完成");
});