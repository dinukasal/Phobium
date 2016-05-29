int oldHeartRate = 0;  // last heart rate reading from analog input
long previousMillis = 0;  // last time the heart rate was checked, in ms

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  updateHeartRate();
  delay(200);
}

void updateHeartRate() {
  /* Read the current voltage level on the A0 analog input pin.
     This is used here to simulate the heart rate's measurement.
  */
  int heartRateMeasurement = analogRead(A0);
  int heartRate = map(heartRateMeasurement, 0, 1023, 0, 100);
  if (heartRate != oldHeartRate) {      // if the heart rate has changed

     heartRate-=18;    
    if(heartRate>70){
      Serial.print("Heart Rate is now: "); // print it
      Serial.println(heartRate);
    }
    const unsigned char heartRateCharArray[2] = { 0, (char)heartRate };
    //heartRateChar.setValue(heartRateCharArray, 2);  // and update the heart rate measurement characteristic
    oldHeartRate = heartRate;           // save the level for next comparison
  }
}
