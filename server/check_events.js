const mongoose = require('mongoose');
const Event = require('./models/event');
require('dotenv').config();

async function findFAANGEvent() {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log('Connected to MongoDB');
    
    // Search for the FAANG event
    const faangEvent = await Event.findOne({
      eventName: { $regex: /FAANG.*Career.*Blueprint/i }
    });
    
    if (faangEvent) {
      console.log('Found FAANG Event:');
      console.log(JSON.stringify(faangEvent, null, 2));
    } else {
      console.log('FAANG event not found. Searching for similar events...');
      const similarEvents = await Event.find({
        $or: [
          { eventName: { $regex: /FAANG/i } },
          { eventName: { $regex: /Career.*Blueprint/i } },
          { eventName: { $regex: /Campus.*FAANG/i } }
        ]
      });
      console.log('Similar events found:', similarEvents.length);
      similarEvents.forEach((event, index) => {
        console.log(`Event ${index + 1}:`, event.eventName);
      });
    }
    
    // Get all events to see what's in the database
    const allEvents = await Event.find({}).sort({ eventDate: -1 });
    console.log(`\nTotal events in database: ${allEvents.length}`);
    console.log('Recent events:');
    allEvents.slice(0, 10).forEach((event, index) => {
      console.log(`${index + 1}. ${event.eventName} - ${event.eventDate ? event.eventDate.toISOString().split('T')[0] : 'No date'}`);
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    mongoose.disconnect();
  }
}

findFAANGEvent();