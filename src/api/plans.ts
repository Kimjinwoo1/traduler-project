import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';
import { type Json, type PlanType } from 'types/supabase';

import { type PinContentsType } from './pins';
import { supabase } from './supabaseAuth';

export const addPlan = async (
  userId: string,
  title: string,
  totalCost: number,
  pins: PinContentsType[][],
  dates: string[],
) => {
  const planId = uuid();

  const plan: PlanType = {
    id: planId,
    users_id: userId,
    title,
    total_cost: totalCost,
    isDeleted: false,
    dates,
    plan_state: 'planning',
  };

  const { data, error } = await supabase.from('plans').insert(plan);

  for (let i = 0; i < dates.length; i++) {
    const { error: errorPins } = await supabase.from('pins').insert({
      plan_id: planId,
      contents: pins[i] as Json[],
      date: dates[i],
    });
    if (errorPins != null) {
      console.log(`오류발생 ${i}번째 pin`, errorPins);
    }
  }

  if (error != null) {
    console.log(error);
  }

  if (data !== null) {
    return { data };
  }
};

export const getPlan = async (planId: string) => {
  if (planId !== undefined) {
    const { data, error } = await supabase
      .from('plans')
      .select()
      .eq('id', planId);
    if (error != null) {
      console.log('에러 발생', error);
    }
    return data;
  }
};

export const getPlans = async (): Promise<PlanType[] | null> => {
  const { data, error } = await supabase.from('plans').select();

  if (error !== null) {
    console.log(error);
    throw new Error('오류발생');
  }
  if (data !== null) {
    const plans: PlanType[] = data as PlanType[];
    return plans;
  }

  return null;
};

export const getTotalCost = async (userId: string): Promise<number | null> => {
  const { data, error } = await supabase
    .from('plans')
    .select('total_cost')
    .eq('users_id', userId);

  if (error !== null) {
    console.log(error);
    throw new Error('오류발생');
  }
  if (data !== null && data.length > 0) {
    const totalCost = data[0].total_cost;
    console.log('api통신', data);
    return totalCost;
  }

  return null;
};

export const updateDatePlan = async (planId: string, dates: string[]) => {
  const { error } = await supabase
    .from('plans')
    .update({ dates })
    .eq('id', planId);

  if (error !== null) {
    console.log(error);
  }
};
