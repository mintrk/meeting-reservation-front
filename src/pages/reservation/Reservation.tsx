import { User } from "@nextui-org/react";
import "./Reservation.css";
import RoomCard from "./components/RoomCard";
import ReserveModal from "./components/ReserveModal";
import { useState } from "react";

type Props = {};

const RoomsDetail = [
  {
    number: 204,
    floor: "fl.2",
    picture:
      "https://images.unsplash.com/photo-1661169399398-dd271af8f651?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 4,
  },
  {
    number: 205,
    floor: "fl.2",
    picture:
      "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 12,
  },
  {
    number: 301,
    floor: "fl.3",
    picture:
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 8,
  },
  {
    number: 306,
    floor: "fl.3",
    picture:
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 8,
  },
  {
    number: 401,
    floor: "fl.4",
    picture:
      "https://images.unsplash.com/photo-1631247046812-20381f66a8e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 10,
  },
  {
    number: 402,
    floor: "fl.4",
    picture:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 8,
  },
];

type Room = {
  number: number;
  floor: string;
  picture: string;
  seats: number;
};

const Reservation = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  return (
    <>
      <div className="w-full h-full min-h-screen my-bg pt-12 sm:px-32 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-bold text-5xl text-me-ocean-waves">
              Meeting Room Reservation
            </h1>
            <div className="bg-white w-[18rem] fixed right-0 py-2 ps-4 rounded-l-xl sm:flex hidden">
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                classNames={{
                  name: "text-xl font-bold text-me-ocean-dark",
                  description: "text-base font-normal text-me-ocean-dark",
                }}
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-me-ocean-waves mt-1">
              Available room
            </h1>
          </div>
          <div className="grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 -mx-4 mt-5">
            {RoomsDetail.map((room, index) => (
              <RoomCard
                room={room}
                key={index}
                onClickReserve={(room: number) => {
                  setSelectedRoom(room);
                  setIsOpenModal(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <ReserveModal
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          setSelectedRoom(0);
        }}
        roomNumber={selectedRoom}
      />
    </>
  );
};

export default Reservation;
