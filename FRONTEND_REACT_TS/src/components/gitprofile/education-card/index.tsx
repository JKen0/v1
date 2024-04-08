import React from 'react';
import { SanitizedEducation_MOD } from '../../../interface/sanitized-config';
import { skeleton } from '../../../utils';
import { Divider } from '@mui/material';

const ListItem = ({
  time,
  degree,
  institution,
  description,
  isLastIndex,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
    description?: (string | undefined)[];
    isLastIndex?: boolean;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
    <ul style={{ marginTop: "-10px", paddingLeft: '12px', listStyleType: 'disc' }}>
      {description?.map((desc, index) => (
        <li style={{ paddingBottom: "4px" }} className="text-center md:text-left w-full" key={`educ-desc-${index}`}>{desc}</li>

      ))}
    </ul>
    {!isLastIndex && <Divider style={{ paddingTop: "10px" }} />}
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
    educations: SanitizedEducation_MOD[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Education</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {educations.map((item, index) => (
                  <ListItem
                    key={index}
                    time={`${item.from} - ${item.to}`}
                    degree={item.degree}
                    institution={item.institution}
                    description={item.description}
                    isLastIndex={index === educations.length - 1 ? true : false}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
