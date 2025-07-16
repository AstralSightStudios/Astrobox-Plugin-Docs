# ThirdPartyApp

## 功能简介
启动快应用及查询安装列表。

## 权限声明
使用此接口需要向manifest的permissions中加入`thirdpartyapp`权限

## 相关类型
**AppInfo**
- `package_name: string`  
- `fingerprint: number[]`  
- `version_code: number`  
- `can_remove: boolean`  
- `app_name: string`

## 接口
### launchQA
- **签名**：`launchQA(appInfo: AppInfo, pageName: string): Promise<void>`  
- **说明**：按页面名称打开 QA 应用。  

### getThirdPartyAppList
- **签名**：`getThirdPartyAppList(): Promise<AppInfo[]>`  
- **说明**：异步返回已安装 QA 应用列表。  

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

const list = await AstroBox.thirdpartyapp.getThirdPartyAppList();
console.log(list);

await AstroBox.thirdpartyapp.launchQA(list[0], "home");