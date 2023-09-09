import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetMeetupPage(){
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetMeetupPage;