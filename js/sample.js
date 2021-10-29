
// 最初に画面をスライドダウン
$("main").slideDown(500);

      ///////// 選択タブ（活動レベル）///////////
      const mix = {
        text: [
          "ほぼ運動しない.通勤・デスクワーク程度",
          "軽い運動.週に1〜2回程度の運動",
          "中程度の運動.週に3〜5回程度の運動",
          "激しい運動.週に6〜7回程度の運動",
          "非常に激しい運動.1日に2回程度の運動",
        ],
        number: [1.2, 1.375, 1.55, 1.725, 1.9],
      };
      // optionタグの生成
      const start = 0;
      const end = 4;
      let option = "";
      for (let i = start; i <= end; i++) {
        option += "<option>" + mix.text[i] + "</option>";
      }
      $("#select_m").html(option);
      $("#select_w").html(option);

      ///////////計算（男性）///////////
      $("#calc_m").on("click", function () {
        let h = Number($("#height").val());
        let w = Number($("#weight").val());
        let a = Number($("#age").val());
        if ($("#select_m").val() === mix.text[0]) {
          $("#result_m").html(
            ((66 + 13.7 * w + 5 * h - 6.8 * a) * mix.number[0]).toFixed() +
              "cal"
          );
        } else if ($("#select_m").val() === mix.text[1]) {
          $("#result_m").html(
            ((66 + 13.7 * w + 5 * h - 6.8 * a) * mix.number[1]).toFixed() +
              "cal"
          );
        } else if ($("#select_m").val() === mix.text[2]) {
          $("#result_m").html(
            ((66 + 13.7 * w + 5 * h - 6.8 * a) * mix.number[2]).toFixed() +
              "cal"
          );
        } else if ($("#select_m").val() === mix.text[3]) {
          $("#result_m").html(
            ((66 + 13.7 * w + 5 * h - 6.8 * a) * mix.number[3]).toFixed() +
              "cal"
          );
        } else {
          $("#result_m").html(
            ((66 + 13.7 * w + 5 * h - 6.8 * a) * mix.number[4]).toFixed() +
              "cal"
          );
        }
      });

      //////////// 計算（女性）////////////
      $("#calc_w").on("click", function () {
        let h = Number($("#height").val());
        let w = Number($("#weight").val());
        let a = Number($("#age").val());
        if ($("#select_w").val() === mix.text[0]) {
          $("#result_w").html(
            ((665 + 9.6 * w + 1.7 * h - 7 * a) * mix.number[0]).toFixed() +
              "cal"
          );
        } else if ($("#select_w").val() === mix.text[1]) {
          $("#result_w").html(
            ((665 + 9.6 * w + 1.7 * h - 7 * a) * mix.number[1]).toFixed() +
              "cal"
          );
        } else if ($("#select_w").val() === mix.text[2]) {
          $("#result_w").html(
            ((665 + 9.6 * w + 1.7 * h - 7 * a) * mix.number[2]).toFixed() +
              "cal"
          );
        } else if ($("#select_w").val() === mix.text[3]) {
          $("#result_w").html(
            ((665 + 9.6 * w + 1.7 * h - 7 * a) * mix.number[3]).toFixed() +
              "cal"
          );
        } else {
          $("#result_w").html(
            ((665 + 9.6 * w + 1.7 * h - 7 * a) * mix.number[4]).toFixed() +
              "cal"
          );
        }
      });
      /////////// 増減セクション////////////////










      
      //////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date1").val();
        const weight = $("#today_weight1").val();
        const calorie = $("#today_cal1").val();
        const change = $("#change").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo");
        // テキストエリア空白で上書き
        $("#date1").val("");
        $("#today_weight1").val("");
        $("#today_cal1").val("");
        $("#change").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date1").val(hole.date);
        $("#today_weight1").val(hole.weight);
        $("#today_cal1").val(hole.calorie);
        $("#change").val(hole.change);
      }

      //////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date2").val();
        const weight = $("#today_weight2").val();
        const calorie = $("#today_cal2").val();
        const change = $("#change2").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo2", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo2");
        // テキストエリア空白で上書き
        $("#date2").val("");
        $("#today_weight2").val("");
        $("#today_cal2").val("");
        $("#change2").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo2")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo2");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date2").val(hole.date);
        $("#today_weight2").val(hole.weight);
        $("#today_cal2").val(hole.calorie);
        $("#change2").val(hole.change);
      }
      //////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date3").val();
        const weight = $("#today_weight3").val();
        const calorie = $("#today_cal3").val();
        const change = $("#change3").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo3", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo3");
        // テキストエリア空白で上書き
        $("#date3").val("");
        $("#today_weight3").val("");
        $("#today_cal3").val("");
        $("#change3").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo3")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo3");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date3").val(hole.date);
        $("#today_weight3").val(hole.weight);
        $("#today_cal3").val(hole.calorie);
        $("#change3").val(hole.change);
      }
      //////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date4").val();
        const weight = $("#today_weight4").val();
        const calorie = $("#today_cal4").val();
        const change = $("#change4").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo4", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo4");
        // テキストエリア空白で上書き
        $("#date4").val("");
        $("#today_weight4").val("");
        $("#today_cal4").val("");
        $("#change4").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo4")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo4");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date4").val(hole.date);
        $("#today_weight4").val(hole.weight);
        $("#today_cal4").val(hole.calorie);
        $("#change4").val(hole.change);
      }
//////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date5").val();
        const weight = $("#today_weight5").val();
        const calorie = $("#today_cal5").val();
        const change = $("#change5").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo5", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo5");
        // テキストエリア空白で上書き
        $("#date5").val("");
        $("#today_weight5").val("");
        $("#today_cal5").val("");
        $("#change5").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo5")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo5");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date5").val(hole.date);
        $("#today_weight5").val(hole.weight);
        $("#today_cal5").val(hole.calorie);
        $("#change5").val(hole.change);
      }
      //////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date6").val();
        const weight = $("#today_weight6").val();
        const calorie = $("#today_cal6").val();
        const change = $("#change6").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo6", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo6");
        // テキストエリア空白で上書き
        $("#date6").val("");
        $("#today_weight6").val("");
        $("#today_cal6").val("");
        $("#change6").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo6")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo6");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date6").val(hole.date);
        $("#today_weight6").val(hole.weight);
        $("#today_cal6").val(hole.calorie);
        $("#change6").val(hole.change);
      }
      //////////////////////// 保存/////////////////////
      $("#save").on("click", function () {
        // テキストエリアの内容取得
        const date = $("#date7").val();
        const weight = $("#today_weight7").val();
        const calorie = $("#today_cal7").val();
        const change = $("#change7").val();
        const hole = {
          date: date,
          weight: weight,
          calorie: calorie,
          change: change,
        };
        // console.log(hole);
        const jsonData = JSON.stringify(hole);
        // console.log(jsonData);
        // ローカルストレージのmemoに保存
        localStorage.setItem("memo7", jsonData);
      });
      ///////////////////// 削除/////////////////////
      $("#clear").on("click", function () {
        // ローカルストレージのmemo内容削除
        localStorage.removeItem("memo7");
        // テキストエリア空白で上書き
        $("#date7").val("");
        $("#today_weight7").val("");
        $("#today_cal7").val("");
        $("#change7").val("");
      });
      // ローカルストレージにmemoの内容あるか確認
      if (localStorage.getItem("memo7")) {
        // ローカルストレージのmemoを取得
        const jsonData = localStorage.getItem("memo7");
        const hole = JSON.parse(jsonData);
        // console.log(hole);
        // 取得した内容でテキストエリアを上書き
        $("#date7").val(hole.date);
        $("#today_weight7").val(hole.weight);
        $("#today_cal7").val(hole.calorie);
        $("#change7").val(hole.change);
      }
      ////////////////////////メモ追加//////////////////////
      // ボタンを押す
// let restart = 0;
// if (!localStorage.getItem("reset_memo")) {
//   localStorage.setItem("reset_memo", 0);
// };
// $("#more").on("click", function () {
//   restart = parseInt(localStorage.getItem("reset_memo"));
//   restart++;
//   localStorage.setItem("reset_memo", restart);
// });
// // 1回目
// if (localStorage.getItem("reset_memo")==="0") {
//   $('#more').on("click", function () {
//     $("#memo2").show();
//   });
// };




// $("#more").on("click", function () {
//   let count = 0;
//   return function () {
//     count++;
//     if (count === 1) {
//       // 一回目の処理を書く
//       // console.log("#memo2").show();
//       $("#memo2").show();
//     } else if (count === 2) {
//       // 二回目の処理を書く
//       $("#memo3").show();
//     } else if (count === 3) {
//       // 三回目の処理を書く
//       $("#memo4").show();
//     } else if(count===4){
//       // 四回目以降 (何も書かない)
//       $("#memo5").show();
//     } else if (count === 5) {
//       $("#memo6").show();
//     } else {
//       $("#memo7").show();
//     };
//   };
// });

        // trタグ取得
        // var tr_form =
        //   "" +
        //   "<tr>" +
        //   '<td><input type="date" id="date"></td>' +
        //   '<td><input type="number" id="today_weight"></td>' +
        //   '<td><input type="number" id="today_cal"></td>' +
        //   '<td><input type="text" id="change" readonly=""></td>' +
        //   "</tr>";
        // // table内にtrタグ生成
        // $("table").append($(tr_form));
      // ※追加したメモをストレージに保存したい
      // 【仮説】
      // ■trタグは生成されるものの、idは付与されない？
      // ■同じidだとローカルストレージに保存できない？
      // 【方法】
      // ■新たに生成されたメモにIDを付与
      // ■IDが付与されたメモをローカルストレージに保存、削除、取得処理（できる）

//////////////////////////////増減セクション/////////////////////////////////////

// $('#calculation').on('click', function () {
//   $('change').value = (Math.round(result_m - today_cal))
// });
// function calc(today_cal, result_m) {

// };











////////////////////////体重を棒グラフ化//////////////////////////

// まだわからん
// const numbers = [];
// for (let i = 1; i < 8; i++) {
//   $(`#today_weight${i}`).change(function () {
//     let number = $(`#today_weight${i}`).val();
//     numbers.push(number);
//     console.log(numbers);
//   });
// }


// // ▼折れ線グラフの中身
// let lineChartData = {
//   labels: [
//     $('#date1').val(),
//     $('#date2').val(),
//     $('#date3').val(),
//     $('#date4').val(),
//     $('#date5').val(),
//     $('#date6').val(),
//     $('#date7').val(),
//   ],
//   datasets: [
//     {
//       label: "緑データ",
//       fillColor: "rgba(92,220,92,0.2)", // 線から下端までを塗りつぶす色
//       strokeColor: "rgba(92,220,92,1)", // 折れ線の色
//       pointColor: "rgba(92,220,92,1)",  // ドットの塗りつぶし色
//       pointStrokeColor: "white",        // ドットの枠線色
//       pointHighlightFill: "yellow",     // マウスが載った際のドットの塗りつぶし色
//       pointHighlightStroke: "green",    // マウスが載った際のドットの枠線色
//       data: [
//         $('#today_weight1').val(),
//         $('#today_weight2').val(),
//         $('#today_weight3').val(),
//         $('#today_weight4').val(),
//         $('#today_weight5').val(),
//         $('#today_weight6').val(),
//         $('#today_weight7').val(),
//       ] ,     // 各点の値
//     },
//   ]
// };
// //// ▼上記のグラフを描画するための記述
// window.onload = function(){
//       var ctx = document.getElementById("graph-area").getContext("2d");
//       window.myLine = new Chart(ctx).Line(lineChartData);
// }

// $('td').on('change', 'input', function (){
//   lineChartData.datasets[0].data.length = 0;
//   let numbers = [
//     $('#today_weight1').val(),
//     $('#today_weight2').val(),
//     $('#today_weight3').val(),
//     $('#today_weight4').val(),
//     $('#today_weight5').val(),
//     $('#today_weight6').val(),
//     $('#today_weight7').val(),
//   ];   // 各点の値

//   lineChartData.datasets[0].data = numbers;
//   let ctx = document.getElementById("graph-area").getContext("2d");
//   window.myLine = new Chart(ctx).Line(lineChartData);
// });




  var ctx = document.getElementById("myMixChart");
  var myMixChart = new Chart(ctx, {
    type: 'bar',
    data: {
//データ項目のラベル
      labels: [
        $('#date1').val(),
        $('#date2').val(),
        $('#date3').val(),
        $('#date4').val(),
        $('#date5').val(),
        $('#date6').val(),
        $('#date7').val(),],
        datasets: [{
            //棒グラフ
            label: "1日のカロリー", //データ項目のラベル
          data: [
            $('#today_cal1').val(),
            $('#today_cal2').val(),
            $('#today_cal3').val(),
            $('#today_cal4').val(),
            $('#today_cal5').val(),
            $('#today_cal6').val(),
            $('#today_cal7').val(),
          ], //グラフのデータ
            backgroundColor: "rgba(200,112,126,0.5)",
            yAxisID: 'left-y-axis' //左の縦軸に表示
        }, {
            //折れ線グラフ
            label: "体重", //データ項目のラベル
            type: 'line',
          data: [
            $('#today_weight1').val(),
            $('#today_weight2').val(),
            $('#today_weight3').val(),
            $('#today_weight4').val(),
            $('#today_weight5').val(),
            $('#today_weight6').val(),
            $('#today_weight7').val(),
          ], //グラフのデータ
            borderColor: "rgba(80,126,164,1)",
            backgroundColor: "rgba(0,0,0,0)",
            yAxisID: 'right-y-axis' //右の縦軸に表示
        }]
    },
    options: {
      title: {
        display: true,
        //グラフタイトル
        text: '自己管理表'
      },
      scales: {
            yAxes: [
                {
                 //左軸の設定
                  id: 'left-y-axis',
                  position: 'left',
                  ticks: {
                    suggestedMax: 5000, //最大値
                    suggestedMin: 0,  //最小値
                    stepSize: 500, //縦ラベルの数値単位
                    callback: function(value, index, values){
                      return  value +  'cal' //単位
                    }
                  }
              }, {
                 //右軸の設定
                  id: 'right-y-axis',
                  position: 'right',
                  ticks: {
                    suggestedMax: 150, //最大値
                    suggestedMin: 0,  //最小値
                    stepSize: 10, //縦ラベルの数値単位
                    callback: function(value, index, values){
                      return  value +  'kg' //単位
                    }
                  },
              }]
        }}
  });
    window.onload = function(){
      var ctx = document.getElementById("graph-area").getContext("2d");
      window.myLine = new Chart(ctx).Line(myMixChart);
    }

    $('td').on('change', 'input', function (){
  myMixChart.data.length = 0;
  let numbers = [
    $('#today_weight1').val(),
    $('#today_weight2').val(),
    $('#today_weight3').val(),
    $('#today_weight4').val(),
    $('#today_weight5').val(),
    $('#today_weight6').val(),
    $('#today_weight7').val(),
  ];   // 各点の値

  myMixChart.data = numbers;
  var ctx = document.getElementById("graph-area").getContext("2d");
  window.myLine = new Chart(ctx).Line(myMixChart);
});
