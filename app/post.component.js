"use strict";

const post = {
    bindings:{ 
        deletePost: "&",
        postLibrary: "<"
        
    
    },
    templateUrl: 'app/post.html'
}





angular
    .module("App")
    .component("post", post)




