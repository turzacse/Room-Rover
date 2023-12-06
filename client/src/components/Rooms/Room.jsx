import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";

const Room = () => {

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            })
    }, [])
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {
                    rooms.map(room => <Card key={room._id} room={room}></Card>)
                }
            </div>
        </Container>
    );
};

export default Room;