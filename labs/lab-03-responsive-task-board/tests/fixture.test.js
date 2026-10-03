import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync(new URL('../mock-data/tasks.json',import.meta.url)));
test('fixture has stable unique IDs and safe fields',()=>{assert.equal(data.length,3);
 assert.equal(new Set(data.map(x=>x.id)).size,3);
 for(const task of data){assert.equal(typeof task.title,'string');assert.equal(typeof task.done,'boolean');
 assert.equal(task.passwordHash,undefined);}});
