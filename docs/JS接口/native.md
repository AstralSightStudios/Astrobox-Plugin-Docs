# Native

## 功能简介
向AstroBox注册“原生函数”，供插件侧按函数指针（ID）调用。

## 权限声明
使用此接口需要向manifest的permissions中加入`native`权限

## 接口
### regNativeFun
- **签名**：`regNativeFun(func: (...args: any[]) => any): string`  
- **参数**  
  - `func` – 需暴露给外部的函数  
- **返回**：`string` – 宿主分配的函数 ID，可用于传参或回调。

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

function sum(a: number, b: number) {
  return a + b;
}

const id = AstroBox.native.regNativeFun(sum);
console.log("Native 函数 ID:", id);