
       var num;
       var interval_id;
       var runFlag = false;
       var counter = 0;
              
              
       // 0〜15までの数字が入った配列を用意
       function createNums () {
           var array = new Array();
           for ( var i = 0; i < 16; i++ ) {
                 array[i] = i;
           }
           
           // 作った配列を関数createnumsにreturn
           return array;
       }
       
       // 配列をnumsに代入
       var nums = createNums();
       
       function startFunc() {
           
           // counterが16に達していなくて…
           if ( counter < 16 ) {
               
               // かつ、回転中フラグがfalseの場合のみ…
               if ( runFlag === false ) {
                   
                   // 前回止まった時のnumのclassからhighlightを削除
                   $ ('li').eq(num).removeClass('highlight');
                   
                   // 前回止まった時のnumのclassにoffを追加
                   $ ('li').eq(num).addClass('off');
                   
                   // 0.05秒毎にroulette関数を実行
                   interval_id = setInterval(roulette, 50);
                   
                   // 回転中フラグをtrueに
                   runFlag = true;
                   
                   // カウンターをインクリ
                   counter++;
               
               }
               
               // counterが16に達している場合
           } else {
               
               // アラート表示
               alert('全て獲得済みです！');
               
           }
       }
       
       function roulette() {
           
           // 0.05秒前に光ってた数字からrotationクラスを削除
           $ ('li').eq(num).removeClass('rotation');
           
           // 0〜残ってるnumsの要素数-1 までの数字をランダム生成しnumに代入
           num = nums[Math.floor(Math.random() * nums.length)];
           
           // numで生成された番号のliにrotationクラスを付与
           $ ('li').eq(num).addClass('rotation');
           
       }
       
       function stopFunc() {
           
           // rouletteを停止
           clearInterval(interval_id);
           
           // 以下を配列の要素の数だけ繰り返す
           for ( var i = 0; i < nums.length; i++ ) {
               
               // 止まったところの数字（0〜15）と、配列numsの中の数字を見比べて、同じ数字を削除
               if ( num === nums[i] ) {
                   nums.splice(i, 1);
                   
                   // 見つけて削除したらfor文を抜ける
                   break;
               }
               
           }
           
           // 止まったところのrotationクラスを削除して
           $ ('li').eq(num).removeClass('rotation');
           
           // highlightクラスを付与
           $ ('li').eq(num).addClass('highlight');
           
           // 回転フラグをfalseに
           runFlag = false;
       }
       
       function resetFunc() {
           
           // 更新を停止して
           clearInterval(interval_id);
           
           // liのclassをリセット
           $ ('li').removeClass('off rotation highlight');
           
           // カウンターをリセット
           counter = 0;
           
           // 新しい配列を作成
           nums = createNums();
           
           // numをありえない数字にすることでリセット
           num = -99;
           
           // 回転中フラグをfalseに
           runFlag = false;
       }
       
       
       $ (function() {
           
           $ ('#startBtn').click(startFunc);
           $ ('#stopBtn').click(stopFunc);
           $ ('#resetBtn').click(resetFunc);
           
       });
       