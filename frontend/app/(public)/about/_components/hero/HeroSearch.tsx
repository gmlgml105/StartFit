// 주소 입력창 + 체크 시작 버튼
"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
    const [address, setAddress] = useState("");
    const router = useRouter();

    // 체크 시작 → 상권 분석 페이지로 주소를 넘겨줌
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!address.trim()) return;
        router.push(`/diagnosis?address=${encodeURIComponent(address)}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center w-[460px] h-[60px] pl-[24px] pr-[8px] rounded-[12px] bg-[rgba(11,27,51,0.75)] backdrop-blur-[8px]"
        >
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="계약하려는 주소나 동네를 입력해 주세요"
                className="flex-1 bg-transparent text-[15px] text-white placeholder:text-[rgba(255,255,255,0.6)] outline-none"
            />
            <button
                type="submit"
                className="h-[44px] px-[22px] rounded-[8px] bg-[#F2B544] text-[15px] font-bold text-[#0B1B33]"
            >
                체크 시작
            </button>
        </form>
    );
}