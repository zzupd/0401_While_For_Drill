$(function () {

    $("button").click(function () {


        var no1 = parseInt($("#no1").val());
        var no2 = parseInt($("#no2").val());
        var res = "";

        /* 순환문 while을 사용하여 1~5 출력 */
        var data1 = no1;   // 초기식, 초기값을 설정하는 식
        while (data1 <= no2) {

            res += (data1 + "<br>");
            // res = "" + (data1 + "<br>");

            /*alert("res : " + res);
              출력결과 => 5<br>6<br>7<br>8<br> */
            data1++;   // 조건변수증감식,
            // 조건식을 false로 설정하는 조건식 변수의 증감식
        }

            $("#res").html(res);
    });

});
