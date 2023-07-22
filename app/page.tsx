// pages/index.tsx
'use client'
import '../styles/output.css';
import CreateTaskForm from '../components/CreateTaskForm';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>To-Do List Application</h1>
      <CreateTaskForm />
    </div>
  );
};

export default Home;
