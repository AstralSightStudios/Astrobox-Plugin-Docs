# Event

## 功能简介
提供跨插件的轻量级事件总线。

## 权限声明
使用此接口需要向manifest的permissions中加入`event`权限

## 接口
### addEventListener
- **签名**：`addEventListener<T>(eventName: string, callback: (payload: T) => void): void`
- **说明**：为指定事件注册回调。
- **注意**：⚠️ 同eventName的Listener不能注册两次

### removeEventListener
- **签名**：`removeEventListener(eventName: string): void`
- **说明**：移除先前添加的监听器。

### sendEvent
- **签名**：`sendEvent(eventName: string, payload: any): void`
- **说明**：广播事件并携带自定义数据。

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

// battery为自定义事件，并非AstroBox内置事件
AstroBox.event.addEventListener<number>("battery", lvl => {
  console.log("电量变化:", lvl);
});

AstroBox.event.sendEvent("battery", 85);