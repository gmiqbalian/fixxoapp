import ShowCaseImg from '../../../images/showcase-img.png';


const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
          <div className="text">
            <div className="title-1">GET UP TO 40% OFF</div>
            <div className="title-2">Don't Miss This Opportunity</div>
            <div className="title-3">Online Shopping free home delivery over $100</div>
            <a href="#" className="btn-theme">SHOP NOW</a>                              
          </div>
          <img src={ShowCaseImg} alt="showcase-image" />
        </div>
    </section>
  )
}

export default Showcase