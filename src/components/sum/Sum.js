import React from 'react';
import {Add} from '../addBtn/Add';
import { Jobs } from '../jobs/Jobs';
import '../addBtn/add.css';
import '../jobs/job.css';
import './sum.css'

export function Sum () {
    return (
        <div className='blockList'>
        <Add/>
        <Jobs 
            status = "To Do List"
            job1 = "Test React Ant Design To Do List"
            job2 = "Write about React and Ant Design"
            job3 = "Finalize Presentation"
            job4 = "Book Flights To Iceland"
        />
        </div>
    )
}