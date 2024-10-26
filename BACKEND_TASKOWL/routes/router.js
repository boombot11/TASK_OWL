import express from 'express';
const router = express.Router();

// Import your task and customer handling functions
import { addTask ,getAllTasks, getTaskById,getTasksByPriorityAndStatus, getCustomerById } from '../util/funcitons.js';
// import { 
//     addTask, 
//     getAllTasks, 
//     getTaskById, 
//     getTasksByPriorityAndStatus, 
//     getCustomerById 
// } from  '../util/funcitons' // Adjust the path as needed

// Add a new task
router.post('/tasks', async (req, res) => {
    try {
        const taskId = await addTask(req.body);
        res.status(201).json({ id: taskId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Root path
router.get('/', (req, res) => {
    console.log('Root path accessed');
    res.send('Hello, world!');
});

// Get task by ID
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await getTaskById(req.params.id);
        res.json(task);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Get tasks by priority and status
router.get('/tasks/filter', async (req, res) => {
    const { priority, status } = req.query;

    try {
        const tasks = await getTasksByPriorityAndStatus(priority, status);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/customers', async (req, res) => {
    const { name } = req.query; // Get the name from query parameters
    if (!name) {
        return res.status(400).json({ error: "Name parameter is required." });
    }
    try {
        const customer = await getCustomerByName(name);
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Get customer by ID
router.get('/customers/:name', async (req, res) => {
    try {
        const customer = await getCustomerById(req.params.name);
        console.log("hereee:: "+req.params.name)
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.post('/send-prompt', async (req, res) => {
    const { prompt } = req.body; // Expecting a JSON body with a prompt
  
    const webhookUrl = 'https://prod-teachafy-n8n.9ahjpy.easypanel.host/webhook/d97b9073-49f3-4abc-a8a2-906a7eede06d';
  
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "SmsMessageSid": "SMbe5fb54ee9cdb3dfaaef23d1800df5a0",
                "NumMedia": "0",
                "ProfileName": "~Suraj",
                "MessageType": "text",
                "SmsSid": "SMbe5fb54ee9cdb3dfaaef23d1800df5a0",
                "WaId": "919137149753",
                "SmsStatus": "received",
                "Body": "add a task 'pixel paranoia' and due as tomorrow 8 pm",
                "To": "whatsapp:+14155238886",
                "NumSegments": "1",
                "ReferralNumMedia": "0",
                "MessageSid": "SMbe5fb54ee9cdb3dfaaef23d1800df5a0",
                "AccountSid": "ACa1f651d820994815de93e4b5c42de965",
                "From": "whatsapp:+919137149753",
                "ApiVersion": "2010-04-01"
              }
        ), // Send the prompt in the body
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to send prompt to n8n' });
      }
  
      const data = await response.json();
      res.json(data); // Send the n8n response back to the client
    } catch (error) {
      console.error('Error sending prompt to n8n:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Export the router
export default router