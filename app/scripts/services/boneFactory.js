/*
This Factory will operate the BeagleBone Black

Pins 3-8 are output
Pin 9 is the input from the cup detector
*/

//******Need commands to call this function**********
//Send: Integer value 1-6
//Receive: 0=process finished

"use strict";

ABAApp.service('BoneFactory', function() {
	var boneFactory;

	//variable and setting definition
	var b=require('bonescript');
	var x=0, A=0, B=0, C=0;
	b.pinmode(bone.P8_3,b.OUTPUT);//bay 1
	b.pinmode(bone.P8_4,b.OUTPUT);//bay 2
	b.pinmode(bone.P8_5,b.OUTPUT);//bay 3
	b.pinmode(bone.P8_6,b.OUTPUT);//bay 4
	b.pinmode(bone.P8_7,b.OUTPUT);//bay 5
	b.pinmode(bone.P8_8,b.OUTPUT);//rinse
	b.pinmode(bone.P8_9,b.INPUT);//cup detector

	boneFactory.operation = function(command) {
		if (command === 7) {
			boneFactory.rinse();
		}
		else if(command !== 0) {
			while (x!==HIGH) { //loop until cup is inserted
				b.digitalRead(bone.P8_9,x); //check if cup is present
				if (x===HIGH) { //proceed to "Pour" when cup is inserted
					boneFactory.pour(command);
				}
			}
		}
		x=LOW;
		//reset pins
		A=LOW;
		b.digitalWrite(bone.P8_3,A);
		b.digitalWrite(bone.P8_4,A);
		b.digitalWrite(bone.P8_5,A);
		b.digitalWrite(bone.P8_6,A);
		b.digitalWrite(bone.P8_7,A);
		b.digitalWrite(bone.P8_8,A);
		//wait for shot to refill
		PauseComp(20000);
		//return "finished" signal
		return 0;
	};

	boneFactory.rinse = function() {
		//set high for rinse
		A=HIGH;
		b.digitalWrite(bone.P8_8,A);
		//hold for 45 seconds (assume 15 seconds for water to finish draining)
		PauseComp(45000);
	}; //exit

	boneFactory.pour = function(command) {
		//Pour Bay #1
		if (command==1){
			A=HIGH;
			b.digitalWrite(bone.P8_3,A);
		}
		//Pour Bay #2
		else if (command==2){
			A=HIGH;
			b.digitalWrite(bone.P8_4,A);
		}
		//Pour Bay #3
		else if (command==3){
			A=HIGH;
			b.digitalWrite(bone.P8_5,A);
		}
		//Pour Bay #4
		else if (command==4){
			A=HIGH;
			b.digitalWrite(bone.P8_6,A);
		}
		//Pour Bay #5
		else if (command==5){
			A=HIGH;
			b.digitalWrite(bone.P8_7,A);
		}
		//hold for 12 seconds
		PauseComp(12000);
	}; //exit

	//from www.sean.co.uk/a/webdesign/javascriptdelay.shtm
	function PauseComp(ms){
		ms += new Date().getTime();
		while (new Date() < ms){}
	};

	return boneFactory;
});
