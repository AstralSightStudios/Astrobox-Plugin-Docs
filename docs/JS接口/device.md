# Device

## 功能简介
负责与小米穿戴设备的发现、状态同步及控制。

## 权限声明
使用此接口需要向manifest的permissions中加入`device`权限

## 相关类型
| 类型 | 字段 | 描述 |
| ---- | ---- | ---- |
| **MiWearDeviceInfo** | `name: string`<br />`addr: string` | 设备蓝牙名称及 MAC 地址 |
| **MiWearBleCharaUuid** | `recv: string`<br />`sent: string` | BLE 特征值 UUID（接收/发送）（仅macOS / iOS可用） |
| **SecurityKeys** | `enc_key: number[]`<br />`dec_key: number[]`<br />`enc_nonce: number[]`<br />`dec_nonce: number[]` | 一次性Session密钥（对插件来说没什么卵用） |
| **MiWearDeviceState** | `name: string`<br />`addr: string`<br />`authkey: string`<br />`bleservice: MiWearBleCharaUuid`<br />`max_frame_size: number`<br />`sec_keys?: SecurityKeys \| null`<br />`network_mtu: number`<br />`codename: string` | 设备运行状态及会话上下文 |

## 接口
### getDeviceList
- **签名**：`getDeviceList(): MiWearDeviceInfo[]`  
- **说明**：返回当前已配对设备列表。  

### getDeviceState
- **签名**：`getDeviceState(addr: string): MiWearDeviceState`  
- **参数**  
  - `addr: string` – 目标设备 MAC 地址  
- **返回**：该设备的完整状态对象。  

### modifyDeviceState
- **签名**：`modifyDeviceState(addr: string, state: MiWearDeviceState): void`  
- **功能**：整体更新设备状态（会覆写旧的state，高危操作）。  

### disconnectDevice
- **签名**：`disconnectDevice(): Promise<void>`  
- **功能**：主动断开当前设备的连接。  

## 示例
```typescript
import AstroBox from "astrobox-plugin-sdk";

// 获取设备列表
const devices = AstroBox.device.getDeviceList();
devices.forEach(d => console.log(`${d.name} @ ${d.addr}`));

// 读取状态并修改
const st = AstroBox.device.getDeviceState(devices[0].addr);
st.max_frame_size = 1024;
AstroBox.device.modifyDeviceState(st.addr, st);

// 断开连接
await AstroBox.device.disconnectDevice();
```