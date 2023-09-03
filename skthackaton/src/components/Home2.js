import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
// import { PageTitle, Footer } from "./pull/widget/layout"; // layout 모듈은 Home2.js와 같은 폴더의 부모 폴더에 위치

// import { FeatureCard, TeamCard } from "./pull/widgets/cards"; // cards 모듈은 Home2.js와 같은 폴더의 부모 폴더에 위치

// import { featuresData, teamData, contactData } from "./pull/data"; // data 모듈은 Home2.js와 같은 폴더의 부모 폴더에 위치
export function Home2() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                SKT와 함께하는 자폐 아동 치료 서비스
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              SK텔레콤이 자체 개발한 AI 기반 영상분석 모델은 영상 데이터에서<br></br>발달장애인의 특정 동작과 모션 패턴을 분석하고<br></br>도전적 행동 유형과 발생 빈도·강도 등을 정확히 인지한다.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))} */}
          </div>
          <br></br><br></br>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                U-Dalle
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              감성 미술 치료: 자폐 아동을 위한 음악과 이미지의 마법
                <br />
                <br />
                이 서비스는 사용자의 감정을 선택하면 마음을 담은 노래가 흘러나오며, 그와 어울리는 아름다운 사진들이 20장 나열됩니다. 여기서 특별한 순간을 만들기 위해 5장의 사진을 선택하여 나만의 감성적인 콜라주를 만들어 볼 수 있습니다. 더불어, 다른 사용자와 이야기를 나누고, 서로의 작품을 감상하며, 소중한 순간들을 기록으로 남길 수 있는 게시판과 모아보기 기능도 제공됩니다. 이 서비스는 아이들과 함께하는 감성적인 여정을 위한 완벽한 동반자입니다.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    서비스 사용 영상 : 이렇게 사용해보세요!
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    보다 쉬운 서비스 사용을 위해 안내 영상을 제작하였습니다! 보시고 따라해보는 시간을 가져보아요!
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </>
  );
          }
export default Home2;
