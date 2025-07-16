# Interconnect

## 功能简介
实现与快应用的Interconnect通信。

## 权限声明
使用此接口需要向manifest的permissions中加入`interconnect`权限

## 接口
### 接收消息
如需接收来自快应用的消息，请使用[Event](event)接口，并添加名为`onQAICMessage_<包名>`的Listener实现消息接收
### sendQAICMessage
- **签名**：`sendQAICMessage(pkgName: string, data: string): Promise<void>`  
- **参数**  
  - `pkgName` – 目标第三方应用包名  
  - `data` – JSON 字符串或经 Base64 编码的业务数据  
- **返回**：`Promise<void>`

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

await AstroBox.interconnect.sendQAICMessage(
  "com.example.app",
  JSON.stringify({ cmd: "ping" })
);