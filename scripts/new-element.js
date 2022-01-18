var defaults = {
    // CSS selectors and attributes that would be used by the JavaScript functions
    favItemName: "fav-item-name",
    favItemLink: "fav-item-link",
    taskId: "task-",
    formId: "todo-form",
    dataAttribute: "data",
    deleteItem: "delete-item"
  }

// Add Task
//Guys don't forget, we are nothing but pencils in the hands
//of the feeling.
var generateElement = function(params) {
    var parent = $(codes[params.code]),
        wrapper;
    if (!parent) {
      return;
    }
    wrapper = $("#favLinks", {
      "class" : defaults.favItemName,
      "id" : defaults.taskId + params.id,
      "data" : params.id
    }).appendTo(parent);
    $("#favLinks", {
      "class" : defaults.favItemLink,
      "text": params.title
    }).appendTo(wrapper);
  };
  //https://medium.com/@elijahvalentinetroyabako/building-a-to-do-list-with-jquery-and-local-storage-f287bd95d4dd