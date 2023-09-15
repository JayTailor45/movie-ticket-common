### Common package used by all the microservices

Library contains following

- errors
- middlewares

#### To update the shared package

1. Make changes and commit
2. Make build `npm run build`
3. Run `npm version minor` to update version number
4. Run `npm publish` to push latest changes to npm

#### Update library in consumer project

1. Run `npm update @tj-movie-ticket/common`
