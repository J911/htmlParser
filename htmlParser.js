var htmlParser = function(){
    this.version = '1.0.0';
}

htmlParser.prototype = {
    nodeParse: function(node, callback){
        return callback(
            htmlParserLoop([], node)
        );
    },
    documentParse: function(callback){
        return callback(
            htmlParserLoop([], [document])
        );
    }
}

function htmlParserLoop(arr, currentNodes){
    var lastNodes = [];    
    for(i=0;i<currentNodes.length;i++){
        currentNodes[i].childNodes.forEach(function(node){
            arr.push(node);
            lastNodes.push(node);
        });
    }
    if(lastNodes.length == 0) return arr;
    return htmlParserLoop(arr, lastNodes);
}