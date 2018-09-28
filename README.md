### Next.js application + Components

This app shows a nextjs setup importing several react libraries (some community ones, some self-written)

#### Link button-lib

```
cd button-lib
npm install
npm build
npm link
```

#### Link widget-lib

```
cd widget-lib
npm install
npm build
npm link @shawn/button-lib
npm link
```

#### Setup hello-next

```
cd hello-next
npm install
npm link @shawn/button-lib
npm link @shawn/widget-lib
npm run dev
```
