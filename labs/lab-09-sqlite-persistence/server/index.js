import express from 'express';
import {DatabaseSync} from 'node:sqlite';
import seed from '../mock-data/tasks.json' with {type:'json'};
const db=new DatabaseSync(process.env.LAB_DB_FILE || './tasks.sqlite');
db.exec('CREATE TABLE IF NOT EXISTS tasks(id TEXT PRIMARY KEY,owner_id TEXT NOT NULL,title TEXT NOT NULL,done INTEGER NOT NULL DEFAULT 0)');
const count=db.prepare('SELECT COUNT(*) AS n FROM tasks').get().n;
if(!count){const insert=db.prepare('INSERT INTO tasks(id,owner_id,title,done) VALUES(?,?,?,?)');
 for(const t of seed)insert.run(t.id,t.ownerId,t.title,Number(t.done));}
const app=express();app.use(express.json());
const owner='learner-1'; // Classroom identity only. Replace with authenticated session in production.
const output=t=>({id:t.id,title:t.title,done:Boolean(t.done),ownerId:t.owner_id});
app.get('/api/tasks',(req,res)=>res.json({tasks:db.prepare('SELECT * FROM tasks WHERE owner_id=? ORDER BY rowid DESC').all(owner).map(output)}));
app.post('/api/tasks',(req,res)=>{const title=String(req.body?.title??'').trim();
 if(!title||title.length>120)return res.status(400).json({error:'INVALID_TITLE'});
 const task={id:crypto.randomUUID(),title,done:false,ownerId:owner};
 db.prepare('INSERT INTO tasks(id,owner_id,title,done) VALUES(?,?,?,0)').run(task.id,owner,title);
 res.status(201).json(task);});
app.patch('/api/tasks/:id',(req,res)=>{if(typeof req.body?.done!=='boolean')return res.status(400).json({error:'INVALID_DONE'});
 const change=db.prepare('UPDATE tasks SET done=? WHERE id=? AND owner_id=?').run(Number(req.body.done),req.params.id,owner);
 if(!change.changes)return res.status(404).json({error:'NOT_FOUND'});
 res.json(output(db.prepare('SELECT * FROM tasks WHERE id=? AND owner_id=?').get(req.params.id,owner)));});
app.listen(3001,()=>console.log('API http://localhost:3001'));
