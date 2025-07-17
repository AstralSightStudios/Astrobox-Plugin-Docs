# FileSystem

## 功能简介
提供文件选取能力，既支持二进制文件也支持纯文本文件。

## 权限声明
使用此接口需要向manifest的permissions中加入`filesystem`权限

## 相关类型
- **pickFileOptions**
  - `decode_text?: boolean` - 是否解码成文本（可选）
  - `encoding?: string` - 编码格式（可选，如 'utf-8', 'base64' 等）
- **PickFileReturn**
  - `path: string` – 系统路径
  - `size: number` – 字节大小
  - `text_len: number` – 文本长度
- **StatFileReturn**
  - `size: number` - 文件大小
- **ReadFileOptions**
  - `offset?: number` - 读取偏移量（可选）
  - `len: number` - 读取长度（必填）
  - `decode_text?: boolean` - 是否解码成文本（可选，默认值：true）

## 接口
### pickFile
- **签名**：`pickFile(options: pickFileOptions): Promise<PickFileReturn>`
- **功能**：弹出系统选取器并返回所选文件信息。
- **参数**：
  - `options: pickFileOptions` - 文件选取选项

### unloadFile
- **签名**: `unloadFile(path: string): Promise<void>`
- **功能**: 卸载指定路径的文件，释放资源。
- **参数**:
  - `path: string` - 文件路径（必须是通过pickFile返回的路径）
- **注意**: ⚠️ 只能卸载用户选择过的文件，否则会报错

### readFile
- **签名**: `readFile(path: string, options?: ReadFileOptions): Promise<Uint8Array | string>;`
- **功能**: 读取文件，当options.decode_text为true时返回字符串，否则返回Uint8Array
- **注意**: ⚠️ 只能读取用户选择过的文件，且path参数必须为pickFile返回的path，否则报错

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const pickRet = await AstroBox.filesystem.pickFile({ decode_text: true, encoding: 'utf-8' });
const data = await AstroBox.filesystem.readFile(pickRet.path,{len:pickRet.text_len})
console.log(`文件的内容为: ${data}`)
```