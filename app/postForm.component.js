"use strict";

const postForm = {
    bindings: {
        showForm: "&",
        formToggle: "<",
        addPost: "&"
    },
    templateUrl: "app/postForm.html",

}









angular
    .module("App")
    .component("postForm", postForm)