const toHTML = require('markdown').markdown.toHTML
const read = require('fs').readFileSync
const write = require('fs').writeFileSync

const content = toHTML(read('content.md').toString())
const css = read('style.css').toString()
const html = `
<!DOCTYPE html>
<head>
<style>
${ css }
</style>
</head>
<body>
${ content }
</body>
</html>
`

// side-effects:
write('../dist/index.html', html)

