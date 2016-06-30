# reactor

Bootstrapping repository for building a react app or component library

## How Do I Use This?

Clone this repository to a new directory that's named what you want your project to be

`git clone git@github.com:msarchet/reactor <app>`

Change the branch to master

`git checkout -b master`

Edit the `project.json` to reflect your project.

Change the remote origin in git to point at your repository

`git remote set-url origin <your-repo-url>`

## Why Did I Make This?

I'm trying to eliminate all the bike shedding I find myself doing when I want to start a new project. 
So I built this project as a heavily opinonated easy to use starting point for building new projects or for trying new things.

## Pull Requests

I'm open to pull requests against this repository, but it shouldn't replace anything, unless it's a direct improvement of a dependency

## What's In The Box?

### [reactpack](https://github.com/olahol/reactpack)

One command to do the builds, as well as dev server, linting. Lots of good stuff here

### [jest](https://facebook.github.io/jest/) test runner

No reason to use anything else

### [enzyme](https://github.com/airbnb/enzyme) test helpers

Removes much of the boiler plate for writing tests

### [sinon](https://sinonjs.org) mocking

Very simple mocking with lots of functionality

### [CSS Modules](https://github.com/css-modules/css-modules)

CSS Modules just really make sense when you're writing components.
Used via [react-css-modules](https://github.com/gajus/react-css-modules) as it provides some patterns that make using css modules easier

## Project Structure

`src/` - Where the code lives

`__tests__` - Where tests live (this is a jest convention, no need to change it)

`src/index.js` - Main entry point

`src/components` - Where all the components live

`src/components/styles` - Where component styles live

`src/compnents/styles/__mocks__` - Where mock styles live

### Style Mocks
Due to how CSS Modules works and the fact that Jest doesn't run webpack before testing, the css styles need to be mocked as a module.

```css
/* main.css */
.main {
  width: 100%;
  height: 100%;
}
```

```js
// __mocks__/main.css
module.exports = {
  main: 'main'
}
```

# License

## MIT

Copyright (c) 2016 Michael Sarchet


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
