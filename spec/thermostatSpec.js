'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.newTemperature()).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.increaseTempBy(1);
    expect(thermostat.newTemperature()).toEqual(21);
  });

  it('can decrease the temperature', function(){
    thermostat.decreaseTempBy();
    expect(thermostat.newTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTempBy();
    }
    expect(thermostat.newTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when PSM is on', function(){
    it('has temperture of 25 degrees', function(){
      for (var i = 0; i < 6; i ++){
        thermostat.increaseTempBy();
      }
      expect(thermostat.newTemperature()).toEqual (25);
    });
  });

  it('can be reset to default temperature', function(){
    for (var i = 0; i < 6; i ++){
      thermostat.increaseTempBy();
    }
    thermostat.resetTemperature();
    expect(thermostat.newTemperature()).toEqual(20);
  });
  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTempBy();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 9 ; i++) {
          thermostat.increaseTempBy();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
