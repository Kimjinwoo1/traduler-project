// import Carousel from '@components/carousel/Carousel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getPlan } from '@api/plans';
import IconLocationDefault from '@assets/icons/IconLocationDefault';
import Carousel from '@components/carousel/Carousel';
import Comments from '@components/comments/Comments';
import Invite from '@components/common/invite/Invite';
import PlaceList from '@components/ending/PlaceList';
import TotalPay from '@components/pay/TotalPay';
import EndingDate from '@components/plan/ending/EndingDate';
import EndingMap from '@components/plan/ending/EndingMap';
import EndingPay from '@components/plan/ending/EndingPay';
import { sideBarStore } from '@store/sideBarStore';
import { useQuery } from '@tanstack/react-query';

const Ending = () => {
  const isSideBarOpen = sideBarStore((state) => state.isSideBarOpen);
  const isVisibleSideBar = sideBarStore((state) => state.isVisibleSideBar);
  const { id: planId } = useParams();
  const { data: plan, isLoading } = useQuery(
    ['plan', planId],
    async () => await getPlan(planId as string),
  );
  const [dates, setDates] = useState<string[]>();
  const [pay, setPay] = useState<number>();

  useEffect(() => {
    if (plan !== undefined && plan !== null) {
      setDates(plan[0].dates);
      setPay(plan[0].total_cost);
    }
  }, [plan]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <main
      className={`transition-all duration-300 ease-in-out pt-[50px] flex-col flex-center ${
        isVisibleSideBar
          ? isSideBarOpen
            ? 'w-[calc(100vw-270px)] ml-[270px]'
            : 'w-[calc(100vw-88px)] ml-[88px]'
          : 'w-[calc(100vw)] ml-0'
      }`}
    >
      <div className="flex flex-col w-plan mt-[76px]">
        <div className="flex items-center mb-[18px]">
          <h3 className="font-bold text-gray_dark_1">{plan?.[0].title}</h3>
          <div className="bg-orange rounded-3xl w-[65px] h-[20px] text-[9px] flex-center font-normal text-white ml-[50px]">
            완료된 여행
          </div>
        </div>
        <EndingDate planDates={dates as string[]} />
        <Invite />
        <EndingPay pay={pay as number} />
        <div className="flex items-center my-[10px] text-normal font-semibold text-gray_dark_1 gap-[8px]">
          <IconLocationDefault w="20" h="20" />
          <label>여행지역</label>
        </div>
        <EndingMap />
        <Carousel />
        <PlaceList />
        <TotalPay />
        <Comments />
      </div>
    </main>
  );
};

export default Ending;
