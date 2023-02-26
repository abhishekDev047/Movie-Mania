const About = () => {
  return (
    <div className="container my-5">
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success"> <h4> Special thanks to OMDb</h4></div>
        <div className="card-body text-success">
          <h5 className="card-title">OMDb</h5>
          <p className="card-text">
        
                This site is created using OMDb: Open Movie Database,  API . <br/>
                The OMDb API is a RESTful web service to obtain movie information<br/>
                go and check out the official <a target={"_blank"} href="https://www.omdbapi.com/">OMDb site</a>
          </p>
        </div>
        <div className="card-footer bg-transparent border-success">Thanks for reaching us.</div>
      </div>
    </div>
  );
};
export default About;