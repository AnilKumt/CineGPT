import { LOGO_URL } from "../../utils/constants";
const InitialHeader = () => {
    return (
        <div className="bg-gradient-to-b from-black to-transparent absolute top-0 left-0 right-0 z-100 h-32 flex items-center">
            <img src={LOGO_URL} alt="logo" className="h-32 w-64" />
        </div>
    )
}

export default InitialHeader;