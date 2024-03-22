const MachineLocationHistory = {
  links: [
    {
      rel: "self",
      uri: "https://sandboxapi.deere.com/platform/machines/4321/locationHistory",
    },
  ],
  total: 2,
  values: [
    {
      point: {
        lat: 41.597164,
        lon: -90.54383,
        altitude: {
          "@type": "measurementAsDouble",
          valueAsDouble: 0,
          links: null,
          unit: "meters",
        },
        links: null,
      },
      eventTimestamp: "2010-10-20T22:32:16.000Z",
      gpsFixTimestamp: "1970-01-01T00:00:00.000Z",
      links: [
        {
          rel: "machine",
          uri: "https://sandboxapi.deere.com/platform/machines/4321",
        },
      ],
    },
    {
      point: {
        lat: 41.597305,
        lon: -90.543884,
        altitude: {
          "@type": "measurementAsDouble",
          valueAsDouble: 0,
          links: null,
          unit: "meters",
        },
        links: null,
      },
      eventTimestamp: "2010-10-04T15:06:34.000Z",
      gpsFixTimestamp: "2010-10-04T15:06:24.000Z",
      links: [
        {
          rel: "machine",
          uri: "https://sandboxapi.deere.com/platform/machines/4321",
        },
      ],
    },
  ],
};

const MachineBreadcrumbs = {
  links: [
    {
      rel: "self",
      uri: "https://sandboxapi.deere.com/platform/machines/7099/breadcrumbs?lastKnown=true",
    },
  ],
  total: 1,
  values: [
    {
      "@type": "Breadcrumb",
      createTimestamp: "2018-12-18T08:30:03.789Z",
      speed: {
        "@type": "measurementAsDouble",
        valueAsDouble: 35,
        unit: "km1hr-1",
      },
      heading: {
        "@type": "measurementAsInteger",
        valueAsInteger: "33",
      },
      machineState: {
        "@type": "Breadcrumb$MachineState",
        rawState: 1,
      },
      fuelLevel: {
        "@type": "measurementAsDouble",
        valueAsDouble: 19,
        unit: "prcnt",
      },
      origin: "BREADCRUMB",
      correlationId: "1162b8ad-bbca-4c91-8c0e-2f2794b250a1",
      point: {
        "@type": "Point",
        lat: 18.513935,
        lon: 73.927629,
        altitude: {
          "@type": "measurementAsDouble",
          valueAsDouble: 0,
          unit: "m",
        },
      },
      eventTimestamp: "2018-11-18T08:40:51.000Z",
      links: [
        {
          "@type": "Link",
          rel: "machine",
          uri: "https://sandboxapi.deere.com/platform/machines/7099",
        },
      ],
    },
  ],
};
