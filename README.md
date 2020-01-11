# Metadata-Service

## Tech stack at a glance

This is a small service written in [TypeScript](https://www.typescriptlang.org/)  
A superset of Javascript with  optional static typing.
It is transpiled into JavaScript code, via the `tsc` compiler.

The resulting code is run by [Node](https://nodejs.org/), a standalone JavaScript runtime, built on top of the V8 engine, which provides garbage collection and just-in-time compilation. Node uses an event-driven non-blocking I/O model that makes it lightweight and efficient, aswell as provides acess to powerfull C++ bindings via Javascript API calls.

_(Node is to Javascript what the JVM is to Java)_

[Npm](https://www.npmjs.com/) is the default Node package manager, and it is used for managing project dependencies and as a command line utility for project operations.

_(Npm is for Node what Gradle and SBT are for JVM)_

## Setup

### System Requirements

|   |   |   |
|---|---|---|
| node | >= 12.13.0 | This is latest LTS version  |
| npm | >= 6.13.0+|  |


### Install project

Execute in project root
```bash
npm install
```

## Configuration

When starting the Metadata Service, it will check if the `NODE_ENV` environment variable is set.

If it is set it will try to open `${NODE_ENV}.env` file and load the variables defined there as environment variables

If the file does not exists an error will be thrown and service will not start.

If the `NODE_ENV` is not set, it will not try to open any file. And assume configuration is already set in environment

The service takes all configuration it needs at server start from environment variables. This is the prefered way in test and production environments

When running locally with the `npm run start:dev` command the `NODE_ENV` will be set to dev by the project task, which will load the sample file `dev.env` that contains all variables needed to be defined. 

_The `*.env` files mostly contain runtime environment variable configurations needed for running the service, but by convention it also stores docker-compose related variables for building an image and running it._


### Run

Local development run, via Typescript REPL
```bash
npm run start:dev
```

Build and test
```bash
# Build project
npm run build

# Run tests
npm run test
```

## Project orientation

### Project files (tech stack)
  
|   |   |
|---|---|
| package.json | The project settings: name, version, build tasks, libraries used |
| package-lock.json | More detailed (including transient) locked version dependencies for the project |
| tsconfig.json | Typescript compiler settings |
| jest.config.js | Settings (like the test location) for the test runner Jest  |

### Source folders and files
  

|   |   |
|---|---|
| src/app/index.ts | Main development entry point |
| dist/app/index.js | Main runtime entry point |
| src/app | Production code |
| src/tests | Test code |
| dist | Compiler output. Javascript files will be generated here after build (compile) is executed. Run these for project run |
| node_modules | Local cache for dependencies |
  
  
