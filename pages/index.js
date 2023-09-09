import Layout from '../components/layout/Layout';
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
    {
        id: "M1",
        title: 'A first Meetup',
        image: "https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?size=626&ext=jpg&ga=GA1.1.1750076145.1694275553&semt=ais",
        address: 'Some address 5, 12345 some city',
        description: "This is first meetup",
    },
    {
        id: "M1",
        title: 'A first Meetup',
        image: "https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?size=626&ext=jpg&ga=GA1.1.1750076145.1694275553&semt=ais",
        address: 'Some address 5, 12345 some city',
        description: "This is first meetup",
    },
    {
        id: "M1",
        title: 'A first Meetup',
        image: "https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?size=626&ext=jpg&ga=GA1.1.1750076145.1694275553&semt=ais",
        address: 'Some address 5, 12345 some city',
        description: "This is first meetup",
    },
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUP}></MeetupList>

}

export default HomePage;