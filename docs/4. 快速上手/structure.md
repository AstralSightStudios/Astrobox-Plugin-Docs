---
sidebar_position: 2
---
# 项目结构
在创建完项目后，你将看到如下的文件结构：
```bash
.
├── README.md
├── manifest.json
├── node_modules
│   ├── ...
├── package.json
├── pnpm-lock.yaml
├── rspack.config.ts
├── icon.png
├── src
│   └── index.ts
└── tsconfig.json
```

`manifest.json`: 插件配置文件，详见[插件配置](../manifest)，build后会自动复制到dist

`icon.png`: 插件图标，build后会自动复制到dist

`rspack.config.ts`: Rspack配置文件，详见[官方文档](https://rspack.rs/zh/config/)

`tsconfig.json`: TypeScript语言支持配置文件，详见[官方文档](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

`src/index.ts`: 插件入口ts