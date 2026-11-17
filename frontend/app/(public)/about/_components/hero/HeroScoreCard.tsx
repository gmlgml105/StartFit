// 오른쪽 73점 카드
import { heroScoreItems } from "../../_data/aboutData";

export default function HeroScoreCard() {
    return (
        <div className="w-[260px] p-[24px] rounded-[16px] bg-[rgba(255,255,255,0.55)] border-[1px] border-[rgba(255,255,255,0.7)] backdrop-blur-[12px] shadow-[0_10px_30px_rgba(11,27,51,0.12)]">
            <p className="text-[11px] font-semibold text-[#5A6678] tracking-[1px]">
                SPOT · 종합 상권 적합도
            </p>

            <div className="flex items-end gap-[8px] mt-[8px]">
                <strong className="text-[48px] font-bold leading-[1] text-[#0B1B33]">73</strong>
                <span className="mb-[6px] text-[12px] text-[#5A6678]">/ 100 · 검토 필요</span>
            </div>

            <ul className="flex flex-col gap-[12px] mt-[20px]">
                {heroScoreItems.map((item) => (
                    <li key={item.label}>
                        <p className="text-[12px] font-medium text-[#3A4556]">{item.label}</p>
                        <div className="w-full h-[4px] mt-[6px] rounded-full bg-[rgba(11,27,51,0.1)]">
                            <div
                                className="h-full rounded-full"
                                style={{ width: `${item.value}%`, backgroundColor: item.color }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}