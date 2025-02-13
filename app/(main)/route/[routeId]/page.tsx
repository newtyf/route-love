import { FeedWrapper } from "@/components/feed-wrapper";
import { getDatesByUsername } from "@/db/queries";
import { LessonButton } from "../lesson-button";
import { UnitBanner } from "../unit-banner";

type RouteIdPageProps = {
  params: {
    routeId: string;
  };
};

const page = async ({ params }: RouteIdPageProps) => {
  const datesData = getDatesByUsername(params.routeId);

  const [dates] = await Promise.all([datesData]);

  return (
    <>
      <FeedWrapper>
        {/* <UnitBanner title="HOLA" description="XD" /> */}
        {dates &&
          dates.map(
            (date, i) =>
              dates && (
                <div key={date.id} className="mb-10">
                  <div className="relative flex flex-col items-center">
                    <LessonButton
                      key={date.id}
                      id={date.id!}
                      data={date}
                      index={i}
                      current={!date.isViewed}
                      locked={date.isLocked!}
                      percentage={100}
                    />
                  </div>
                </div>
              )
          )}
      </FeedWrapper>
    </>
  );
};

export default page;
