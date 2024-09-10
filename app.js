//. app.js
const N = 10;
const M = 3;
const pairs = {
  //JPY: "円", 
  USD: { name: "ドル", base: 140.0, step: 0.1 },
  EUR: { name: "ユーロ", base: 150.0, step: 0.1 },
  CAD: { name: "カナダドル", base: 100.0, step: 0.1 },
  AUD: { name: "豪ドル", base: 90.0, step: 0.1 },
  NZD: { name: "NZドル", base: 80.0, step: 0.1 },
  HKD: { name: "香港ドル", base: 10.0, step: 0.01 },
  SGD: { name: "シンガポールドル", base: 100.0, step: 0.1 },
  CHF: { name: "スイスフラン", base: 160.0, step: 0.1 },
  GBP: { name: "英ポンド", base: 180.0, step: 0.1 },
  ZAR: { name: "南アランド", base: 6.0, step: 0.01 },
  TRY: { name: "トルコリラ", base: 3.0, step: 0.01 },
  CNH: { name: "人民元", base: 15.0, step: 0.01 },
  NOK: { name: "ノルウェークローネ", base: 10.0, step: 0.01 },
  SEK: { name: "スウェーデンクローナ", base: 10.0, step: 0.01 },
  MXN: { name: "メキシコペソ", base: 5.0, step: 0.01 }
};

async function generate_jsonl(){
  return new Promise( async ( resolve, reject ) => {
    //. シンプルな例
    await generate_jsonl_sample1();

    //. 逆算の例
    await generate_jsonl_sample2();

    //. ２つ組み合わせる例
    await generate_jsonl_sample3();
  });
}

//. シンプルな例
async function generate_jsonl_sample1(){
  return new Promise( async ( resolve, reject ) => {
    Object.keys( pairs ).forEach( function( XXX ){
      var pair = pairs[XXX];
      for( var i = 0; i < N; i ++ ){
        var price = pair.base + i * pair.step; 
        for( var j = 1; j <= M; j ++ ){
          var n = 10 * j;
          var ans_price = n * price;

          var input = '1' + pair.name + 'は' + price + '円です。' + n + pair.name + 'は何円ですか？';
          //var output = '1' + pair.name + 'が' + price + '円なので、' + price + ' * ' +  n + ' = ' + jpy_price + '円です。'; 
          var output = '1' + pair.name + 'が' + price + '円なので、' + ans_price + '円です。'; 
          console.log( '{"input": "' + input + '", "output": "' + output + '"}' );
        }
      }
    });
    resolve( true );
  });
}

//. 逆算の例
async function generate_jsonl_sample2(){
  return new Promise( async ( resolve, reject ) => {
    Object.keys( pairs ).forEach( function( XXX ){
      var pair = pairs[XXX];
      for( var i = 0; i < N; i ++ ){
        var price = pair.base + i * pair.step; 
        for( var j = 1; j <= M; j ++ ){
          var n = 1 * j;
          var ans_price = n * ( 1.0 / price );

          var input = '1' + pair.name + 'は' + price + '円です。' + n + '円は何' + pair.name + 'ですか？';
          //var output = '1' + pair.name + 'が' + price + '円なので、' + price + ' * ' +  n + ' = ' + jpy_price + '円です。'; 
          var output = '1' + pair.name + 'が' + price + '円なので、' + ans_price + pair.name + 'です。'; 
          console.log( '{"input": "' + input + '", "output": "' + output + '"}' );
        }
      }
    });
    resolve( true );
  });
}

//. ２つ組み合わせる例
async function generate_jsonl_sample3(){
  return new Promise( async ( resolve, reject ) => {
    var arr = [];
    Object.keys( pairs ).forEach( function( XXX ){
      var pair = pairs[XXX];
      arr.push( pair );
    });

    for( var i = 0; i < arr.length; i ++ ){
      var pair1 = arr[i];
      var pair2 = arr[(i+1) % arr.length]
      var ans_price = ( 1.0 / pair2.base ) * ( pair1.base );
      
      var input = '1' + pair1.name + 'は' + pair1.base + '円で、1' + pair2.name + 'は' + pair2.base + '円です。1' + pair1.name + 'は何' + pair2.name + 'ですか？';
      var output = '1' + pair1.name + 'が' + pair1.base + '円で、1' + pair2.name + 'は' + pair2.base + '円なので、' + ans_price + pair2.name + 'です。'; 
      console.log( '{"input": "' + input + '", "output": "' + output + '"}' );
    }
    resolve( true );
  });
}

generate_jsonl().then( function( result ){
  console.log( 'done.', {result} );
});
