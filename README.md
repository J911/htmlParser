# htmlParser
Convert HTML node elements to a horizontal array

## use

- document Parser
```
var parser = new htmlParser();
parser.documentParse((result) => {
	result.forEach((node) => {
    	console.log(node);
    );
});
```

- node Parser
```
var parser = new htmlParser();
parser.nodeParse(document.childNodes,(result) => {
	result.forEach((node) => {
    	console.log(node);
    );
});
```
