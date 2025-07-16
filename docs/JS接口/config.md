# Config

## 功能简介
负责插件的本地配置文件的读取与写入，常用于保存用户设置、运行时参数等可序列化信息。

配置将被写入AstroBox的`config.json`中，因此请勿用于存放大数据，否则会拖慢程序启动速度

## 权限声明
使用此接口需要向manifest的permissions中加入`config`权限

## 接口列表
- **readConfig(): Object** – 读取配置文件并返回 JSON 对象。  
- **writeConfig(content: Object): void** – 将对象写入配置文件（覆盖写入）。

### readConfig
- **签名**：`readConfig(): Object`  
- **返回**：`Object` – 当前已持久化的完整配置；若文件不存在则返回空对象 `{}`。

### writeConfig
- **签名**：`writeConfig(content: Object): void`  
- **参数**  
  - `content: Object` – 需写入的新配置对象。写入后立即覆盖旧配置。  
- **返回**：`void`

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

// 读取现有配置
const cfg = AstroBox.config.readConfig();
console.log("当前配置", cfg);

// 写入新的配置
AstroBox.config.writeConfig({
  endpoint: "https://api.example.com",
  enableLog: true,
});