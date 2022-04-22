# Portfolio

## Preview

![Screen Shot 2022-04-22 at 11 50 52 PM](https://user-images.githubusercontent.com/61281239/164739322-d10c9310-f498-4615-b9b9-aaab16c41328.png)




## Getting started
```angular2html
yarn && yarn install
```

```angular2html
yarn start
```

## Building
```angular2html
yarn build
```

## Setting

-----

### 1.

`data/directoryStructure.ts`에서 폴더구조 / 폴더색상을 설정지정할 수 있습니다.

>route는 폴더이름/파일이름로 지정됩니다.
>
>예시: `projects/project.tsx`

```js
export const directoryStructure = [
  {
    folderName: 'projects',
    folderColor: '#ff0000',
    fileInfo: ['project1.tsx', 'project2.tsx'],
  },
  {
    folderName: 'resume',
    folderColor: '#fff',
    fileInfo: ['project1.tsx', 'project2.tsx'],
  },
];
```

### 2. 

`Layout/index.tsx`에서 route를 설정할 수 있습니다.

```js
<Routes>
      <Route path={'/*'} element={<AboutMe />} />
      <Route path={'/projects'} element={<Projects />} />
</Routes>
```
route는 위 설명처럼 react와 동일하게 설정하시면 됩니다.

### 3. 파일 아이콘 지정

`components/File`에서 파일 아이콘을 설정할 수 있습니다.

```js
<FileImage src={TypeScript} />
```

`src`를 변경해주세요.

