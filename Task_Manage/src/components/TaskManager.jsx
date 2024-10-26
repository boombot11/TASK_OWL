import React, { useState, useEffect } from 'react';
import './TaskManager.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';

const initialTasks = {
    urgentImportant: [],
    urgentNotImportant: [],
    notUrgentImportant: [],
    notUrgentNotImportant: [],
};

const TaskManager = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [taskInput, setTaskInput] = useState({
        name: '',
        status: 'Not Started',
        progress: 0,
        dueDate: '',
        priority: '',
        assignedTo: '',
        description: '',
        comments: '',
        category: 'urgentImportant',
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState({ assignedTo: '', dueDate: '', priority: '' });
    const [taskId, setTaskId] = useState(''); // State to store task ID input

    // Fetch task by ID from the backend and add it to the corresponding category
    const fetchTaskById = async (taskId) => {
        console.log(`Attempting to fetch task with ID: ${taskId}`
            // {
            //     headers{
            //         "*": "";
            //     }
            // }
        );
      
        try {
          // Logging the fetch step
          console.log('Making fetch request to backend...');
          console.log(taskId)
          const response = await fetch(`http://localhost:3000/tasks`,{
            headers: {
                'Content-Type': 'application/json'
            },
         } // Enable CORS mode on the client side
          );
      
          // Log the response status 
          console.log(`Response received with status: ${response}`);
      
          if (response.ok) {
            const task = await response.json();
            console.log('Task data fetched successfully:', task);
      
            const category = task.category || 'urgentImportant'; // Assuming task has a category
            console.log(`Task will be added to category: ${category}`);
      
            // Update state with the fetched task
            setTasks((prevTasks) => ({
              ...prevTasks,
              [category]: [...prevTasks[category], task],
            }));
      
            console.log('Task successfully added to state.');
          } else {
            console.error('Task not found or bad response:', response.status);
            alert('Task not found!');
          }
        } catch (error) {
          // Log any errors
          console.error('Error occurred during task fetch:', error);
          alert(`Error fetching task: ${error.message}`);
        }
      };
      

    // Load tasks from local storage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskInput({ ...taskInput, [name]: value });
    };

    const handleAddTask = () => {
        const newTask = {
            id: Math.floor(Math.random() * 10000), // Generate smaller task IDs
            ...taskInput,
        };
        setTasks((prevTasks) => ({
            ...prevTasks,
            [taskInput.category]: [...prevTasks[taskInput.category], newTask],
        }));
        setTaskInput({ name: '', status: 'Not Started', progress: 0, dueDate: '', priority: '', assignedTo: '', description: '', comments: '', category: 'urgentImportant' });
    };

    const handleEditTask = (category, id) => {
        const task = tasks[category].find(task => task.id === id);
        setTaskInput({ ...task, category });
    };

    const handleDeleteTask = (category, id) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [category]: prevTasks[category].filter(task => task.id !== id),
        }));
    };

    const handleProgressChange = (category, task, value) => {
        const updatedTask = {
            ...task,
            progress: Math.max(0, Math.min(100, value)),
            status: value === '100' ? 'Completed' : task.status,
        };
        setTasks((prevTasks) => ({
            ...prevTasks,
            [category]: prevTasks[category].map(t => (t.id === task.id ? updatedTask : t)),
        }));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    // Sorting and Filtering Functions
    const filteredTasks = (categoryTasks) => {
        return categoryTasks
            .filter(task => task.name.toLowerCase().includes(searchQuery))
            .filter(task => (filter.assignedTo ? task.assignedTo.includes(filter.assignedTo) : true))
            .filter(task => (filter.dueDate ? task.dueDate === filter.dueDate : true))
            .filter(task => (filter.priority ? task.priority === filter.priority : true))
            .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); // Sorting by due date
    };

    // Handle Task ID input and fetching the task
    const handleTaskIdInput = () => {
        const inputTaskId = prompt('Input task ID');
        if (inputTaskId) {
            setTaskId(inputTaskId); // Store task ID
            fetchTaskById(inputTaskId); // Fetch the task by ID from the backend
        }
    };

    return (
        <div className="task-manager">
            <button onClick={handleTaskIdInput}>Fetch Task by ID</button>
            <h1>Task Management</h1>
            <div className="task-input">
                <input name="name" type="text" value={taskInput.name} onChange={handleInputChange} placeholder="Task Name" />
                <select name="category" value={taskInput.category} onChange={handleInputChange}>
                    <option value="urgentImportant">Urgent-Important</option>
                    <option value="urgentNotImportant">Urgent-Not Important</option>
                    <option value="notUrgentImportant">Not Urgent-Important</option>
                    <option value="notUrgentNotImportant">Not Urgent-Not Important</option>
                </select>
                <input name="dueDate" type="date" value={taskInput.dueDate} onChange={handleInputChange} />
                <input name="priority" type="number" value={taskInput.priority} onChange={handleInputChange} placeholder="Priority" />
                <input name="assignedTo" type="text" value={taskInput.assignedTo} onChange={handleInputChange} placeholder="Assigned To" />
                <input name="description" type="text" value={taskInput.description} onChange={handleInputChange} placeholder="Description" />
                <input name="comments" type="text" value={taskInput.comments} onChange={handleInputChange} placeholder="Comments" />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="task-filters">
                <TextField
                    className='filter1'
                    variant="outlined"
                    placeholder="Search by task name..."
                    value={searchQuery}
                    onChange={handleSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ flex: 1, minWidth: '200px' }}
                />
                <TextField
                    className='filter1'
                    variant="outlined"
                    name="assignedTo"
                    placeholder="Filter by assigned person"
                    onChange={handleFilterChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FilterAltIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ flex: 1, minWidth: '200px' }}
                />
                <TextField
                    className='filter1'
                    variant="outlined"
                    type="date"
                    name="dueDate"
                    label="Filter by due date"
                    onChange={handleFilterChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ flex: 1, minWidth: '200px' }}
                />
                <TextField
                    className='filter1'
                    variant="outlined"
                    type="number"
                    name="priority"
                    placeholder="Filter by priority"
                    onChange={handleFilterChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FilterAltIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ flex: 1, minWidth: '200px' }}
                />
            </div>

            {Object.keys(tasks).map(category => (
                <div key={category}>
                    <h3>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                    <table className="task-table">
                        <thead>
                            <tr>
                                <th className="col-id">ID</th>
                                <th className="col-task">Task </th>
                                <th className="col-status">Status</th>
                                <th className="col-progress">Progress (%)</th>
                                <th className="col-dueDate">Due Date</th>
                                <th className="col-priority">Priority</th>
                                <th className="col-assignedTo">Assigned To</th>
                                <th className="col-description">Description</th>
                                <th className="col-comments">Comments</th>
                                <th className="col-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks(tasks[category]).map(task => {
                                const progressClass = task.progress < 35 ? 'progress-low'
                                    : task.progress < 75 ? 'progress-medium'
                                    : 'progress-high';

                                const isDueSoon = new Date(task.dueDate).toLocaleDateString() === new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString();
                                const dueDateClass = isDueSoon ? 'due-soon' : '';

                                return (
                                    <tr key={task.id}>
                                        <td className="col-id">{task.id} <CrisisAlertOutlinedIcon /></td>
                                        <td className="col-task">{task.name}</td>
                                        <td className="col-status">
                                            <select className="status" value={task.status} onChange={(e) => {
                                                const updatedTask = { ...task, status: e.target.value };
                                                setTasks((prevTasks) => ({
                                                    ...prevTasks,
                                                    [category]: prevTasks[category].map(t => (t.id === task.id ? updatedTask : t)),
                                                }));
                                            }}>
                                                <option value="Not Started">Not Started</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </td>
                                        <td className={`col-progress ${progressClass}`}>
                                            <input
                                                type="number"
                                                value={task.progress}
                                                onChange={(e) => handleProgressChange(category, task, e.target.value)}
                                            />
                                        </td>
                                        <td className={`col-dueDate ${dueDateClass}`}>{task.dueDate}</td>
                                        <td className="col-priority">{task.priority}</td>
                                        <td className="col-assignedTo"><AccountCircleIcon className="avatar" />{task.assignedTo}</td>
                                        <td className="col-description">{task.description}</td>
                                        <td className="col-comments">{task.comments}</td>
                                        <td className="col-actions">
                                            <button onClick={() => handleDeleteTask(category, task.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default TaskManager;
