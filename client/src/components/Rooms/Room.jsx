import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Room = () => {
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');
    console.log(category);

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if(category) {
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                }

                else setRooms(data);
                setLoading(false);
            })
    }, [category])
    if(loading) return <Loader/>
    return (
        <Container>
            {
                rooms && rooms.length>0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {
                    rooms.map(room => <Card key={room._id} room={room}></Card>)
                }
               </div>
               :
               <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <Heading 
               center={true}
               title={'No room Available in this Category'}
               subtitle={'Please Select other category'}
               />
               </div>
            }
        </Container>
    );
};

export default Room;