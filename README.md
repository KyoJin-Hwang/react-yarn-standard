# react-yarn-v4-standard

## ✔ 세팅 버전 ( Version )

### ✔ **Node** : 20.12.1

### ✔ **Yarn berry** : 4.0.0

### ✔ **React** : 18.2.0

## 📖 특징 ( Features )

## 💻 초기설치 ( Setup )

### 1. Node Version 확인

```bash
node -v  // 20.12.1
```

#### ❌ 1-1 Node 버전 틀린 경우

```bash
// 터미널 열기 (관리자권한)

(1)
nvm list
nvm use 20.12.1

(2)
# node v 20.12.1 없을경우 ❌
# nvm 버전 설치
# 리스트에 다운로드 여부 확인 ✔

nvm install 20.12.1
nvm list
nvm use 20.12.1
```

### 2. create react-app ( typescript )

```bash
# React + TypeScript 프로젝트
yarn create react-app my-app --template typescript

# TypeScript + NextJS 프로젝트
yarn create next-app --typescript
```

### 3. Yarn berry 활성화

```bash
yarn set version berry
```

### 4. .yarnrc.yml nodeLinker 모드 수정

- node_modules로 디펜던시 모듈들이 설치되지 않는다.
- zip으로 된 각 모듈의 의존성 트리 정보들은 프로젝트 루트의 .pnp.cjs 파일로 관리

![alt text](image.png)
