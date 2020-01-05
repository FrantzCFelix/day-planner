renderScores();

$(".save").on("click",function(){
//key-val
var dataIndex = $(this).parent().attr("data-index")
//console.log($(this).parent().attr("data-index")); 

//val-item
var value = $(this).siblings(".text-field").children().children().val();
//console.log($(this).siblings(".text-field").children().children().val());

localStorage.setItem(dataIndex, value);
});



function renderScores()
{   var dataArr = $(".row");
    for(var i = 0; i<9; i++)
    {
        var dataIndex = $(dataArr[i]).attr("data-index");
        var val = localStorage.getItem(dataIndex); 
        $(dataArr[i]).children(".text-field").find("input").val(val);
        //console.log($(dataArr[i]).val(val));
      //  $(dataArr[i]).val(val);

        
       
    }

   localStorage.getItem(dataIndex);  

}
