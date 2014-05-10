# document.createDocumentFragment

**document.createDocumentFragment** extends createDocumentFragment to conditionally generate elements by selectors.

```js
document.createDocumentFragment(); // normal, empty fragment

document.createDocumentFragment('#foo.bar'); // fragment, populated with <div id="foo" class="bar">
```

The script is 1.2KB, or 420B minified + gzipped.
