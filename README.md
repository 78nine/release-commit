# release-commit

This is a fork and re-work of [commit-release](https://www.npmjs.com/package/commit-release) (by [Jamie Mason](https://www.npmjs.com/~fold_left))

When run it updates CHANGELOG.md and DEPENDENCIES.md files,
bumps version number in `package.json` and (optionally) tags the commit.

## Install

```shell
npm i -g release-commit
```

or

```shell
npm i -D release-commit
```

depending on your preferences


## Usage

```shell
$ release-commit --help

  Usage: release-commit [options]

  Options:
    -V, --version             output the version number
    -f, --force               overwrite tag if it exists already
    -n, --no-verify           skip git commit hooks
    -o, --override [version]  override recommended version number (default: "")
    -p, --postfix [name]      a postfix such as "rc1", "canary" or "beta1" (default: "")
    -t, --tag                 also tag the commit
    -d, --debug               useful if you face any error; outputs full error stack trace
    -h, --help                display help for command
```
