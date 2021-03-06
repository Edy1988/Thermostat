'use strict';

var Thermostat =  function() {

  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.temperature = this.DEFAULT_TEMPERATURE;
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
};
Thermostat.prototype.increaseTempBy = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){

  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_TEMP_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
