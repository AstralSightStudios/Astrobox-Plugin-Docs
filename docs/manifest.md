---
sidebar_position: 3
---
# 插件配置
AstroBox通过`manifest.json`来描述并配置插件。一个正常的`manifest.json`应该有以下字段（所有字段都是必填）：

|字段名称|字段内容|示例值|
|-|-|-|
|name|插件名称|ExamplePlugin|
|icon|插件图标（仅支持本地文件，路径为相对路径）|icon.png|
|version|插件版本|1.0|
|description|插件简介|这是一个示例插件|
|author|插件作者|Example Studios|
|website|插件网页（也可以填github开源仓库）|https://xxx.com|
|entry|插件入口js文件|entry.js|
|api_level|插件API版本|1|
|permissions|插件运行所需的权限列表|["lifecycle", "event"]|