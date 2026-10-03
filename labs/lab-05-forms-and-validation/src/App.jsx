import React, {useMemo, useState} from 'react';
import seed from '../mock-data/tasks.json';
import './style.css';

function TaskCard({task,onToggle}) {
  return <article className="card"><label><input type="checkbox" checked={task.done}
    onChange={() => onToggle(task.id)} /> <span>{task.title}</span></label>
    <small>{task.id}</small></article>;
}
export default function App() {
  const [tasks,setTasks]=useState(seed);
  const [title,setTitle]=useState('');
  const [query,setQuery]=useState('');
  const [error,setError]=useState('');
  const visible=useMemo(()=>tasks.filter(t=>t.title.toLowerCase().includes(query.toLowerCase())),[tasks,query]);
  const openCount=tasks.filter(t=>!t.done).length;
  function toggle(id){setTasks(old=>old.map(t=>t.id===id?{...t,done:!t.done}:t));}
  function add(event){event.preventDefault();const clean=title.trim();
    if(!clean){setError('Title is required');return;}
    if(clean.length>120){setError('Title must be 120 characters or less');return;}
    setTasks(old=>[{id:crypto.randomUUID(),title:clean,done:false,ownerId:'learner-1'},...old]);
    setTitle('');setError('');}
  return <main><header><p className="eyebrow">FULL-STACK LAB</p><h1>Task board</h1>
    <p role="status">{openCount} open of {tasks.length} tasks</p></header>
    <form onSubmit={add}><label htmlFor="title">New task</label><input id="title" value={title}
      onChange={e=>setTitle(e.target.value)} maxLength={121} />
      <button type="submit">Add task</button>{error&&<p role="alert">{error}</p>}</form>
    <label htmlFor="search">Search tasks</label><input id="search" value={query}
      onChange={e=>setQuery(e.target.value)} />
    <section className="grid" aria-label="Task list">{visible.length?visible.map(task=><TaskCard
      key={task.id} task={task} onToggle={toggle}/>):<p>No tasks match this search.</p>}</section>
  </main>;
}
