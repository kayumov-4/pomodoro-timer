import CloseIcon from "./CloseIcon";
import Counter from "./Counter";
import Switch from "./Switch";

const SettingsModal = () => {
    return (
        <div className="w-[448px] h-[610px]  bg-[#FFF2F2] rounded-3xl px-6 shadow-2xl">
            <div className="flex py-[24px] justify-between items-center max-h-16">
                <h2 className="font-bold text-[24px] tracking-[0.15px] text-[#471515]">
                    Settings
                </h2>
                <CloseIcon />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Dark mode</p>
                <Switch />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Focus length 25</p>
                <Counter status="focus" />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Pomodoros until long break 25</p>
                <Counter status="pomodoros" />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Short break length</p>
                <Counter status="short" />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Long break length 25</p>
                <Counter status="long" />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Auto resume timer</p>
                <Switch />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Sound</p>
                <Switch />
            </div>
            <div className="flex py-[24px] justify-between items-center  max-h-16">
                <p className="text-[#471515]">Notifications</p>
                <Switch />
            </div>
        </div>
    );
};

export default SettingsModal;
