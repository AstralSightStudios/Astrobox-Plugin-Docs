# FileSystem

## 功能简介
提供文件选取能力，既支持二进制文件也支持纯文本文件。

## 权限声明
使用此接口需要向manifest的permissions中加入`filesystem`权限

## 相关类型
- **PickFileReturn**  
  - `path: string` – 系统路径  
  - `size: number` – 字节大小
- **StatFileReturn**
  - `size: number` - 文件大小
- **ReadFileOptions**  
  - `offset: number` - 读取偏移量 默认值：0
  - `len: number` - 读取长度 默认值：文件总长
  - `decode_text: boolean` - 是否解码成文本 默认值：true

## 接口
### pickFile
- **签名**：`pickFile(): Promise<PickFileReturn>`  
- **功能**：弹出系统选取器并返回所选文件路径与大小。

### statFile
- **签名**：`statFile(path: string): Promise<StatFileReturn>`  
- **功能**：返回文件元数据。
- **注意**: ⚠️ 只能读取用户选择过的文件，且path参数必须为pickFile返回的path，否则报错

### readFile
- **签名**: `readFile(path: string, options?: ReadFileOptions): Promise<Uint8Array | string>;`
- **功能**: 读取文件，当options.decode_text为true时返回字符串，否则返回Uint8Array
- **注意**: ⚠️ 只能读取用户选择过的文件，且path参数必须为pickFile返回的path，否则报错

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const pickRet = await AstroBox.filesystem.pickFile();
const data = await AstroBox.filesystem.readFile(pickRet.path)
console.log(`文件的内容为: ${data}`)