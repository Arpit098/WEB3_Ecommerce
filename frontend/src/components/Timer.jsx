import React from "react";

const Timer = () => {
    const [timeLeft, setTimeLeft] = React.useState(900);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="mt-4 text-center -translate-x-11 -translate-y-10">
            <p className="font-medium mb-2">Offer expires in:</p>
            <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                <div className="bg-gray-800 text-white px-4 py-2 rounded">
                    {hours < 10 ? `0${hours}` : hours}
                </div>
                <span>:</span>
                <div className="bg-gray-800 text-white px-4 py-2 rounded">
                    {minutes < 10 ? `0${minutes}` : minutes}
                </div>
                <span>:</span>
                <div className="bg-gray-800 text-white px-4 py-2 rounded">
                    {seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>
        </div>
    );
};

export default Timer;
