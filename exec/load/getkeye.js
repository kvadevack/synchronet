// Used for handling the input of /X commands

// $Id: getkeye.js,v 1.3 2010/11/17 01:33:33 rswindell Exp $

if(!js.global || js.global.K_UPPER==undefined)
	load("sbbsdefs.js");

function getkeye()
{
	var key;
	var key2;

	while(1) {
		key=console.getkey(K_UPPER);
		if(key=='/') {
			print(key);
			key2=console.getkey(K_UPPER);
			if(key2=="\b" || key2=="\e") {
				print("\b \b");
				continue;
			}
			key=key+key2;
		}
		break;
	}
	return(key);
}
