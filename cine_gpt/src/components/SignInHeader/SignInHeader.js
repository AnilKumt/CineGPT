import { LOGO_URL } from "../../utils/constants";
const InitialHeader = () => {
    return (
        <div className="bg-gradient-to-b from-black to-transparent relative h-32 flex items-center">
            <img src={LOGO_URL} alt="logo" className="h-32 w-64 absolute" />
        </div>
    )
}

export default InitialHeader;