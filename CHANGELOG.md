### 1.2.0 (2022-07-30)

##### Build System / Dependencies

* **npm:**
  *  update deps ([cd7c0552](https://github.com/78nine/release-commit/commit/cd7c05523a694f2bcb77ff4c96730e8d4c2cf063))
  *  update deps ([76fcf0d0](https://github.com/78nine/release-commit/commit/76fcf0d0db4a43ac0e66f975b3bb746857c067f8))
  *  update deps ([9c176220](https://github.com/78nine/release-commit/commit/9c1762201f9e386749466e1bdc9565dbea72be10))

##### New Features

* **changelog:**
  *  disallow unknown commit types ([4302b52f](https://github.com/78nine/release-commit/commit/4302b52f675aabe725b7ca051748101294596a64))
  *  ignore `other` section ([1f993749](https://github.com/78nine/release-commit/commit/1f993749fc9963367dfcb33e13f72fa01f5e95ff))

##### Bug Fixes

* **changelog:**  fix error when CHANGELOG.md does not exists ([70fc22dc](https://github.com/78nine/release-commit/commit/70fc22dc5af659718dba4c6d4dd1c2303f65dd98))

### 1.1.0 (2020-05-19)

##### Build System / Dependencies

* **npm:**
  *  update `execa` ([2785a85d](https://github.com/78nine/release-commit/commit/2785a85dc7ec28680e845397645d57ab6cd1c62e))
  *  update `conventional-recommended-bump` ([50acf72a](https://github.com/78nine/release-commit/commit/50acf72a3e9edc50d45bfb7e72754b2cee9c373a))
  *  update `commander` ([3a54cb1a](https://github.com/78nine/release-commit/commit/3a54cb1aa5ac04beb3656cdcdadeaa05b9f182c3))
  *  update `chalk` ([60e63ab8](https://github.com/78nine/release-commit/commit/60e63ab8116ab54a51fdd3f7b6873a8a1259cc6f))
  *  update safe dependencies ([21e4beb8](https://github.com/78nine/release-commit/commit/21e4beb8d76ab3a472c84fef11ba958f5de42083))

##### New Features

* **debug:**  add `debug` option ([312a82ea](https://github.com/78nine/release-commit/commit/312a82ea669ac20597508238f32954b6bd8aa420))

##### Refactors

* **es6:**
  *  fix last callback to Promise ([c3b45fdc](https://github.com/78nine/release-commit/commit/c3b45fdccc0bf50346f95263e5242150d0fcc2fe))
  *  use template literals and destructing ([974af7d6](https://github.com/78nine/release-commit/commit/974af7d66984ca8fe8612ea1bbb9ce794ecebab3))
  *  use ES Promises in place of `when` package ([3ec7d5d2](https://github.com/78nine/release-commit/commit/3ec7d5d2d26bb4ce0ad82e0e124b9efbbe6a2d46))

#### 1.0.3 (2017-12-19)

##### Build System / Dependencies

* **npm:**
  *  add `npm run release` script ([a33121fb](https://github.com/tvardy/release-commit/commit/a33121fb11af7ca9f6532ad973471077013ae985))
  *  accept major bump changes in dependencies ([1da2ae13](https://github.com/tvardy/release-commit/commit/1da2ae134ce4c97be095cfd616da6b59ee402e17))
  *  update safe dependencies ([e68b9ec3](https://github.com/tvardy/release-commit/commit/e68b9ec3852089ba49478b1287668d7ff6ea51fb))

#### 1.0.2 (2017-07-06)

##### Build System / Dependencies

* update dependencies ([207469bb](https://github.com/tvardy/release-commit/commit/207469bb585d651f40b7f11fd9068633a716a90b))

##### Documentation Changes

* update README.md ([05144b37](https://github.com/tvardy/release-commit/commit/05144b37fb71cdeef44b92e08260da3fe446d5d2))

#### 1.0.1 (2017-06-25)

##### Build System / Dependencies

* **npm:** update `generate-changelog` dep version ([0344688f](https://github.com/tvardy/release-commit/commit/0344688fe660f12d3babb4d1d5ff9f1e7d13de50))

## 1.0.0 (2017-6-15)

##### New Features

* **npm:** create separate npm module ([3f464172](https://github.com/tvardy/release-commit/commit/3f4641724bd74adf2e736290426767c4c92e7f99))

### 0.9.0 (2017-6-14)

##### New Features

* **update-change-log:** exclude `chore` and `style` commits ([35827e68](https://github.com/JamieMason/commit-release/commit/35827e6841f7b7f8dbcf10194974bb7b4c01ce28))

### 0.8.0 (2017-3-28)

##### New Features

* **update-change-log:** use `generate-changelog` package ([9c7cfa84](https://github.com/JamieMason/commit-release/commit/9c7cfa84a402db739d7e6096ca72198e1fcd7db2))

##### Bug Fixes

* **override:** add options.type when `override` is set ([83baba44](https://github.com/JamieMason/commit-release/commit/83baba44dd7e2b52e8cb90d8cf5ade431d2d87b6))
* **bump:** use ONLY conventional-recommended-bump package ([c5c6e220](https://github.com/JamieMason/commit-release/commit/c5c6e220a9b870055adeff4192b78bdd9763aba5))
* **tag:** change `no-tag` into `tag` option ([514d4374](https://github.com/JamieMason/commit-release/commit/514d4374aaef3c882ab2eaadaab3f9910fc89cbe))


### 0.7.0 (2016-12-15)

##### New Features

* **options:** add --bump option ([56b3c80](https://github.com/JamieMason/commit-release/commit/56b3c80))
* **options:** add --no-tag option ([d46aa6b](https://github.com/JamieMason/commit-release/commit/d46aa6b))

##### Bug Fixes

* **shell:** use fs and child process safely ([21f833b](https://github.com/JamieMason/commit-release/commit/21f833b)), closes [#5](https://github.com/JamieMason/commit-release/issues/5)


### 0.6.2 (2016-07-26)

##### Bug Fixes

* **npm:** update dependencies ([9e41ac4](https://github.com/JamieMason/commit-release/commit/9e41ac4))


### 0.6.1 (2016-05-13)

##### Bug Fixes

* **npm:** update dependencies ([9190f0d](https://github.com/JamieMason/commit-release/commit/9190f0d))


### 0.6.0 (2016-05-13)

##### New Features

* **shell:** log output ([2b5003d](https://github.com/JamieMason/commit-release/commit/2b5003d))

##### Bug Fixes

* **shell:** use spawn instead of exec ([80f9d63](https://github.com/JamieMason/commit-release/commit/80f9d63)), closes [#1](https://github.com/JamieMason/commit-release/issues/1)


### 0.5.2 (2016-05-12)

##### Bug Fixes

* **options:** fix --no-verify flag ([157da30](https://github.com/JamieMason/commit-release/commit/157da30)), closes [#4](https://github.com/JamieMason/commit-release/issues/4)
* **shell:** add support for windows ([c351620](https://github.com/JamieMason/commit-release/commit/c351620)), closes [#3](https://github.com/JamieMason/commit-release/issues/3)


### 0.5.0 (2016-03-11)

##### New Features

* **command:** quit if tag exists with same version ([79f1552](https://github.com/JamieMason/commit-release/commit/79f1552))


### 0.4.0 (2016-03-10)

##### New Features

* **options:** add --override option ([b3343dc](https://github.com/JamieMason/commit-release/commit/b3343dc))


### 0.3.0 (2016-03-02)

##### New Features

* **options:** add --force option ([0b440d1](https://github.com/JamieMason/commit-release/commit/0b440d1))
* **options:** add --no-verify option ([9fde500](https://github.com/JamieMason/commit-release/commit/9fde500))


### 0.1.0 (2016-02-20)

##### New Features

* **command:** create commit with changelog and correct version ([493c528](https://github.com/JamieMason/commit-release/commit/493c528))
