var counter = 4;

$("button").on("click", function () {
    $(".todo-container").append("<p class='todo-item'><span></span></p>");
    $(".todo-item").text($("input").val());
    $("input").text(" ");
});

