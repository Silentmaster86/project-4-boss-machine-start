const express = require('express');
const apiRouter = express.Router();
const db = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');  // Import middleware

// Minions Routes
// GET /api/minions
apiRouter.get('/minions', (req, res) => {
  const minions = db.getAllFromDatabase('minions');
  res.status(200).json(minions);
});

// POST /api/minions
apiRouter.post('/minions', (req, res) => {
  const newMinion = req.body;

  try {
    const createdMinion = db.addToDatabase('minions', newMinion);
    res.status(201).json(createdMinion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/minions/:minionId
apiRouter.get('/minions/:minionId', (req, res) => {
  const minion = db.getFromDatabaseById('minions', req.params.minionId);
  if (minion) {
    res.status(200).json(minion);
  } else {
    res.status(404).json({ error: 'Minion not found' });
  }
});

// PUT /api/minions/:minionId
apiRouter.put('/minions/:minionId', (req, res) => {
  const minionToUpdate = req.body;
  minionToUpdate.id = req.params.minionId;

  try {
    const updatedMinion = db.updateInstanceInDatabase('minions', minionToUpdate);
    if (updatedMinion) {
      res.status(200).json(updatedMinion);
    } else {
      res.status(400).json({ error: 'Minion not found or invalid data' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/minions/:minionId
apiRouter.delete('/minions/:minionId', (req, res) => {
  const isDeleted = db.deleteFromDatabasebyId('minions', req.params.minionId);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Minion not found' });
  }
});

// Ideas Routes
// GET /api/ideas
apiRouter.get('/ideas', (req, res) => {
  const ideas = db.getAllFromDatabase('ideas');
  res.status(200).json(ideas);
});

// POST /api/ideas (Add checkMillionDollarIdea middleware)
apiRouter.post('/ideas', checkMillionDollarIdea, (req, res) => {
  const newIdea = req.body;

  try {
    const createdIdea = db.addToDatabase('ideas', newIdea);
    res.status(201).json(createdIdea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/ideas/:ideaId
apiRouter.get('/ideas/:ideaId', (req, res) => {
  const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
  if (idea) {
    res.status(200).json(idea);
  } else {
    res.status(404).json({ error: 'Idea not found' });
  }
});

// PUT /api/ideas/:ideaId (Add checkMillionDollarIdea middleware)
apiRouter.put('/ideas/:ideaId', checkMillionDollarIdea, (req, res) => {
  const ideaToUpdate = req.body;
  ideaToUpdate.id = req.params.ideaId;

  try {
    const updatedIdea = db.updateInstanceInDatabase('ideas', ideaToUpdate);
    if (updatedIdea) {
      res.status(200).json(updatedIdea);
    } else {
      res.status(400).json({ error: 'Idea not found or invalid data' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/ideas/:ideaId
apiRouter.delete('/ideas/:ideaId', (req, res) => {
  const isDeleted = db.deleteFromDatabasebyId('ideas', req.params.ideaId);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Idea not found' });
  }
});

// Meetings Routes
// GET /api/meetings
apiRouter.get('/meetings', (req, res) => {
  const meetings = db.getAllFromDatabase('meetings');
  res.status(200).json(meetings);
});

// POST /api/meetings
apiRouter.post('/meetings', (req, res) => {
  const newMeeting = db.createMeeting();
  const createdMeeting = db.addToDatabase('meetings', newMeeting);
  res.status(201).json(createdMeeting);
});

// DELETE /api/meetings
apiRouter.delete('/meetings', (req, res) => {
  const deletedMeetings = db.deleteAllFromDatabase('meetings');
  res.status(204).send();
});

// Get all work for a specific minion
apiRouter.get('/minions/:minionId/work', (req, res) => {
  const { minionId } = req.params;
  const workForMinion = db.getAllWorkForMinion(minionId);
  res.status(200).json(workForMinion);
});

// Add work to a specific minion's backlog
apiRouter.post('/minions/:minionId/work', (req, res) => {
  const { minionId } = req.params;
  const newWork = req.body;

  if (!newWork.title || !newWork.description || !newWork.hours) {
    return res.status(400).json({ error: 'Missing required fields: title, description, hours' });
  }

  const createdWork = db.addWorkToMinion(minionId, newWork);
  res.status(201).json(createdWork);
});

// Update work for a specific minion
apiRouter.put('/minions/:minionId/work/:workId', (req, res) => {
  const { minionId, workId } = req.params;
  const updatedWorkData = req.body;

  const updatedWork = db.updateWorkForMinion(minionId, workId, updatedWorkData);
  if (updatedWork) {
    res.status(200).json(updatedWork);
  } else {
    res.status(404).json({ error: 'Work not found' });
  }
});

// Delete work for a specific minion
apiRouter.delete('/minions/:minionId/work/:workId', (req, res) => {
  const { minionId, workId } = req.params;

  const isDeleted = db.deleteWorkForMinion(minionId, workId);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Work not found' });
  }
});

module.exports = apiRouter;
