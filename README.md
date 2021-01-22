# Another Webpack Boilerplate

![Build](https://github.com/florianporada/another-webpack-boilerplate/workflows/Build%20And%20Deploy/badge.svg)
| [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Usage

1. `git clone https://github.com/florianporada/another-webpack-boilerplate.git <project-name>`
2. `cd <project-name>`
3. `yarn run new`
4. `yarn start`

## Features

- Webpack 5
- SCSS support
- ES6 transpiling
- Automatic favicon generation
- Docker ready
  ...

### Feature explanations

Since this boilerplate is basically a port of [tris-webpack-boilerplate](https://github.com/tr1s/tris-webpack-boilerplate) to webpack 5 with some new features, most of the features are explained [here](https://github.com/tr1s/tris-webpack-boilerplate#features-explained).

---

## Deployment

The standard behavior of the action is to create a docker image and push it to the docker registry.

- GitHub Actions Environment Secrets

  ```txt
  DOCKER_USERNAME
  DOCKER_PASSWORD
  ```

- Skip CI
  If the commit message contains `docs:` the GitHub Action will not be triggered.

## Credits

- Heavily inspired by: [tris-webpack-boilerplate](https://github.com/tr1s/tris-webpack-boilerplate)
