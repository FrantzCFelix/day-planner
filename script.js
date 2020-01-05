renderScores();
time();


$(".save").on("click",function(){

//key-val
var dataIndex = $(this).parent().attr("data-index")

//val-item
var value = $(this).siblings(".text-field").children().children().val();

localStorage.setItem(dataIndex, value);

});

function time()
{
    var now = moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().format("do") ;
    var hour = moment().hour();
    var dataArr = $(".row");
    $("#currentDay").text(now);
    
    for(var i = 0; i<9; i++)
    {
        var dataTime = $(dataArr[i]).attr("data-time");
        var inputField = $(dataArr[i]).find("input");
        console.log(inputField);


        if(parseInt(dataTime) > hour)
        {
           
            inputField.attr("class", "form-control text-white bg-success");
           // console.log("green");
        }
        if (parseInt(dataTime) === hour)
        {
            inputField.attr("class", "form-control text-white bg-danger");
            //console.log("red");
        }
        if(parseInt(dataTime) < hour)
        {
            inputField.attr("class", "form-control text-white bg-secondary");
           // console.log("grey");
           

        }

        console.log(dataTime);



    }
    

}



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
