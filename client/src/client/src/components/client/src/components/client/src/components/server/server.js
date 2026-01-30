const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Mock DB
let rescues = [];

app.post('/api/liquidate', (req, res) => {
    const { cropId, farmerId } = req.body;
    const newRescue = {
        id: Date.now(),
        cropId,
        status: 'BROADCASTED',
        timestamp: new Date()
    };
    rescues.push(newRescue);
    res.status(200).json(newRescue);
});

app.get('/api/impact', (req, res) => {
    res.json({
        totalKg: 14500,
        co2Avoided: 890,
        activeRescues: rescues.length
    });
});

app.listen(PORT, () => console.log(`Rescue Server running on port ${PORT}`));
