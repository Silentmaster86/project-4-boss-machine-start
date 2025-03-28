const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;

  // Check if both numWeeks and weeklyRevenue are numbers
  if (typeof numWeeks === 'number' && typeof weeklyRevenue === 'number') {
    // Calculate the total value of the idea
    const totalValue = numWeeks * weeklyRevenue;

    // Check if the total value is at least 1 million
    if (totalValue >= 1000000) {
      return next(); // Proceed to the next middleware or route handler
    } else {
      return res.status(400).json({ error: 'Idea must be worth at least 1 million dollars' });
    }
  } else {
    return res.status(400).json({ error: 'Invalid numWeeks or weeklyRevenue value' });
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
