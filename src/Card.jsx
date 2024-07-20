import HeartButton from "./HeartButton.jsx";

export default function Card() {
    return (<>
        <div className="container">
            <div className="row">

                <div className="col d-flex justify-content-center">
                    <div className="card text-dark bg-light mb-4" style={{maxWidth: "38rem"}}>
                        <img className="card-img-top rounded-circle"
                             src="https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2560%2Cc_limit/RoastChicken_RECIPE_080420_37993.jpg"
                             alt="Card image cap" style={{height: 400, width: 400}}/>

                        <div className="card-body">
                            <h5 className="card-title">
                                Chickens Name
                            </h5>

                            <p className="card-text">
                                Chickens life description and other details
                            </p>


                        </div>

                        <div className="card-footer text-center">
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-light btn-xl btn-circle float-left"
                                            id="left">
                                        x icon
                                    </button>
                                </div>
                                <div className="col"> </div>
                                <div className="col">
                                    <button className="btn btn-light btn-xl btn-circle float-right" id="right">
                                        <HeartButton/>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}