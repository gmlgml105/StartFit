// 섹션 전체 틀
import Image from "next/image";
import HeroSearch from "./HeroSearch";
import HeroScoreCard from "./HeroScoreCard";
import HeroStats from "./HeroStats";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[800px] overflow-hidden">
            {/* 배경 이미지 */}
            <Image
                src="/assets/images/about/hero-store.jpg"
                alt=""
                fill
                className="object-cover"
            />
            {/* 왼쪽 글씨가 잘 보이도록 흰색 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.85)] via-[rgba(255,255,255,0.4)] to-transparent" />

            {/* 내용 영역 (Header 높이 96px만큼 띄움) */}
            <div className="relative h-full max-w-[1440px] mx-auto px-[80px] pt-[96px]">
                {/* 왼쪽 텍스트 */}
                <div className="pt-[100px]">
                    <p className="flex items-center gap-[8px] text-[13px] font-semibold text-[#3A4556] tracking-[1px]">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#0B1B33]" />
                        BEFORE CONTRACT · 계약 전 상권 체크
                    </p>

                    <h1 className="mt-[20px] text-[60px] font-bold leading-[1.25] text-[#0B1B33]">
                        이 자리<br />
                        <span className="text-[#1D4E9E]">계약해도 될까요?</span>
                    </h1>

                    <p className="mt-[24px] text-[16px] leading-[1.6] text-[#3A4556]">
                        주소 하나면 상권 · 폐업 위험 · 임대료 · 지원사업까지<br />
                        계약하기 전에 한 번에 확인할 수 있어요.
                    </p>

                    <div className="mt-[36px]">
                        <HeroSearch />
                    </div>
                </div>

                {/* 오른쪽 점수 카드 */}
                <div className="absolute top-[176px] right-[80px]">
                    <HeroScoreCard />
                </div>

                {/* 하단 수치 바 */}
                <div className="absolute bottom-[40px] left-[80px]">
                    <HeroStats />
                </div>
            </div>
        </section>
    );
}