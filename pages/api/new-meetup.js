import { MongoClient } from 'mongodb';

async function handler(req,res){
    if(req.method === "POST"){
        const data = req.body;

        const clinet = await MongoClient.connect('mongodb+srv://Farhan:bH5ot0llCUyOuCvB@cluster0.euraxek.mongodb.net/meetup?retryWrites=true&w=majority');
        const db = clinet.db();

        const meetupsCollections = db.collection('meetup');

        const result = await meetupsCollections.insertOne(data);

        console.log(result);

        clinet.close();

        res.status(201).json({message:'Meetup Attached'});
    }
}

export default handler;