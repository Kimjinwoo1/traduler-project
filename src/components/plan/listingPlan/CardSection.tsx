import React from 'react';

import { getPlansWithMates } from '@api/plans';
import { userStore } from '@store/userStore';
import { useQuery } from '@tanstack/react-query';

import Card from './Card';

const CardSection = () => {
  const user = userStore.getState().user;

  const {
    data: matesData,
    isLoading: matesLoading,
    isError: matesError,
  } = useQuery(
    ['plan_mates', user?.id],
    async () => {
      return await getPlansWithMates(user === null ? '' : user.id);
    },
    { enabled: user !== null },
  );

  if (matesLoading) {
    return <div>로딩중 ...</div>;
  }
  if (matesError) {
    return <div>에러 발생</div>;
  }

  if (matesData == null) {
    return <div>데이터 없음</div>;
  }

  return (
    <section className="main-layout">
      <div></div>
      <div>
        <Card matesData={matesData} />
      </div>
    </section>
  );
};

export default CardSection;
