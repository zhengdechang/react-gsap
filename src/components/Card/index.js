const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`);

  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-lg mt-[calc(5rem+5vw)] h-[calc(8rem+12vw)] w-[calc(9rem+12vw)]"
      style={{ backgroundColor: "var(--nav2)", borderRadius: "20px" }}
    >
      <div
        className="absolute bottom-[80%] left-1/2 transform -translate-x-1/2 w-2/5 h-2/5 rounded-full"
        style={{
          backgroundImage: `url(${Avatar})`,
          backgroundColor: "red",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(0px -3px 3px var(--nav2))",
          borderRadius: "50%",
        }}
      ></div>
      <h4
        className="text-center p-[calc(1rem+1vw)] text-[calc(0.6rem+0.5vw)]"
        style={{ color: "var(--white)" }}
      >
        {text}
      </h4>
      <h3
        className="pt-4 text-[calc(0.5rem+1vw)]"
        style={{ color: "var(--pink)" }}
      >
        {name}
      </h3>
    </div>
  );
};

export default Card;
