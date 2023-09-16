import './headerComp.css'
import backimage from "../assets/images/men.png"
function HeaderComp(props) {
    return <>
        <div className="header-content mt-5 pt-1">
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-5">
                        <div className="text-container">
                            <div className="large-text">
                                <p>SOUNDPEATS <br/> TRUE WIRELESS <br/> TRUECAPSULE</p>
                            </div>
                            <div className="small-text">
                                <p>Your business partner , Your music companion</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-7">
                        <img className='header-img' src={backimage} alt="Header Image"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HeaderComp