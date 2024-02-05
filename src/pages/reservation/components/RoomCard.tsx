import UserIcon from "../../../assets/graphics/UserIcon";
import { Button } from "@nextui-org/react";

type Room = {
  number: number;
  floor: string;
  picture: string;
  seats: number;
};

interface RoomCardProps {
  room: Room;
  onClickReserve: (room: number) => void;
}

const RoomCard = ({ room, onClickReserve }: RoomCardProps) => {
  return (
    <>
      <div className="relative flex w-full flex-none flex-col gap-3">
        <div className="bg-white rounded-3xl shadow transform transition duration-500 hover:scale-105 p-2 flex flex-col justify-center">
          <div
            className="relative rounded-large"
            style={{ maxWidth: "fit-content" }}>
            <div className="relative overflow-hidden rounded-large">
              <img
                src={`${room.picture}`}
                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square w-full hover:scale-110"
                alt=""
                data-loaded="true"
              />
            </div>
          </div>
          <div className="p-2 flex flex-col">
            <div className="flex justify-between items-end">
              <h1 className="text-xl font-bold text-me-ocean-dark">
                Room {room.number}
              </h1>
              <span className="font-normal text-me-ocean-waves">
                {room.floor}
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <UserIcon />
              <span className="font-normal text-me-ocean-dark">
                {room.seats} seats
              </span>
            </div>
          </div>
          <Button
            className="mt-2 rounded-2xl bg-me-sunrise font-bold text-white"
            onClick={() => onClickReserve(room.number)}>
            RESERVE
          </Button>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
