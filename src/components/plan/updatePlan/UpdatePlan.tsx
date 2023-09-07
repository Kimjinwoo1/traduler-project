/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { type PinContentsType, getPin } from '@api/pins';
import { getPlan } from '@api/plans';
import IconLocationDefault from '@assets/icons/IconLocationDefault';
import DatePage from '@components/addPlan/datePage/DatePage';
import Loading from '@components/loading/Loading';
import MapPoly from '@components/plan/common/MapPoly';
import Pins from '@components/plan/updatePlan/Pins';
import useHandlePage from '@hooks/useHandlePage';
import { useQuery } from '@tanstack/react-query';

const UpdatePlan = () => {
  const { id } = useParams();
  const planId: string = id as string;
  const [dates, setDates] = useState<string[]>();
  const { currentPage, handleNextPage, handlePreviousPage, setCurrentPage } =
    useHandlePage();
  const [pinArr, setPinArr] = useState<PinContentsType[]>([]);
  const {
    data: plan,
    isLoading,
    isError,
  } = useQuery(['plan', planId], async () => await getPlan(planId));
  const { data: pin } = useQuery(
    ['pin', planId, currentPage],
    async () => await getPin(planId, currentPage),
  );

  useEffect(() => {
    if (pin != null && pin.length !== 0) {
      setPinArr(pin?.[0].contents as []);
    }
  }, [pin]);

  useEffect(() => {
    if (plan !== undefined && plan !== null) {
      setDates(plan[0].dates);
      setCurrentPage(0);
    }
  }, [plan]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="w-full h-[500px] bg-slate-300">오류 발생...</div>;
  }

  return (
    <>
      <DatePage
        dates={dates ?? []}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
      />
      <div className="flex flex-col justify-center gap-5">
        <div className="flex items-center my-[10px] text-normal font-semibold text-gray_dark_1 gap-[8px]">
          <IconLocationDefault w="20" h="20" />
          <label>여행지역</label>
        </div>
        <MapPoly pins={pinArr} />
      </div>
      <Pins currentPage={currentPage} dates={dates as string[]} />
    </>
  );
};

export default UpdatePlan;
