var main_window=document.querySelector('#main-window');
var Multiprocess_Enable_entensionEnable;
try{
    Multiprocess_Enable_entensionEnable=getBoolPref('extensions.Multiprocess_Enable');
}
catch(e) {
    Multiprocess_Enable_entensionEnable=false;
}
if(Multiprocess_Enable_entensionEnable){
    main_window.querySelector('#Multiprocess_Enable_btn').className='Multiprocess_Enable_enable';

}
else {
    main_window.querySelector('#Multiprocess_Enable_btn').className='Multiprocess_Enable_disable';

}

function Multiprocess_Enable_entensionEnableSwitch(){
        if(Multiprocess_Enable_entensionEnable){
            Multiprocess_Enable_entensionEnable=false;
            setBoolPref('browser.tabs.remote.force-enable',false);
            setBoolPref('browser.tabs.remote.autostart',false);
            setIntPref('accessibility.force_disabled',0);
            main_window.querySelector('#Multiprocess_Enable_btn').className='Multiprocess_Enable_disable';
        }
        else {
            Multiprocess_Enable_entensionEnable=true;
            setBoolPref('browser.tabs.remote.force-enable',true);
            setBoolPref('browser.tabs.remote.autostart',true);
            setIntPref('accessibility.force_disabled',1);
            main_window.querySelector('#Multiprocess_Enable_btn').className='Multiprocess_Enable_enable';
        };
    setBoolPref('extensions.Multiprocess_Enable',Multiprocess_Enable_entensionEnable);
    }

//Read Preference Item
function getComplexValue(Varible)
	{
	var prefb = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	var str = prefb.getComplexValue(Varible, Components.interfaces.nsISupportsString);
	return str.data
 	}	
//Create Preference Item
function setComplexValue(Varible,Value)
	{
	var prefb = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
	str.data = Value;
	prefb.setComplexValue(Varible, Components.interfaces.nsISupportsString, str);
	}


    //Get Boolean Preference
    function getBoolPref(Varible)
    {
        var prefb = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
        var str = prefb.getBoolPref(Varible);
        return str
    }
    //Set Boolean Preference
    function setBoolPref(Varible,Value)
    {
        var prefb = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        prefb.setBoolPref(Varible, Value);
    }

function setIntPref(Varible,Value)
{
    var prefb = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
    prefb.setIntPref(Varible, Value);
}
