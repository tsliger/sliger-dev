const HeaderContent = ({ text }) => {
  return (
    <div className="relative py-4 rounded-lg overflow-hidden">
      <h1 className="font-sans text-2xl lg:text-4xl font-bold relative">
        {text}
      </h1>
    </div>
  );
};


export default HeaderContent;