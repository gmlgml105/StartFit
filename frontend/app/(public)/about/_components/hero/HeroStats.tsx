// 하단 수치 바 (39,700 / 41 / 12 …)
import { heroStats } from "../../_data/aboutData";

export default function HeroStats() {
    return (
        <ul className="flex w-[940px] h-[80px] px-[32px] rounded-[16px] bg-[rgba(255,255,255,0.6)] border-[1px] border-[rgba(255,255,255,0.7)] backdrop-blur-[12px]">
            {heroStats.map((stat) => (
                <li key={stat.label} className="flex flex-col justify-center flex-1">
                    <p className="text-[11px] text-[#5A6678]">{stat.label}</p>
                    <p className="mt-[4px] text-[#0B1B33]">
                        <strong className="text-[24px] font-bold">{stat.value}</strong>
                        <span className="ml-[4px] text-[12px] text-[#5A6678]">{stat.unit}</span>
                    </p>
                </li>
            ))}
        </ul>
    );
}