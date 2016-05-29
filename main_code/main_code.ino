#include "U8glib.h"

U8GLIB_SH1106_128X64 u8g(U8G_I2C_OPT_NONE);  // I2C / TWI 

int oldHeartRate = 0;  // last heart rate reading from analog input
long previousMillis = 0;  // last time the heart rate was checked, in ms
int stressLevel=15,factor=23;
bool stat=true;
void draw(void) {
  // graphic commands to redraw the complete screen should be placed here  
  u8g.setFont(u8g_font_unifont);
  u8g.setPrintPos(0, 10); 
  // call procedure from base class, http://arduino.cc/en/Serial/Print
  u8g.print("    Phobium");
  u8g.setPrintPos(0, 30); 
  //if(oldHeartRate>70){
      u8g.print("HeartRate:"); // print it
      u8g.print(String(oldHeartRate)+"bpm");
    //}
    u8g.setPrintPos(0, 50); 
    u8g.print("StressLevel:"+String(stressLevel)+"%");
}
void updateHeartRate() {
  /* Read the current voltage level on the A0 analog input pin.
     This is used here to simulate the heart rate's measurement.
  */
  int heartRateMeasurement = analogRead(A0);
  int heartRate = map(heartRateMeasurement, 0, 1023, 0, 100);
  if (heartRate != oldHeartRate) {      // if the heart rate has changed
    if(((millis()-previousMillis))/1000>4){
      //Serial.println(millis());
      previousMillis=millis();
      if(stat==true && factor>17){
        factor-=2;
      }else if(stat==false && factor<23){
        factor+=2;
      }
      if(stat==false && stressLevel>15){
        stressLevel-=rand()%3;  
      }else if(stat==true && stressLevel<25){
        stressLevel+=rand()%3;  
      }
      if(stressLevel>25 || stressLevel<15){
        stat^=true;
      }
      if(stressLevel>25 && stat==false){
        analogWrite(A1,130);
        delay(200);
        analogWrite(A1,0);
        delay(200);
        analogWrite(A1,130);
        delay(200);
      }
    }
    heartRate-=factor;
    //if(heartRate>70){
      //Serial.print("Heart Rate is now: "); // print it
      //Serial.println(heartRate);
    //}
    const unsigned char heartRateCharArray[2] = { 0, (char)heartRate };
    //heartRateChar.setValue(heartRateCharArray, 2);  // and update the heart rate measurement characteristic
    if(heartRate>74){
      oldHeartRate = heartRate;           // save the level for next comparison  
    }
  }
}
void setup(void) {
  // flip screen, if required
  // u8g.setRot180();
  pinMode(A1,OUTPUT);
#ifndef ESP8266
  while (!Serial); // for Leonardo/Micro/Zero
#endif
  //Serial.begin(115200);
}
int c=0;
void loop(void) {
  // picture loop
  analogWrite(A1,0);
  updateHeartRate();
  
  u8g.firstPage();  
  do {
    draw();
  } while( u8g.nextPage() );
  
  // rebuild the picture after some delay
  //delay(500); 
  if(c<2){
    analogWrite(A1,130);
    delay(200);  
    c++;
  }
  
  
}


