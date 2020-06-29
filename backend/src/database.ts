import mongoose from 'mongoose';

export async function startConnection(){
    await mongoose.connect('mongodb://localhost/photo-galeria-db', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('database is connected');
}