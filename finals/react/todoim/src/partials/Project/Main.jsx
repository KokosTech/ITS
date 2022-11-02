const Main = ({ name, description }) => {
  return (
    <>
      <h1 className="text-4xl font-black">{name}</h1>
      <p className="text-neutral-200">{description}</p>
    </>
  );
};

export default Main;
