# Network

## 功能简介
实现发送网络请求。

## 权限声明
使用此接口需要向manifest的permissions中加入`network`权限

## 相关类型
- **FetchOptions**
  - `method: string`
  - `headers: Record<string, string>`
  - `body?: Uint8Array | string`
  - `raw?: boolean` 当此值为true时，Response的body为Uint8Array，否则为字符串（默认为false）
- **FetchResponse**
  - `status: number`
  - `headers: Record<string, string>`
  - `contentType: string`
  - `body: Uint8Array|string` string只支持utf-8编码

## 接口
### fetch
- **签名**：`fetch(url: string, options: FetchOptions): Promise<FetchResponse>`
- **说明**：与浏览器 `fetch` 类似。

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const res = await AstroBox.network.fetch("https://example.com/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1 }),
});

console.log(res.status, res.contentType);