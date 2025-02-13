import { FeedWrapper } from "@/components/feed-wrapper";
import { getDatesByUsername } from "@/db/queries";

import { StepButton } from "../step-button";

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
                    <StepButton
                      key={date.id}
                      id={date.id}
                      data={date}
                      index={i}
                      current={!date.isViewed && !date.isLocked}
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
