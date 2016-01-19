'use strict';

var fs = require('fs'),
    applyDelta = require('../');

var v1 = fs.readFileSync(__dirname + '/v1.txt', 'utf8').slice(0, -2),
    v2 = fs.readFileSync(__dirname + '/v2.txt', 'utf8').slice(0, -2),
    deltas = {
      v1_to_v2: require('./delta-v1-to-v2.json'),
      v2_to_v1: require('./delta-v2-to-v1.json'),
      v1_to_v1: [[0, v1.length]],
      v1_to_empty: [[-1, v1.length]],
      empty_to_v1: [[1, v1]],
      empty_to_empty: []
    };

describe('Should correctly apply delta patches for:', function () {
  it('v1 -> v2', function () {
    (applyDelta(v1, deltas.v1_to_v2)).should.equal(v2);
  });
  it('v2 -> v1', function () {
    (applyDelta(v2, deltas.v2_to_v1)).should.equal(v1);
  });
  it('v1 -> v1', function () {
    (applyDelta(v1, deltas.v1_to_v1)).should.equal(v1);
  });
  it('v1 -> empty', function () {
    (applyDelta(v1, deltas.v1_to_empty)).should.equal('');
  });
  it('empty -> v1', function () {
    (applyDelta('', deltas.empty_to_v1)).should.equal(v1);
  });
  it('empty -> empty', function () {
    (applyDelta('', deltas.empty_to_empty)).should.equal('');
  });
});
