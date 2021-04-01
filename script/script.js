$(function () {

    $("button").click(function () {


        var no1 = parseInt($("#no1").val());
        var no2 = parseInt($("#no2").val());
        var res = "";

                  // 초기식                조건식           증감식
        for (var data1 = no1;  data1 <= no2; data1++) {

            res += (data1 + "<br>");

        }

            $("#res").html(res);
    });

});
