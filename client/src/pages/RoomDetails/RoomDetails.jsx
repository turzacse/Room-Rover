import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import DatePicker from "../../components/RoomDetails/Calender";

const RoomDetails = () => {
    const { id } = useParams();
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');
    console.log(category);

    const [rooms, setRooms] = useState({});
    useEffect(() => {
        setLoading(true);
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id);
                setRooms(singleRoom);
                setLoading(false);
            })
    }, [id])
    if(loading) return <Loader/>
    return (
        <Container>
            <div>
                <div className="flex flex-col gap-6">
                <Header roomData = {rooms}/>    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7"> 
                    <RoomInfo roomData={rooms}/>
                    <div className="md:col-span-3 order-first md:order-last">
                        <DatePicker></DatePicker>
                    </div>
                </div>
                {/* Calend  */}
            </div>
        </Container>
    );
};

export default RoomDetails;