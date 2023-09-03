/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { type PinContentsType } from '@api/pins';
import { updatePinStore } from '@store/updatePinStore';
import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';
import _ from 'lodash';

import MapModalInput from '../MapModalInput';
import MapNonePoly from '../MapNonePoly';
import ModalLayout from '../ModalLayout';

interface InputType {
  address?: string;
  placeName?: string;
  cost?: number;
}

interface PropsType {
  setPins: React.Dispatch<React.SetStateAction<PinContentsType[][]>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
}

const AddMapModal = ({ setPins, setIsOpenModal, currentPage }: PropsType) => {
  const { pin, idx, resetPin } = updatePinStore();
  const [position, setPosition] = useState({
    lat: pin !== null ? (pin.lat as number) : 0,
    lng: pin !== null ? (pin.lng as number) : 0,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    defaultValues: {
      placeName: pin != null ? pin.placeName : '',
      cost: pin !== null && typeof pin.cost === 'number' ? pin.cost : 0,
    },
  });

  const onSubmit: SubmitHandler<InputType> = (data) => {
    if (data.address != null) {
      searchMap(data.address);
    }
  };
  const debouncedSearchMap = _.debounce(onSubmit, 300);

  const onSubmitPlaceName: SubmitHandler<InputType> = (data) => {
    console.log('addplan', data);
    const newContents: PinContentsType = {
      id: uuid(),
      lat: position.lat,
      lng: position.lng,
      placeName: data.placeName as string,
      cost: data.cost as number,
    };

    // 수정하기 시
    if (pin !== null) {
      setPins((state) => {
        return state.map((item, i) => {
          if (i === currentPage) {
            item[idx] = newContents;
            return [...item];
          }
          return item;
        });
      });
    }
    // 장소추가 시
    else {
      setPins((state) => {
        return state.map((item, i) => {
          if (i === currentPage) {
            return [...item, newContents];
          }
          return item;
        });
      });
    }

    setIsOpenModal(false);
    resetPin();
  };

  const disabledSubmit = () => {
    if (
      position.lat === 0 ||
      position.lng === 0 ||
      isSubmitting ||
      watch('placeName')?.length === 0
    ) {
      return true;
    }
    return false;
  };

  const searchMap = (address: string) => {
    if (address === '') return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(address, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        bounds.extend(new kakao.maps.LatLng(+data[0].y, +data[0].x));
        setPosition({ lat: +data[0].y, lng: +data[0].x });
        map.setBounds(bounds);
      }
    });
  };

  const [map, setMap] = useState<any>();

  return (
    <ModalLayout>
      <MapModalInput
        register={register}
        errors={errors}
        debouncedFunc={debouncedSearchMap}
      />
      <MapNonePoly
        pin={pin}
        setMap={setMap}
        position={position}
        setPosition={setPosition}
      />
      <form
        onSubmit={handleSubmit(onSubmitPlaceName)}
        className="flex  gap-[16px]"
      >
        <button
          className="border border-navy text-navy rounded-lg px-[20px] py-[14px] w-[210px] mr-[24px] hover:bg-navy_light_1 duration-200"
          onClick={() => {
            setIsOpenModal(false);
            resetPin();
          }}
        >
          취소
        </button>
        <button
          type="submit"
          disabled={disabledSubmit()}
          className="bg-navy text-white rounded-lg hover:bg-navy_light_3  px-[20px] py-[14px] disabled:bg-gray w-[210px] duration-200"
          onSubmit={() => {
            handleSubmit(onSubmitPlaceName);
          }}
        >
          {pin !== null ? '수정하기' : '새 장소 추가'}
        </button>
      </form>
    </ModalLayout>
  );
};
export default AddMapModal;
