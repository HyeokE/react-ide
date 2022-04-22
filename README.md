## Portfolio

### Getting started
```angular2html
yarn && yarn install
```

```angular2html
yarn start
```

### Building
```angular2html
yarn build
```

### Setting

-----

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

`Layout/index.tsx`에서 route를 설정할 수 있습니다.

```js
<Routes>
      <Route path={'/*'} element={<AboutMe />} />
      <Route path={'/projects'} element={<Projects />} />
</Routes>
```
route는 위 설명처럼 react와 동일하게 설정하시면 됩니다.

