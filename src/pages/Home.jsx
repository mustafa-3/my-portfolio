const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container m-auto col-9 homeContainer">
        {/* <h3 className="text-danger mt-5 h-6">Hi My name is</h3> */}
        <h2 className="text-light fullName">Mustafa SAĞUN</h2>
        <h2 className="text-light frondEnd">I'm a Front-End Developer</h2>
        <h5 className="text-light desc">
          I’m a Frond-End Developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications.
        </h5>
      </div>
    </div>
  );
};

export default Home;
