'use strict';

var Thermostat =  function() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.newTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTempBy = function(temp){
  temp = 1
  this.temperature += temp
};

Thermostat.prototype.decreaseTempBy = function(temp){
  if (this.isMinimumTemperature()) {
   return;
 }
 temp = 1
 this.temperature -= temp
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.isPowerSavingOff = function(){
 this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
