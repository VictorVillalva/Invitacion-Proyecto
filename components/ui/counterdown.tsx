import { useEffect, useState } from "react";

function CounterDown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [partyTime, setPartyTime] = useState(false);

    useEffect(() => {
        const interval = setInterval(() =>{
            const target = new Date("09/06/2025 20:00:00");
            const now = new Date();
            const different = target.getTime() - now.getTime();
            const d = Math.floor(different / (1000 * 60 * 60 * 24))
            setDays(d);
            const h = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
            setHours(h)
            const m = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m)
            const s = Math.floor((different % (1000 * 60)) / 1000);
            setSeconds(s)

            if(d <= 0 && h <= 0 && m <= 0 && s <= m){
                setPartyTime(true)
            }
        }, 1000)
        console.log(interval)
    }, [])

    console.log(partyTime)
    return ( 
        <div className="flex flex-row w-full gap-2 p-2">
            <div className="flex flex-col w-full gap-[6px] p-1 bg-[#CBA836] rounded text-neutrals-100">
                <span className="text-[32px] font-bold text-center">{days}</span>
                <span className="text-center text-[16px]">Dias</span>
            </div>
            <div className="flex flex-col w-full gap-[6px] p-1 bg-[#CBA836] rounded text-neutrals-100">
                <span className="text-[32px] w-full font-bold text-center">{hours}</span>
                <span className="text-center text-[16px]">Horas</span>
            </div>
            <div className="flex flex-col w-full gap-[6px] p-1 bg-[#CBA836] rounded text-neutrals-100">
                <span className="text-[32px] font-bold text-center">{minutes}</span>
                <span className="text-center text-[16px]">Min.</span>
            </div>
            <div className="flex flex-col w-full gap-[6px] p-1 bg-[#CBA836] rounded text-neutrals-100">
                <span className="text-[32px] font-bold text-center">{seconds}</span>
                <span className="text-center text-[16px]">Seg.</span>
            </div>
            
        </div>
    );
}

export default CounterDown;