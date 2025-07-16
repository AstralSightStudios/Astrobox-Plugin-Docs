# Network

## 功能简介
实现发送网络请求。

## 权限声明
使用此接口需要向manifest的permissions中加入`network`权限

## 相关类型
- **FetchOptions**  
  - `method: string`  
  - `headers: Record<string, string>`  
  - `body: Uint8Array`  
- **FetchResponse**  
  - `status: number`  
  - `headers: Record<string, string>`  
  - `contentType: string`  
  - `body: Uint8Array`

## 接口
### fetch
- **签名**：`fetch(url: string, options: FetchOptions): Promise<FetchResponse>`  
- **说明**：与浏览器 `fetch` 类似，但始终使用二进制 body。  

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const res = await AstroBox.network.fetch("https://example.com/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: new TextEncoder().encode(JSON.stringify({ id: 1 })),
});

console.log(res.status, res.contentType);