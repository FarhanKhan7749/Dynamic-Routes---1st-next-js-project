import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(){
    return <MeetupDetails 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIq1WFIqckI69eGZ67ugLdfxchy96eLR7w&usqp=CAU" 
        id= "M2"
        title = "A first Meetup"
        address = 'Some address 5, 12345 some city'
        description = "This is first meetup"
        />
}


export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            {params:{
                meetupid: "M1",
            }},
            {params:{
                meetupid: "M2",
            }},
            {params:{
                meetupid: "M3",
            }},
        ]
    }
}

export async function getStaticProps(context){
    const meetupid = context.params.meetupid;

    return {
        props:{
            meetupData:{
                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIq1WFIqckI69eGZ67ugLdfxchy96eLR7w&usqp=CAU" ,
                meetupid: meetupid,
                title:"A first Meetup",
                address:'Some address 5, 12345 some city',
                description:"This is first meetup"
            }
        }
    }
}

export default MeetupDetailsPage;