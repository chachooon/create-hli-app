# Create HLI App

빌드 구성 없이 새 프로젝트 시작하기

## 🚀 Getting Started

다음 명령을 실행하여 `create-hli-app`으로 새 프로젝트를 시작한다.

```bash
yarn create next-app <my-app> -e https://github.com/chachooon/create-hli-app.git
# or
npx create-next-app <my-app> -e https://github.com/chachooon/create-hli-app.git
```

설치가 완료되면 `<my-app>` 디렉토리로 이동하여 다음 명령으로 개발 서버를 실행한다.

```bash
# 개발 서버 실행
yarn dev
# 스토리북 개발 서버 실행
yarn storybook

```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열고 새 프로젝트를 확인한다.

## Tech Stacks

- [x] Next.js 12.2 이상
- [x] React 18.0.2 이상
- [x] Typescript 4.7 이상
- [x] Emotion 11 이상
- [x] Storybook 6.5 이상
- [ ] React Query
- [ ] Recoil
- [ ] UI Library (hli-ds)
- [x] [Jest](https://nextjs.org/docs/testing#jest-and-react-testing-library)
- [ ] [Cypress](https://nextjs.org/docs/testing#cypress)

## References

- [React + TS boilerplate 제작기](https://velog.io/@jjunyjjuny/React-TS-boilerplate-%EC%A0%9C%EC%9E%91%EA%B8%B0-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1)
- [Generate your web-app boilerplate like create-react-app does.](https://dev.to/leopold/generate-your-web-app-boilerplate-like-create-react-app-does-301p)
- [facebook/create-react-app](https://github.com/facebook/create-react-app)
- [react-parcel-app](https://github.com/Leopold-V/react-parcel-app)
