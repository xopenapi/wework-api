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
npm publish --access public
```

* 发布前需要增加版本号再生成SDK。（配置项：typescript.package-version）
* 发布 npm 需要清除镜像配置。

```bash
npm config delete registry
```
