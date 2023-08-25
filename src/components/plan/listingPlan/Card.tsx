import React from 'react';

import { type PlanType } from 'types/supabase';

interface CardProps {
  data: PlanType[] | null;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [selectedPlan, setSelectedPlan] = React.useState<'planning' | 'end'>(
    'planning',
  );

  const [planningCount, setPlanningCount] = React.useState<number>(0);
  const [endCount, setEndCount] = React.useState<number>(0);
  // 요일 표시하기 위해
  const daysWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // 클릭할때마다 변경
  const filterData = data?.filter((plan) =>
    selectedPlan === 'planning'
      ? plan.plan_state === 'planning'
      : plan.plan_state === 'end',
  );

  React.useEffect(() => {
    if (data != null) {
      setPlanningCount(
        data.filter((plan) => plan.plan_state === 'planning').length,
      );
      setEndCount(data.filter((plan) => plan.plan_state === 'end').length);
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-row">
        <div
          className={`cursor-pointer ${
            selectedPlan === 'planning' ? 'font-bold' : ''
          }`}
          onClick={() => {
            setSelectedPlan('planning');
          }}
        >
          예정된 계획 ({planningCount})
        </div>
        <div> | </div>
        <div
          className={`cursor-pointer ${
            selectedPlan === 'end' ? 'font-bold' : ''
          }`}
          onClick={() => {
            setSelectedPlan('end');
          }}
        >
          다녀온 여행 ({endCount})
        </div>
      </div>
      {filterData
        ?.slice()
        .sort(
          (a, b) =>
            new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime(),
        )
        .map((plan) => {
          return (
            <div key={plan.id}>
              <div className="flex mb-4 border-2 w-[1000px] h-[200px]">
                <div className="w-1/5 h-12">
                  {plan.plan_state === 'planning'
                    ? '예정된 여행'
                    : '다녀온 여행'}
                </div>

                <div className="w-3/5 h-12">
                  <div>{plan.title}</div>
                  <div>
                    {`${new Date(plan.dates[0]).getFullYear()}년 ${
                      new Date(plan.dates[0]).getMonth() + 1
                    }월 ${new Date(plan.dates[0]).getDate()}일 (${
                      daysWeek[new Date(plan.dates[0]).getDay()]
                    })`}{' '}
                    ~{' '}
                    {`${new Date(
                      plan.dates[plan.dates.length - 1],
                    ).getFullYear()}년 ${
                      new Date(plan.dates[plan.dates.length - 1]).getMonth() + 1
                    }월 ${new Date(
                      plan.dates[plan.dates.length - 1],
                    ).getDate()}일 (${
                      daysWeek[
                        new Date(plan.dates[plan.dates.length - 1]).getDay()
                      ]
                    })`}
                    ,{plan.dates.length - 1}박 {plan.dates.length}일
                  </div>
                  <div>멤버</div>
                </div>
                {/* //   );
          // })} */}

                <div className="w-1/5 h-12">
                  <div>즐겨찾기아이콘</div>
                  <div>
                    {plan.plan_state === 'end'
                      ? null
                      : plan.dates[0] === new Date().toISOString().split('T')[0]
                      ? 'D-Day'
                      : `D-${Math.ceil(
                          (new Date(plan.dates[0]).getTime() -
                            new Date().getTime()) /
                            (1000 * 60 * 60 * 24),
                        )}`}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
