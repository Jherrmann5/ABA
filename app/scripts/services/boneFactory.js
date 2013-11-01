/*
This Factory will operate the BeagleBone Black

Pins 3-5 are output (0-7 in binary)
Pin 6 is the input from the cup detector
Pro
*/

//******Need commands to call this function**********
//Send: Integer value 1-7
//Receive: 0=process finished

"use strict";

ABAApp.service('BoneFactory', function() {
	var boneFactory;

	//variable and setting definition
	var b=require('bonescript');
	var x=0, A=0, B=0, C=0;
	b.pinmode(bone.P8_3,b.OUTPUT);
	b.pinmode(bone.P8_4,b.OUTPUT);
	b.pinmode(bone.P8_5,b.OUTPUT);
	b.pinmode(bone.P8_6,b.INPUT);

	boneFactory.operation = function(command) {
		if (command === 7) {
			boneFactory.rinse();
		}

		while (x!==1) { //loop until cup is inserted
			b.digitalRead(bone.P8_6,x); //check if cup is present
			if (x===1) { //proceed to "Pour" when cup is inserted
				boneFactory.pour(command);
			}
		}
		x=0;
		//reset pins
		A=0;
		B=0;
		C=0;
		b.digitalWrite(bone.P8_3,A);
		b.digitalWrite(bone.P8_4,B);
		b.digitalWrite(bone.P8_5,C);
		//return "finished" signal
		return 0;
	};

	boneFactory.rinse = function() {
		//set all pins high for rinse
		A=1;
		b.digitalWrite(bone.P8_3,A);
		b.digitalWrite(bone.P8_4,A);
		b.digitalWrite(bone.P8_5,A);
		//hold for 45 seconds (assume 15 seconds for water to finish draining)
		PauseComp(45000);
	}; //exit

	boneFactory.pour = function(command) {
		//Pour Bay #1
		if (command==1){
			A=0;
			B=0;
			C=1;
			b.digitalWrite(bone.P8_3,A);
			b.digitalWrite(bone.P8_4,B);
			b.digitalWrite(bone.P8_5,C);
		}
		//Pour Bay #2
		else if (command==2){
			A=0;
			B=1;
			C=0;
			b.digitalWrite(bone.P8_3,A);
			b.digitalWrite(bone.P8_4,B);
			b.digitalWrite(bone.P8_5,C);
		}
		//Pour Bay #3
		else if (command==3){
			A=0;
			B=1;
			C=1;
			b.digitalWrite(bone.P8_3,A);
			b.digitalWrite(bone.P8_4,B);
			b.digitalWrite(bone.P8_5,C);
		}
		//Pour Bay #4
		else if (command==4){
			A=1;
			B=0;
			C=0;
			b.digitalWrite(bone.P8_3,A);
			b.digitalWrite(bone.P8_4,B);
			b.digitalWrite(bone.P8_5,C);
		}
		//Pour Bay #5
		else if (command==5){
			A=1;
			B=0;
			C=1;
			b.digitalWrite(bone.P8_3,A);
			b.digitalWrite(bone.P8_4,B);
			b.digitalWrite(bone.P8_5,C);
		}
		//Pour Bay #6
		else if (command==6){
			A=1;
			B=1;
			C=0;
			b.digitalWrite(bone.P8_3,A);
			b.digitalWrite(bone.P8_4,B);
			b.digitalWrite(bone.P8_5,C);
		}
		//hold for 15 seconds
		PauseComp(12000);
	}; //exit

	//from www.sean.co.uk/a/webdesign/javascriptdelay.shtm
	function PauseComp(ms){
		ms += new Date().getTime();
		while (new Date() < ms){}
	};

	return boneFactory;
});
