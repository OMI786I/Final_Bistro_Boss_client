import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      Blur transition from min to max
      <div style={{ height: "200px" }} />
      <div className="hero min-h-screen" style={{}}>
        <div className="hero-overlay bg-opacity-60 w-[90%] md:w-[60%] h-[60%]  "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5 md:text-lg text-xs">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
