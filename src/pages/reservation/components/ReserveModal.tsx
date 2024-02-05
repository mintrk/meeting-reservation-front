import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Clock from "../../../assets/graphics/Clock";
import { Fragment, useEffect, useState } from "react";

interface ReserveModalProps {
  isOpen: boolean;
  roomNumber: number;
  onClose: () => void;
}

const ReserveModal = ({ isOpen, roomNumber, onClose }: ReserveModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onClose();
        }}
        size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center gap-3 mt-4">
                  <h1 className="text-me-ocean-waves text-[2rem] font-bold">
                    Available time
                  </h1>
                  <span>
                    <Clock />
                  </span>
                </div>
                <p className="text-me-ocean-waves font-normal">
                  Click on available time to select reserve time
                </p>
              </ModalHeader>
              <ModalBody>
                <TimeSelection />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReserveModal;

const slots = [
  { start: "08:00", end: "08:30" },
  { start: "08:30", end: "09:00" },
  { start: "09:00", end: "09:30" },
  { start: "09:30", end: "10:00" },
  { start: "10:00", end: "10:30" },
  { start: "10:30", end: "11:00" },
  { start: "11:00", end: "11:30" },
  { start: "11:30", end: "12:00" }, ///
  { start: "13:00", end: "13:30" },
  { start: "13:30", end: "14:00" },
  { start: "14:00", end: "14:30" },
  { start: "14:30", end: "15:00" },
  { start: "15:00", end: "15:30" },
  { start: "15:30", end: "16:00" },
  { start: "16:00", end: "16:30" },
  { start: "16:30", end: "17:00" },
];

type Time = {
  start: string;
  end: string;
};

const TimeSelection = () => {
  const [selectedTime, setSelectedTime] = useState<Time[] | []>([]);

  useEffect(() => {
    console.log("selectedTime : ", selectedTime);
  }, [selectedTime]);

  return (
    <>
      <div className="p-4">
        <div className="flex flex-wrap md:gap-y-4 gap-y-6 justify-center">
          {slots.map((slot, index) => (
            <Fragment key={index}>
              {
                <>
                  <div className="border-l-2 border-me-ocean-dark relative mx-1">
                    <div
                      className={`-left-6 ${
                        index % 2 == 0 ? "-top-7" : "-top-5"
                      } absolute`}>
                      <h1
                        className={`${
                          index % 2 == 0 ? "text-lg" : "text-sm"
                        } text-me-ocean-dark`}>
                        {slot.start}
                      </h1>
                    </div>
                  </div>
                  <div
                    className={`h-8 aspect-video rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-sm duration-200 transition transform ${
                      selectedTime.find((time) => {
                        return time.start === slot.start;
                      })
                        ? "bg-me-ocean-dark "
                        : "bg-me-pastel-blue "
                    }`}
                    onClick={() => {
                      console.log(slots[index]);
                      setSelectedTime(
                        [...selectedTime, slots[index]].sort((A, B) => {
                          if (A.start < B.start) {
                            return -1;
                          }
                          if (A.start > B.start) {
                            return 1;
                          }
                          return 0;
                        })
                      );
                    }}></div>
                </>
              }
              {(index == 7 || index == 15) && (
                <>
                  <div className="border-l-2 border-me-ocean-dark relative mx-1">
                    <div className="-left-6 -top-7 absolute">
                      <h1 className=" text-lg text-me-ocean-dark">
                        {slot.end}
                      </h1>
                    </div>
                  </div>
                </>
              )}
              {index == 7 && (
                <>
                  <div className={`w-full bg-transparent`}></div>
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
