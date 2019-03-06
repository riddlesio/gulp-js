# Gulp JavaScript Preprocessing Task

This repository contains a reusable gulp task for preprocessing JavaScript using Babel and Webpack.

## Installation

Run the following npm command:

```
npm install @riddles/gulp-js --save-dev
```

## Usage

Add the following to your gulpfile:

```
const
    gulp    = require('gulp'),
    js    = require('@riddles/gulp-js'),
    read    = gulp.src.bind(gulp),
    write   = gulp.dest.bind(gulp),
    config  = { ... };

gulp.task('js', js(read, write, config));

```

### Configuring the plugin

The plugin expects the following configuration options to be defined:

```
{
    "configPath": "./path/to/webpack.config.js",
    "src": "./path/to/source.js",
    "bundle": {
        "name": "app.js"
    },
    "dest": "./path/to/destination/folder"
}
```

**Note:** The webpack config file should export a function which accepts a config object with environment variables, so additional processing can be done depending on the flags passed to the build command.

## Contributions

This repository follows the Git Flow branching model. Branches follow the naming convention listed below:

- master
- development
- feature/*
- hotfix/*
- release/*
- support/*

The development and master branches are closed for writing. Contributions should be submitted through a pull request from a feature branch. Each pull request must describe the changes made and why these changes are nessecary (for future reference). Furthermore, the implementation must be documented using JSDoc. All unit tests must pass.

Every pull request made according to these guidelines will be peer reviewed. The review will result in on of these scenarios:

- Contribution is merged with development branch as is;
- Contribution needs to be rewritten. This can happen for architectural as well as stylistic reasons;
- Contribution needs to be moved to a different or separate bundle.
