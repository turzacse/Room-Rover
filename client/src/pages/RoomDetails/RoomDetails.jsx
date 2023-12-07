import { useParams, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";

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
            {rooms.title}
        </Container>
    );
};

export default RoomDetails;