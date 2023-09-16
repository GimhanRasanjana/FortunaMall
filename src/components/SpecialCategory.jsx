import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SpecialCategories.css'
import image1 from '../assets/images/pic1.png'
import image2 from '../assets/images/pic2.png'
import image3 from '../assets/images/pic3.png'

function SpecialCategories(){
    return<div className="row justify-content-between">
        <div className="col-xs-12 col-lg-auto">
            <SpecialCategorySingle image={image1}>
                <div class="textBox">
                    <p className="normal">MADE IN
                        <br/>
                        <b>SRI LANKA</b>
                    </p>
                    <p className="small">
                        Shop now <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: '#080808' }} />
                    </p>
                </div>
            </SpecialCategorySingle>
        </div>
        <div className="col-xs-12 col-lg-auto">
            <SpecialCategorySingle image={image2}>
                <div class="textBox">
                    <p className="normal">MADE IN
                        <br/>
                        <b>SRI LANKA</b>
                    </p>
                    <p className="small">
                        Shop now <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: '#080808' }} />
                    </p>
                </div>
            </SpecialCategorySingle>
        </div>
        <div className="col-xs-12 col-lg-auto">
            <SpecialCategorySingle image={image3}>
                <div class="textBox">
                    <p className="normal">MADE IN
                        <br/>
                        <b>SRI LANKA</b>
                    </p>
                    <p className="small">
                        Shop now <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: '#080808' }} />
                    </p>
                </div>
            </SpecialCategorySingle>
        </div>
    </div>
}


function SpecialCategorySingle(props){
    return<>
            <div className="sp-category row p-0" >
                <div className="col-5 sp-category-section p-0">
                    <img className="sp-category-section-image p-0" src={props.image} alt="Image 3"/>   
                </div>
                <div className="col-7 sp-category-section p-0">
                    {
                        props.children
                    }
                   
                </div>
            </div>
    </>
}
export default SpecialCategories