## 서비스에서 액티비티로 인텐트 값 전달 삽질
- 서비스에서 인텐트의 값을 브로드캐스트 리시버로 전달하면 Null Point Exception 오류가 발생한다. 아무래도 안드로이드의 액티비티 콜 스택을 제대로 이해하지 못한 상태에서, intent 갱신이나 추가하는 부분에 있어 기존 액티비티와 충돌하는 걸로 간주된다. PendingIntent 를 이용해 intent 의 값을 전달하는 것이 더 정석인 것 같은데 안드로이드 컴포넌트에 대한 이해가 충분하지 못하여, 실수를 범했다.
- 코드는 아래와 같다.

``` java
public class MainActivity extends AppCompatActivity {

  IntentFilter intentFilter;
  BroadcastReceiver mReceiver;

  protected void onCreate(Bundle savedInstanceState) {
    intentFilter = new IntentFilter();
    intentFilter.addAction("com.poscoict.fcm.push");

    mReceiver = new BroadcastReceiver() {
       @Override
       public void onReceive(Context context, Intent intent) {
           String str = intent.getStringExtra("push_content");
           Log.d(TAG, "received msg : " + str);
           Log.d(TAG, "Recieved message by BroadcastReciever: " + intent.getAction());
           textView = (TextView)findViewById(R.id.txtView1);
           textView.setText(str);
       }
    };

    registerReceiver(mReceiver, intentFilter);
  }

}
```
