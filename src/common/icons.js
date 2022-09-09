import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureDown, faTemperatureArrowUp, faTemperatureHalf,faCloudSun} from '@fortawesome/free-solid-svg-icons'

const TempMax = <FontAwesomeIcon className='icon'icon={faTemperatureArrowUp}/>
const TempMin = <FontAwesomeIcon className='icon'icon={faTemperatureDown}/>
const TempAvr = <FontAwesomeIcon className='icon'icon={faTemperatureHalf}/>
const Sky = <FontAwesomeIcon className='icon'icon={faCloudSun}/>
 
export{TempAvr,TempMax,TempMin,Sky} ;