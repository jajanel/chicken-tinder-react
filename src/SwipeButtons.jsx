import HeartButton from "./HeartButton.jsx";

export default function SwipeButtons(){
return(
    <>
        <div className="row">
            <div className="col">
                <button className="btn btn-light btn-xl btn-circle float-left"
                        id="left">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                         fillRule="evenodd" clipRule="evenodd">
                        <path
                            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                    </svg>
                </button>
            </div>
            <div className="col"></div>
            <div className="col">
                <button className="btn btn-light btn-xl btn-circle float-right" id="right">
                    <HeartButton/>
                </button>
            </div>
        </div>
    </>
)
}