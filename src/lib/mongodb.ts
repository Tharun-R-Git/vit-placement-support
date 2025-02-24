import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log('MongoDB connected successfully');
    return mongoose.connection; // ✅ Return connection
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

export default dbConnect;
