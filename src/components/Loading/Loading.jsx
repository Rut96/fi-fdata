import './Loading.css'
import loadSvg from '../../assets/svg/loading.svg'

export function Loading() {
    return (
        <div className="Loading">
            {/* Loading... */}
            <img src={loadSvg} alt="Loading..." />
        </div>
    );
}