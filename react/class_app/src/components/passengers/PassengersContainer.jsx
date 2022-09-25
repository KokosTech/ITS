import LoadingPassengers from "./LoadingPassengers";
import Passengers from "./Passengers";

const PassengersContainer = ({ passengers, current, limit }) => {
  if (passengers && passengers[current] === undefined)
    return <LoadingPassengers limit={limit} />;
  else 
    return <Passengers passengers={passengers && passengers[current]} />;
};

export default PassengersContainer;
