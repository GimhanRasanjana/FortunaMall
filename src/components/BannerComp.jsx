
import './BannerComp.css'

function BannerComp(){
    return(<>
        <div  className="sectionThree">
            <div className="boxOne">
                <div className="details">
                <p className="prod_des">Hich Tech News</p>
                <p className="prod_name-2">Monster Beats Headphones</p>
                <a href="#" className="my-button">READ MORE</a>
                </div>            
            </div>
            <div className="boxTwo">
                <div className="boxTwoUp">
                    <div className="upBox_des">
                        <p className="prod_MidDes">Hich Tech News</p>
                        <p className="prod_MidName">Monster Beats Headphones</p>
                    </div>
                </div> 
                <div className="boxTwoDown">
                    <div className="upBox_des">
                        <p className="prod_MidDes">Hich Tech News</p>
                        <p className="prod_MidName">Monster Beats Headphones</p>
                    </div>
                </div>
            </div>
            <div className="boxThree p-1">
                <p className="prod_des">Health & Fit</p>
                <p className="prod_name-2">Aapple iWatch Nike Edition</p>
                <a href="#" className="my-button">WATCH DEMO</a>   
            </div>
        </div>
    </>)

}

export default  BannerComp