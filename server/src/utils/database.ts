import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        const MONGODB_URI = 'mongodb://localhost:27017/todo';
        await mongoose.connect(MONGODB_URI);
        console.log('Database connection is successful');
    } catch (error: unknown) {
        console.log(error)
        throw new Error('Database cannot connected')
    }
}