import { useEffect } from "react";
import Layout from "@/components/Layout";
import LiveRoom from "@/components/workshops/LiveRoom";
import LiveWaitingRoom from "@/components/workshops/LiveWaitingRoom";
import LiveEndedState from "@/components/workshops/LiveEndedState";
import { useWorkshopStatus } from "@/components/workshops/useWorkshopStatus";
import { currentWorkshop } from "@/config/workshops";
import { trackEvent } from "@/lib/analytics";

const LiveStream = () => {
  const { status, msToStart } = useWorkshopStatus(currentWorkshop);

  useEffect(() => {
    document.title = `${currentWorkshop.shortTitle} Live Workshop | Well Adjusted Chiropractic`;
    trackEvent("live_room_view", {
      workshop_id: currentWorkshop.id,
      workshop_title: currentWorkshop.title,
      event_type: currentWorkshop.eventType,
      video_id: currentWorkshop.youtubeVideoId,
    });
  }, []);

  return (
    <Layout>
      {status === "live" ? (
        <LiveRoom workshop={currentWorkshop} />
      ) : status === "upcoming" ? (
        <LiveWaitingRoom workshop={currentWorkshop} msToStart={msToStart} />
      ) : (
        <LiveEndedState workshop={currentWorkshop} />
      )}
    </Layout>
  );
};

export default LiveStream;
