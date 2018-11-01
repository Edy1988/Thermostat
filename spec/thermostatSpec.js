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

  it('can swith off powerSavingMode', function(){
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);

  }
});
