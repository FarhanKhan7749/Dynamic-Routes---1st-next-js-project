import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";


function HomePage(props) {
    return <MeetupList meetups={props.meetup}></MeetupList>

}

export async function getStaticProps(){

    const clinet = await MongoClient.connect('mongodb+srv://Farhan:bH5ot0llCUyOuCvB@cluster0.euraxek.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = clinet.db();

    const meetupsCollections = db.collection('meetup');

    const meetup = await meetupsCollections.find().toArray();


    return {
        props : {
            meetup : meetup.map(meetup => ({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate:1
    }
}

export default HomePage;