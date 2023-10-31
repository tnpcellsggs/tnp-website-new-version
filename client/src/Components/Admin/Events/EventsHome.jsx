import React, { useState } from "react";
import EventsList from "./EventsList";
import EventsAdd from "./EventsAdd";

function EventsHome() {
  return (
    <>
      <h2 style={{ marginLeft: "40px" }}>Manage Events</h2>
      <EventsList />
      <EventsAdd />
    </>
  );
}

export default EventsHome;
