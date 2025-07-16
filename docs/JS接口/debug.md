# Debug

## 可用性提示
⚠️ 仅在使用Debug编译AstroBox后起效，因此在所有的发布版本中该接口均不可用

## 权限声明
使用此接口需要向manifest的permissions中加入`debug`权限

## 功能简介
提供底层裸数据通道，便于开发者调试设备蓝牙协议。

## 接口
### sendRaw
- **签名**：`sendRaw(data: Uint8Array): Promise<void>`  
- **参数**  
  - `data: Uint8Array` – 待发送的完整原始字节流。  
- **返回**：`Promise<void>` – 发送完成时 resolve；发生错误时 reject。  

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const raw = new Uint8Array([0x01, 0x02, 0x03]);
await AstroBox.debug.sendRaw(raw);
console.log("裸数据已发送");