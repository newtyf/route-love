import { FeedWrapper } from "@/components/feed-wrapper";
import { getDatesByUsername, getUserByUsername } from "@/db/queries";

import { ResetButton } from "../reset-button";
import { StepButton } from "../step-button";

type RouteIdPageProps = {
  params: {
    routeId: string;
  };
};

const page = async ({ params }: RouteIdPageProps) => {
  const datesData = getDatesByUsername(params.routeId);
  const coupleData = getUserByUsername(params.routeId);

  const [dates, couple] = await Promise.all([datesData, coupleData]);

  return (
    <>
      <FeedWrapper>
        {/* <UnitBanner title="HOLA" description="XD" /> */}
        <div className="ml-4">
          <ResetButton
            coupleId={dates![0].couple_id}
            routeId={params.routeId}
          />
        </div>
        {dates &&
          dates.map(
            (date, i) =>
              dates && (
                <div key={date.id} className="mb-10">
                  <div className="relative flex flex-col items-center">
                    <StepButton
                      key={date.id}
                      id={date.id}
                      data={{...date, whatsapp: couple?.whatsapp}}
                      date={date.date!}
                      index={i}
                      current={!date.isViewed && !date.isLocked}
                      locked={date.isLocked!}
                      totalCount={dates.length - 1}
                      percentage={100}
                      routeId={params.routeId}
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
