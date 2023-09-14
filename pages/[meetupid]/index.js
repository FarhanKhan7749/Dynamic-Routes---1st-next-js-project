import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      id={props.meetupData.id}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const clinet = await MongoClient.connect(
    "mongodb+srv://Farhan:bH5ot0llCUyOuCvB@cluster0.euraxek.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = clinet.db();

  const meetupsCollections = db.collection("meetup");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  clinet.close();

  return {
    fallback: false,
    paths: meetups.map((meetups) => ({
      params: { meetupid: meetups._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;

  const clinet = await MongoClient.connect(
    "mongodb+srv://Farhan:bH5ot0llCUyOuCvB@cluster0.euraxek.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = clinet.db();

  const meetupsCollections = db.collection("meetup");

  const selectedMeetup = await meetupsCollections.findOne({_id:new ObjectId(meetupid)})
  clinet.close();



  return {
    props: {
      meetupData: {
        image:selectedMeetup.image,
        meetupid: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailsPage;
