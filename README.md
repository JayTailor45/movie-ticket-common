### Common package used by all the microservices

Library contains following

- errors
- middlewares

#### To update the shared package

1. Run `npm i` to add node modules
2. Make changes and commit
3. Make build `npm run build`
4. Run `npm version minor` to update version number
5. Run `npm publish --access public` to push latest changes to npm

#### Update library in consumer project

1. Run `npm update @tj-movies-ticket/common`
