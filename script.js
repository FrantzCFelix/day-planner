$(document).ready(function(){

renderScores();
time();
$(".save").on("click", function () {

    //key-val
    var dataIndex = $(this).parent().attr("data-index")

    //val-item
    var value = $(this).siblings(".text-field").children().children().val();

    localStorage.setItem(dataIndex, value);

});

function time() {
    var now = moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().format("do");
    var hour = moment().hour();
    var dataArr = $(".row");
    $("#currentDay").text(now);

    for (var i = 0; i < 9; i++) {
        var dataTime = $(dataArr[i]).attr("data-time");
        var inputField = $(dataArr[i]).find("input");
    

        if (parseInt(dataTime) > hour) {

            inputField.attr("class", "form-control text-white bg-success");
       
        }
        if (parseInt(dataTime) === hour) {
            inputField.attr("class", "form-control text-white bg-danger");
          
        }
        if (parseInt(dataTime) < hour) {
            inputField.attr("class", "form-control text-white bg-secondary");
           
        }


    }


}

function renderScores() {
    var dataArr = $(".row");
    for (var i = 0; i < 9; i++) {
        var dataIndex = $(dataArr[i]).attr("data-index");
        var val = localStorage.getItem(dataIndex);
        $(dataArr[i]).children(".text-field").find("input").val(val);
      
    }

    localStorage.getItem(dataIndex);

}

});