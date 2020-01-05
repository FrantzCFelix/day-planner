

$(".save").on("click",function(){
//key-val
console.log($(this).parent().attr("data-index")); 

//val-item
console.log($(this).siblings(".text-field").children().children().val());


});