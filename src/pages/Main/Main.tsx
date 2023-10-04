import SettingsIcon from "../../components/Settings/SettingsIcon";
import SettingsModal from "../../components/Settings/SettingsModal";

const Main = () => {
    return (
        <div className="bg-[#FFF2F2] w-screen h-screen flex flex-col items-center justify-center ">
            <div className="container mx-auto p-5">
                <div className="flex flex-col items-center justify-center h-full w-full gap-8 relative">
                    <SettingsIcon />
                    <div className="flex items-center justify-center">
                        <button className="flex w-[136px] items-center py-[8px] justify-center gap-2 border-[2px] border-[#471515] rounded-full px-[16px] bg-[#FF4C4C] bg-opacity-[15%]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M31 16.4998C31.0001 15.1751 30.6242 13.8775 29.9162 12.7579C29.2081 11.6382 28.1969 10.7425 27 10.1748V8.99978C26.9991 7.7112 26.5834 6.45714 25.8144 5.42318C25.0454 4.38922 23.9639 3.63031 22.73 3.25875C21.4962 2.88719 20.1755 2.92273 18.9634 3.36011C17.7513 3.79749 16.7123 4.61346 16 5.68728C15.2877 4.61346 14.2486 3.79749 13.0365 3.36011C11.8244 2.92273 10.5037 2.88719 9.26989 3.25875C8.03603 3.63031 6.95458 4.38922 6.18557 5.42318C5.41656 6.45714 5.00085 7.7112 4.99996 8.99978V10.1748C3.80288 10.7424 2.79146 11.6381 2.08322 12.7577C1.37499 13.8773 0.999023 15.175 0.999023 16.4998C0.999023 17.8246 1.37499 19.1222 2.08322 20.2419C2.79146 21.3615 3.80288 22.2572 4.99996 22.8248V22.9998C5.00085 24.2884 5.41656 25.5424 6.18557 26.5764C6.95458 27.6103 8.03603 28.3693 9.26989 28.7408C10.5037 29.1124 11.8244 29.0768 13.0365 28.6395C14.2486 28.2021 15.2877 27.3861 16 26.3123C16.7123 27.3861 17.7513 28.2021 18.9634 28.6395C20.1755 29.0768 21.4962 29.1124 22.73 28.7408C23.9639 28.3693 25.0454 27.6103 25.8144 26.5764C26.5834 25.5424 26.9991 24.2884 27 22.9998V22.8248C28.1959 22.2558 29.2063 21.3598 29.9142 20.2405C30.6221 19.1211 30.9986 17.8242 31 16.4998ZM11 26.9998C10.0131 26.9992 9.06126 26.6338 8.3275 25.9739C7.59373 25.314 7.12982 24.4061 7.02496 23.4248C7.34746 23.4756 7.67349 23.5007 7.99996 23.4998H8.99996C9.26518 23.4998 9.51953 23.3944 9.70707 23.2069C9.89461 23.0194 9.99996 22.765 9.99996 22.4998C9.99996 22.2346 9.89461 21.9802 9.70707 21.7927C9.51953 21.6051 9.26518 21.4998 8.99996 21.4998H7.99996C6.82161 21.4978 5.68183 21.0797 4.78171 20.3192C3.88158 19.5588 3.27896 18.5048 3.08015 17.3434C2.88134 16.1819 3.09913 14.9876 3.69508 13.971C4.29104 12.9545 5.22686 12.1811 6.33746 11.7873C6.53179 11.7157 6.6995 11.5862 6.81796 11.4164C6.93642 11.2465 6.99995 11.0444 6.99996 10.8373V8.99978C6.99996 7.93892 7.42139 6.9215 8.17154 6.17136C8.92168 5.42121 9.9391 4.99978 11 4.99978C12.0608 4.99978 13.0782 5.42121 13.8284 6.17136C14.5785 6.9215 15 7.93892 15 8.99978V18.5373C13.9052 17.5437 12.4784 16.9953 11 16.9998C10.7347 16.9998 10.4804 17.1051 10.2929 17.2927C10.1053 17.4802 9.99996 17.7346 9.99996 17.9998C9.99996 18.265 10.1053 18.5194 10.2929 18.7069C10.4804 18.8944 10.7347 18.9998 11 18.9998C12.0608 18.9998 13.0782 19.4212 13.8284 20.1714C14.5785 20.9215 15 21.9389 15 22.9998C15 24.0607 14.5785 25.0781 13.8284 25.8282C13.0782 26.5784 12.0608 26.9998 11 26.9998ZM24 21.4998H23C22.7348 21.4998 22.4804 21.6051 22.2929 21.7927C22.1053 21.9802 22 22.2346 22 22.4998C22 22.765 22.1053 23.0194 22.2929 23.2069C22.4804 23.3944 22.7348 23.4998 23 23.4998H24C24.3264 23.5007 24.6525 23.4756 24.975 23.4248C24.8928 24.1935 24.5897 24.922 24.1022 25.522C23.6147 26.122 22.9638 26.568 22.2282 26.8058C21.4926 27.0436 20.7038 27.0632 19.9573 26.8621C19.2108 26.6611 18.5386 26.248 18.0219 25.6729C17.5053 25.0977 17.1664 24.3852 17.0462 23.6215C16.9261 22.8578 17.0298 22.0756 17.3449 21.3696C17.6599 20.6637 18.1728 20.0641 18.8215 19.6435C19.4702 19.2229 20.2269 18.9993 21 18.9998C21.2652 18.9998 21.5195 18.8944 21.7071 18.7069C21.8946 18.5194 22 18.265 22 17.9998C22 17.7346 21.8946 17.4802 21.7071 17.2927C21.5195 17.1051 21.2652 16.9998 21 16.9998C19.5215 16.9953 18.0948 17.5437 17 18.5373V8.99978C17 7.93892 17.4214 6.9215 18.1715 6.17136C18.9217 5.42121 19.9391 4.99978 21 4.99978C22.0608 4.99978 23.0782 5.42121 23.8284 6.17136C24.5785 6.9215 25 7.93892 25 8.99978V10.8373C25 11.0444 25.0635 11.2465 25.182 11.4164C25.3004 11.5862 25.4681 11.7157 25.6625 11.7873C26.7731 12.1811 27.7089 12.9545 28.3048 13.971C28.9008 14.9876 29.1186 16.1819 28.9198 17.3434C28.721 18.5048 28.1183 19.5588 27.2182 20.3192C26.3181 21.0797 25.1783 21.4978 24 21.4998ZM7.49996 15.9998C7.23475 15.9998 6.98039 15.8944 6.79286 15.7069C6.60532 15.5194 6.49996 15.265 6.49996 14.9998C6.49996 14.7346 6.60532 14.4802 6.79286 14.2927C6.98039 14.1051 7.23475 13.9998 7.49996 13.9998C8.16199 13.9965 8.79597 13.7321 9.2641 13.2639C9.73223 12.7958 9.99668 12.1618 9.99996 11.4998V10.4998C9.99996 10.2346 10.1053 9.98021 10.2929 9.79268C10.4804 9.60514 10.7347 9.49978 11 9.49978C11.2652 9.49978 11.5195 9.60514 11.7071 9.79268C11.8946 9.98021 12 10.2346 12 10.4998V11.4998C12 12.6933 11.5259 13.8379 10.6819 14.6818C9.83803 15.5257 8.69344 15.9998 7.49996 15.9998ZM25.5 14.9998C25.5 15.265 25.3946 15.5194 25.2071 15.7069C25.0195 15.8944 24.7652 15.9998 24.5 15.9998C23.3065 15.9998 22.1619 15.5257 21.318 14.6818C20.4741 13.8379 20 12.6933 20 11.4998V10.4998C20 10.2346 20.1053 9.98021 20.2929 9.79268C20.4804 9.60514 20.7348 9.49978 21 9.49978C21.2652 9.49978 21.5195 9.60514 21.7071 9.79268C21.8946 9.98021 22 10.2346 22 10.4998V11.4998C22.0033 12.1618 22.2677 12.7958 22.7358 13.2639C23.204 13.7321 23.8379 13.9965 24.5 13.9998C24.7652 13.9998 25.0195 14.1051 25.2071 14.2927C25.3946 14.4802 25.5 14.7346 25.5 14.9998Z"
                                    fill="#471515"
                                />
                            </svg>
                            <h3 className="font-medium text-[24px] leading-normal">
                                Focus
                            </h3>
                        </button>
                    </div>
                    <div className="grid place-content-center">
                        <h2 className="text-center text-[256px] max-w-[289px] leading-[217px] font-extrabold text-[#471515]">
                            25 00
                        </h2>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button className="grid place-items-center p-6 bg-[rgba(255,76,76,0.15)] rounded-3xl">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.5 16C19.5 16.6922 19.2947 17.3689 18.9101 17.9445C18.5256 18.5201 17.9789 18.9687 17.3394 19.2336C16.6999 19.4985 15.9961 19.5678 15.3172 19.4327C14.6383 19.2977 14.0146 18.9644 13.5251 18.4749C13.0356 17.9854 12.7023 17.3617 12.5673 16.6828C12.4322 16.0039 12.5015 15.3001 12.7664 14.6606C13.0313 14.0211 13.4799 13.4744 14.0555 13.0899C14.6311 12.7053 15.3078 12.5 16 12.5C16.9272 12.5033 17.8156 12.8731 18.4712 13.5288C19.1269 14.1844 19.4967 15.0728 19.5 16ZM6 12.5C5.30777 12.5 4.63108 12.7053 4.05551 13.0899C3.47993 13.4744 3.03133 14.0211 2.76642 14.6606C2.50152 15.3001 2.4322 16.0039 2.56725 16.6828C2.7023 17.3617 3.03564 17.9854 3.52513 18.4749C4.01461 18.9644 4.63825 19.2977 5.31719 19.4327C5.99612 19.5678 6.69985 19.4985 7.33939 19.2336C7.97894 18.9687 8.52556 18.5201 8.91015 17.9445C9.29473 17.3689 9.5 16.6922 9.5 16C9.49671 15.0728 9.1269 14.1844 8.47124 13.5288C7.81557 12.8731 6.92725 12.5033 6 12.5ZM26 12.5C25.3078 12.5 24.6311 12.7053 24.0555 13.0899C23.4799 13.4744 23.0313 14.0211 22.7664 14.6606C22.5015 15.3001 22.4322 16.0039 22.5673 16.6828C22.7023 17.3617 23.0356 17.9854 23.5251 18.4749C24.0146 18.9644 24.6383 19.2977 25.3172 19.4327C25.9961 19.5678 26.6999 19.4985 27.3394 19.2336C27.9789 18.9687 28.5256 18.5201 28.9101 17.9445C29.2947 17.3689 29.5 16.6922 29.5 16C29.4967 15.0728 29.1269 14.1844 28.4712 13.5288C27.8156 12.8731 26.9272 12.5033 26 12.5Z"
                                    fill="#471515"
                                />
                            </svg>
                        </button>
                        <button className="py-[32px] px-[48px] rounded-[32px] bg-[rgba(255,76,76,0.71)]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M27 6V26C27 26.5304 26.7893 27.0391 26.4142 27.4142C26.0391 27.7893 25.5304 28 25 28H20.5C19.9696 28 19.4609 27.7893 19.0858 27.4142C18.7107 27.0391 18.5 26.5304 18.5 26V6C18.5 5.46957 18.7107 4.96086 19.0858 4.58579C19.4609 4.21071 19.9696 4 20.5 4H25C25.5304 4 26.0391 4.21071 26.4142 4.58579C26.7893 4.96086 27 5.46957 27 6ZM11.5 4H7C6.46957 4 5.96086 4.21071 5.58579 4.58579C5.21071 4.96086 5 5.46957 5 6V26C5 26.5304 5.21071 27.0391 5.58579 27.4142C5.96086 27.7893 6.46957 28 7 28H11.5C12.0304 28 12.5391 27.7893 12.9142 27.4142C13.2893 27.0391 13.5 26.5304 13.5 26V6C13.5 5.46957 13.2893 4.96086 12.9142 4.58579C12.5391 4.21071 12.0304 4 11.5 4Z"
                                    fill="#471515"
                                />
                            </svg>
                        </button>
                        <button className="grid place-items-center p-6 bg-[rgba(255,76,76,0.15)] rounded-3xl">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M31.65 16.0001C31.6515 16.3353 31.5688 16.6656 31.4093 16.9604C31.2499 17.2553 31.0189 17.5054 30.7375 17.6876L19.5875 24.8501C19.2849 25.0462 18.935 25.1568 18.5747 25.1703C18.2144 25.1837 17.8572 25.0995 17.5408 24.9266C17.2244 24.7537 16.9607 24.4985 16.7775 24.188C16.5943 23.8774 16.4984 23.5232 16.5 23.1626V17.8376L5.58752 24.8501C5.28494 25.0462 4.93499 25.1568 4.5747 25.1703C4.21441 25.1837 3.85717 25.0995 3.5408 24.9266C3.22443 24.7537 2.96069 24.4985 2.77747 24.188C2.59426 23.8774 2.49839 23.5232 2.50002 23.1626V8.83763C2.49839 8.47709 2.59426 8.12282 2.77747 7.8123C2.96069 7.50177 3.22443 7.24655 3.5408 7.07364C3.85717 6.90072 4.21441 6.81654 4.5747 6.83001C4.93499 6.84347 5.28494 6.95408 5.58752 7.15013L16.5 14.1626V8.83763C16.4984 8.47709 16.5943 8.12282 16.7775 7.8123C16.9607 7.50177 17.2244 7.24655 17.5408 7.07364C17.8572 6.90072 18.2144 6.81654 18.5747 6.83001C18.935 6.84347 19.2849 6.95408 19.5875 7.15013L30.7375 14.3126C31.0189 14.4949 31.2499 14.745 31.4093 15.0398C31.5688 15.3347 31.6515 15.6649 31.65 16.0001Z"
                                    fill="#471515"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div></div>
                <SettingsModal />
            </div>
        </div>
    );
};

export default Main;
