import { Button, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import TableGP from "../../assets/graphics/TableGP";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [signData, setSignData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignin = () => {
    console.log("[signData] : ", signData);
    if (signData.password !== "" && signData.username !== "") {
      navigate("/reservation");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-me-pastel-blue flex">
        <div
          id="left"
          className="w-[45%] h-full flex justify-center items-center">
          <TableGP />
        </div>
        <div
          id="right"
          className="w-[55%] bg-white h-full rounded-l-[250px] border-l-[30px] border-me-ice-cube flex justify-center">
          <p className="text-me-ocean-dark text-end fixed right-0 mt-8 me-11">
            Enjoy your office time ;)
          </p>
          <div className="w-[28.25rem] h-full flex flex-col justify-center">
            <h1 className="text-[64px] text-me-sunrise font-bold leading-normal ">
              Officeto
            </h1>
            <h1 className="text-5xl text-me-ocean-waves font-bold">Sign in</h1>
            <div className="mt-4 mb-2">
              <Input
                label="Username"
                labelPlacement="outside"
                placeholder="Enter your username"
                size="lg"
                classNames={{
                  label: "text-lg font-normal !text-me-ocean-dark",
                  inputWrapper:
                    "mt-4 bg-[#DDEAE980]/50 group-data-[focus=true]:!bg-me-ice-cube/30 group-data-[hover=true]:!bg-me-ice-cube/30",
                  innerWrapper: "",
                }}
                value={signData.username}
                onChange={(e) => {
                  setSignData({ ...signData, username: e.target.value });
                }}
              />
              <Input
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                size="lg"
                classNames={{
                  label: "text-lg font-normal !text-me-ocean-dark",
                  inputWrapper:
                    "mt-4 bg-[#DDEAE980]/50 group-data-[focus=true]:!bg-me-ice-cube/30 group-data-[hover=true]:!bg-me-ice-cube/30",
                }}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <Eye /> : <EyeOff />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                value={signData.password}
                onChange={(e) => {
                  setSignData({ ...signData, password: e.target.value });
                }}
              />
            </div>
            <Button
              className="mt-4 font-bold bg-me-ocean-waves text-white text-xl"
              size="lg"
              onClick={handleSignin}>
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
