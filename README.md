## Functional Blog Pattern

Inspired by cosmopol.is blog code. Markdown content rendered with node modules. Only dependency is markdown (not even Express), which is installed with `npm install markdown --save`.

Designed to be as simple as possible. Reminds me a lot of how React consumes JSX, which is obviously more powerful. This is a much more nieve implementation.

Run `npm start` to write to dist/index.html

[Docs Markdown on npm](https://www.npmjs.com/package/markdown)

**Todo:**
- Get this setup with a working deploy.sh and actually deploy
- Break html template into its own file
- Create `makePost` function that accepts a filename where to write and markdown file to pass it (will need to also consider how to pass the relative path to an app.js, which in turn generates a markdown list that will be listed on index.html?)
- Possibly consider adding Express?
