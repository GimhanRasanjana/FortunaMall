import cLogo1 from '../assets/images/Merchants/cLogo1.png'
import cLogo2 from '../assets/images/Merchants/cLogo2.png'
import cLogo3 from '../assets/images/Merchants/cLogo3.png'
import cLogo4 from '../assets/images/Merchants/cLogo4.png'
import cLogo5 from '../assets/images/Merchants/cLogo5.png'
import cLogo6 from '../assets/images/Merchants/cLogo6.png'


function MerchantComp(){
    return(<>
        <span className='mrch-title'> Top 6 Merchants </span>
        <hr className='mrch-hr'/>
        <div className="main-div">
            <div className="sub-div">
                <img src={cLogo1} alt="Image 1"/>
                <p>Skyray Gadget Store</p>
            </div>
            <div className="sub-div">
                <img src={cLogo2} alt="Image 2"/>
                <p>myitem.lk</p>
            </div>
            <div className="sub-div">
                <img src={cLogo3} alt="Image 3"/>
                <p>Vista Computers</p>
            </div>
            <div className="sub-div">
                <img src={cLogo4} alt="Image 4"/>
                <p>Beauty Products</p>
            </div>
            <div className="sub-div">
                <img src={cLogo5} alt="Image 5"/>
                <p>Electro Hub</p>
            </div>
            <div className="sub-div">
                <img src={cLogo6} alt="Image 6"/>
                <p>Electro Hub</p>
            </div>
        </div>
    </>)
}

export default MerchantComp