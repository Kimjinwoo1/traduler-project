/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';

import { type PinContentsType } from '@api/pins';
import { datesStore } from '@store/datesStore';
import { updatePinStore } from '@store/updatePinStore';

import AddMapModal from './AddMapModal';

interface PropsType {
  currentPage: number;
  pins: PinContentsType[][];
  setPins: React.Dispatch<React.SetStateAction<PinContentsType[][]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const AddPlanContents = ({
  currentPage,
  pins,
  setPins,
  setCurrentPage,
}: PropsType) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const { dates } = datesStore();

  // pin 수정 버튼
  const { updateClick } = updatePinStore();
  const updatePin = (idx: number) => {
    const pin = pins[currentPage][idx];
    updateClick(pin, idx);
    openModal();
  };

  // pin 삭제 버튼
  const deletePin = (idx: number) => {
    const deletedPins = pins.map((pin, i) => {
      if (i === currentPage) {
        return pin.filter((_, j) => j !== idx);
      }
      return pin;
    });
    setPins(deletedPins);
  };

  useEffect(() => {
    // pins에 내용이 없을 떄
    if (pins.length === 0) {
      setCurrentPage(() => 0);
      setPins(() => {
        const newPins = [];
        for (let i = 0; i < dates.length; i++) {
          newPins.push([]);
        }
        return newPins;
      });
    }
    // pins에 내용이 있을 때
    else {
      // eslint-disable-next-line no-useless-return
      if (pins.length === dates.length) return;
      else {
        setCurrentPage(() => 0);
        setPins((state) => {
          const newPins: PinContentsType[][] = [];
          for (let i = 0; i < dates.length; i++) {
            if (state[i] !== undefined) {
              newPins.push(state[i]);
            } else {
              newPins.push([]);
            }
          }
          return newPins;
        });
      }
    }
  }, [dates]);

  return (
    <>
      <div className="w-full h-[500px]">
        <Map
          center={{
            lat:
              pins.length !== 0 && pins[currentPage].length !== 0
                ? (pins[currentPage][0].lat as number)
                : 37.566826004661,
            lng:
              pins.length !== 0 && pins[currentPage].length !== 0
                ? (pins[currentPage][0].lng as number)
                : 126.978652258309,
          }}
          style={{ width: '100vw', height: '500px' }}
          level={3}
        >
          {pins[currentPage]?.map((pin, idx) => {
            return (
              <MapMarker
                key={idx}
                position={{
                  lat: pin?.lat as number,
                  lng: pin?.lng as number,
                }}
              ></MapMarker>
            );
          })}
          {pins.length !== 0 && pins[currentPage].length !== 0 && (
            <Polyline
              path={pins[currentPage].map((pin) => {
                return {
                  lat: pin.lat as number,
                  lng: pin.lng as number,
                };
              })}
              strokeWeight={5} // 선의 두께 입니다
              strokeColor={'#FFAE00'} // 선의 색깔입니다
              strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
              strokeStyle={'solid'} // 선의 스타일입니다
            />
          )}
        </Map>
      </div>
      <div>
        <div>
          {pins[currentPage]?.map((pin, idx: number) => {
            return (
              <div key={idx}>
                <p>{idx + 1}</p>
                <p>
                  {pin !== null &&
                    typeof pin === 'object' &&
                    'placeName' in pin && <span>{pin.placeName}</span>}
                </p>
                <button
                  className="m-4 bg-slate-400"
                  onClick={() => {
                    updatePin(idx);
                  }}
                >
                  수정
                </button>
                <button
                  className="m-4 bg-slate-400"
                  onClick={() => {
                    deletePin(idx);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        </div>
        {dates.length !== 0 && (
          <button
            type="button"
            onClick={openModal}
            className="p-5 bg-slate-500"
          >
            장소 추가하기
          </button>
        )}
      </div>
      {isOpenModal && (
        <AddMapModal
          setPins={setPins}
          setIsOpenModal={setIsOpenModal}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default AddPlanContents;
