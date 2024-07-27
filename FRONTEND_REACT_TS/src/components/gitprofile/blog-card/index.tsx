import LazyImage from '../lazy-image';
import { AiOutlineContainer } from 'react-icons/ai';
import { SanitizedBlog } from '../../../interface/sanitized-config';
import { ga, skeleton } from '../../../utils';
import { Experience_MOD } from '../../../interface/article';
import CONFIG from '../../../../gitprofile.config';

import hdLogo from '../../../../images/hd-mutual-logo.png';
import kennaLogo from '../../../../images/kenna-logo.jpg';
import scaleLogo from '../../../../images/scale-ai-logo.jpg';
import mcmasterLogo from '../../../../images/mcmaster-logo.jpg';

const getCompanyLogo = (logoName: string) => {
  if (logoName === 'hd-mutual-logo') return hdLogo
  else if (logoName === 'kenna-logo') return kennaLogo
  else if (logoName === 'scale-ai-logo') return scaleLogo
  else if (logoName === 'mcmaster-logo') return mcmasterLogo
  else return ''

} 

const BlogCard = ({
  loading,
  blog,
  googleAnalyticsId,
}: {
  loading: boolean;
  blog: SanitizedBlog;
  googleAnalyticsId?: string;
}) => {
  const experiences = CONFIG.experience_mod as Experience_MOD[];

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < blog.limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderArticles = () => {
    return experiences && experiences.length ? (
      experiences.slice(0, blog.limit).map((experience, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={experience.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalyticsId) {
                ga.event('Click Blog Post', {
                  post: experience.title,
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(experience.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={getCompanyLogo(experience.image)}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      {/* Title on the left */}
                      <h2 className="font-large text-base-content opacity-80" style={{ textAlign: "left" }}>
                        {experience.title}
                      </h2>
                      {/* "Hello World" on the right */}
                      <p
                        className="font-large text-base-content opacity-70 text-xs"
                        style={{ textAlign: 'right' }}
                      >
                        {experience.date}
                      </p>
                    </div>
                    {/* Second line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      {/* Distance date on the left */}
                      <p
                        className="font-large text-base-content opacity-60 text-xs"
                        style={{ textAlign: 'left' }}
                      >
                        {experience.company}
                      </p>
                      {/* "Hello World" on the right */}
                      <p
                        className="font-large text-base-content opacity-70 text-xs"
                        style={{ textAlign: 'right' }}
                      >
                        {experience.location}
                      </p>
                    </div>
                    <ul style={{ paddingLeft: '12px', listStyleType: 'disc' }}>
                      {experience.description.map((item, index) => (
                        <li
                          style={{ paddingTop: "4px" }}
                          className="text-left text-base-content opacity-60 text-xs"
                          key={`description-${index}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {experience.tags.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <AiOutlineContainer className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          No recent post
        </p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div
            className={`card compact bg-base-100 ${
              loading || (experiences && experiences.length)
                ? 'shadow bg-opacity-40'
                : 'shadow-lg'
            }`}
          >
            <div className="card-body">
              <div className="mx-3 mb-2">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                  ) : (
                    <span className="text-base-content opacity-70">
                      Technical Experience
                    </span>
                  )}
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {loading || !experiences
                    ? renderSkeleton()
                    : renderArticles()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
