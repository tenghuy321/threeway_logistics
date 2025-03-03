import { BarLoader } from "react-spinners";
import Logo from '../assets/images/logo.png';
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#D9ECEE]">
            <img src={Logo} alt="Loading" className="w-20" />
            <h1 className="py-3 text-[18px] font-[700] text-[#0E4C9C] uppercase tracking-[2px]">ThreeWay Logistics</h1>
            <BarLoader color={"#0E4C9C"} />
        </div>

    );
};

export default Loading;
