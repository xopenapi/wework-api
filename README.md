# 企业微信API

## 生成SDK

* 安装`autorest`

```bash
npm i autorest -g
```

* 生成 SDK 代码

```bash
autorest autorest.yaml
```

## 发布SDK

### typescript

```bash
cd out/typescript
npm config set registry https://registry.npm.taobao.org
npm pack
npm config delete registry
npm publish --access public
```

* 发布前需要增加版本号再生成SDK。（配置项：typescript.package-version）
