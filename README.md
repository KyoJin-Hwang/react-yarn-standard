# react-yarn-v4-standard

#### 🛒 폴더에 있는 이미지 파일 삭제

## ✔ 세팅 버전 ( Version )

#### ✔ **Node** : 20.12.1

#### ✔ **Yarn berry** : 3.8.0

#### ✔ **React** : 18.2.0

## 📖 특징 ( Features )

## 💡 규칙 ( Rulse )

### _ESLint_

### _Prettier_

**useTabs**

- 탭(tab) 사용 여부를 결정하는 불리언 값입니다.
- `use` : false로 설정되어 있으므로 스페이스를 사용하고 있습니다.

**printWidth**

- 코드 줄의 최대 길이입니다.
- 초과하면 줄 바꿈이 이루어집니다.
- `use` : 80으로 설정되어 있으므로 한 줄의 코드가 80자를 초과하면 줄 바꿈

**tabWidth**

- 탭(tab) 또는 스페이스로 들여쓰기 할 때 사용할 공백 수입니다.
- `use` : 2로 설정되어 있으므로 2칸 들여쓰기를 사용합니다.

**singleQuote**

- 문자열을 홑따옴표(')로 사용할지 여부를 결정하는 불리언 값입니다.
- `use` : true로 설정되어 있으므로 홑따옴표를 사용합니다.

**trailingComma**

- 객체나 배열의 마지막 요소 뒤에 쉼표를 추가할지 여부를 결정합니다.
- `use` : "all"로 설정되어 있으므로 모든 경우에 쉼표를 추가합니다.

**endOfLine**

- 개행 문자 종류를 결정합니다.
- `use` : "lf"로 설정되어 있으므로 Unix 스타일의 줄 바꿈 문자(LF)를 사용합니다.

**semi**

- 세미콜론(;) 사용 여부를 결정하는 불리언 값입니다.
- `use` : false로 설정되어 있으므로 세미콜론을 사용하지 않습니다.

**arrowParens**

- 화살표 함수의 매개변수가 하나인 경우에 괄호를 사용할지 여부를 결정합니다.
- `use` : "always"로 설정되어 있으므로 항상 괄호를 사용합니다.

## 1️⃣ 초기설치 ( Setup )

### 0. Node Version 확인

```bash
node -v  // 20.12.1
```

#### ❌ Node 버전 틀린 경우

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

### 1. Yarn 설치

```bash
npm install -g yarn
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
# 최신버전으로 다운로드
yarn set version berry

# 특정 버전 다운
yarn set version [version]
```

### 4. pnp 설정

- node_modules로 디펜던시 모듈들이 설치되지 않는다.
- zip으로 된 각 모듈의 의존성 트리 정보들은 프로젝트 루트의 .pnp.cjs 파일로 관리

  #### 4-1 PnP 설정

  1. .yarnrc.yml 폴더에서 nodeLinker 수정
     ![alt text](image.png)
  2. $ yarn install
  3. Yarn berry 와 IDE 통합 - **ZipFs Plugin 익스텐션설치**

```bash
yarn dlx @yarnpkg/sdks vscode

- allow 를 누르고 사용한다
# 누르지 못할경우 타입스크립트 파일에서
# ctrl + shift + p > Select TypeScript Version 클릭 > use Workspace version 클릭
```

### 5. .gitignore 설정 ( zero-install )

```bash
#.gitignore 에 추가

# yarn zero install
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

### ❌ App.test.tsx 에서 에러

#### Error

![alt text](image-1.png)

#### 해결

```bash
# remove
yarn remove @testing-library/jest-dom

# install
yarn add -D @types/testing-library__jest-dom @testing-library/jest-dom
```

## 2️⃣ ESLint / Prettier 적용

### vscode Extends 설치 및 줄시퀀스 선택

- Prettier - Code formatter 설치
- ESLint 설치
- vscode 하단에 줄 시쿼슨를 LF로 바꿔준다.

### ESLint 설정

#### 1. ESLint 및 Prettier dependencies 추가

```bash
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-config-react-app
```

❌ Error 발생

> Cannot find module 'prettier' from
>
> > node-modules 폴더가 없어서 에러가 발생된다.

```bash
# 재실행
yarn dlx @yarnpkg/sdks vscode
```

#### 2. Config 분리

1. 폴더안에 .eslintrc.json 생성
2. CRA로 만들어진 eslinConfig 안에 extends 복사해서 .eslint.json 붙여넣기

```json
// .eslintrc.json
{
  "extends": ["react-app", "react-app/jest"]
}
```

3. package.json 에서 eslintConfig 지우기

#### 3. ESLint rulse, extends 수정

```json
{
  // [extends] 프로젝트에 적용할 eslit 규칙셋
  "extends": ["react-app", "react-app/jest", "plugin:prettier/recommended"],
  // [plugins] 사용할 eslint 플러그인 설정
  "plugins": ["prettier"],
  "rules": {
    // prettier 와 eslint 규칙 겹치는 부분 방지
    "prettier/prettier": "error"
  }
}
```

### Prettier 설정

#### 1. prettier 파일 추가

- .prettierrc 파일생성

#### 2. prettier 규칙 생성

```json
{
  "useTabs": false,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "semi": false,
  "arrowParens": "always"
}
```

#### 3. OS 별 호환성 맞추기

`command`

- window : ctrl + ,
- mac : ctrl + ,

1. json 열기를 눌러준다.

![alt text](image-3.png)

2. settings.json 수정

```json
{
  // 파일을 저장할 때 eslint 수정
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // 모든 파일을 저장할 때 LF 형식으로 저장 (Window 사용자만 설정)
  "files.eol": "\n"
}
```

3. yarn dlx pkg 재설치

```bash
yarn dlx @yarnpkg/sdks vscode
```

❌ Error 발생

> Error: Required unplugged package missing from disk. This may happen when switching branches without running installs
>
> > node-mudules 가 없어서 Error

```bash
# yarn install
yarn
# 재설치
yarn dlx @yarnpkg/sdks vscode
```

4. lint 검사 및 수정 scripts 생성

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    // 파일 전체 lint 검사
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
    // 파일 전체 lint 수정
    "lint:fix": "eslint --fix \"src/**/*.{js,jsx,ts,tsx}\""
},
```

## 3️⃣ Craco 세팅

### 🙄 Craco 란?

- Craco는 Create-React-App Configuration Override의 약어
- CRA에 config 설정을 덮어쓰기 위한 패키지
- <a href="https://craco.js.org/">Craco 사이트</a>
<hr/>

#### 1. Craco 설치

```bash
yarn add -D @craco/craco
yarn add -D craco-alias
```
