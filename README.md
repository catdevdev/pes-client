## Getting Started

Firstly, to run pes-project use

```
yarn install
yarn dev
```

## How to get own window
1. In **windows** folder create folder with name of window
2. Inside this folder create folders `actions` and `component`
3. Inside `actions` create `index.ts` and `types.ts` and use same code structure like in another folders of windows
4. Inside `component` create `index.tsx` and use same code structure like in another folders of windows
5. Inside **windows** folder import own window component and add into `windowsVariants` object
6. To add possibility spawn window add your window component into `index.ts` in callWindows folder
Add into `type Sum` your interface of window from `'./windows/{name-of-your-window}/actions/types.ts'`
Add into `hashCreateWindow` object same structure like others windows
7. To use your window init hook use `const createWindow = useCallWindow();`
createWindow<Type_of_your_window>({ type: 'name-of-your-window' })

