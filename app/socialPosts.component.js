"use strict";

const socialPosts = {
    templateUrl: "app/socialPosts.html",
    controller: [ function() {
        const vm = this;
        vm.postsLibrary = [{
            title: "My Day",
            thought: "Going great!"
        },
        {
            title: "Hello",
            thought: "whats up!"
        },
        {
            title: "Howdy Howdy",
            thought: "what a great app"
        }
    
    ]
    vm.formToggle = false;
    console.log(vm.postsLibrary)
    vm.addPost = function (newPost) {
        vm.postsLibrary.push(angular.copy(newPost));
        console.log(newPost);
        vm.formToggle = false;
    }
    vm.deletePost = function (index) {
        console.log(index)
        vm.postsLibrary.splice(index, 1)
    }
    vm.showForm = function() {
        console.log(`howdy howdy howdy`)
        vm.formToggle = true;
    }
    
    }]
}






angular
    .module("App")
    .component("socialPosts", socialPosts)