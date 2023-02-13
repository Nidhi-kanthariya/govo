// Area Bubbles //
var bubble_map = new Datamap({
  element: document.getElementById('bubbles'),

  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false,
  },
  fills: {
    defaultFill: 'rgba(var(--primary),0.6)',
    USA: '#fff',
  },
});
var radius = 6;
bubble_map.bubbles(
  [
    {
      name: 'Not a bomb, but centered on Brazil',
      radius: radius,
      centered: 'BRA',
      country: 'USA',
      yeild: 0,
      fillKey: 'USA',
      date: '1954-03-01',
      borderColor: 'var(--danger)',
      latitude: 50.415,
      longitude: 270,
    },
    {
      name: 'Not a bomb',
      radius: radius,
      yeild: 0,
      country: 'USA',
      centered: 'USA',
      date: '1986-06-05',
      significance: 'Centered on US',
      fillKey: 'USA',
      borderColor: 'rgba(var(--primary),1)',
      latitude: 50.415,
      longitude: 100.1619,
    },
    {
      name: 'Castle Bravo',
      radius: radius,
      yeild: 15000,
      country: 'USA',
      significance: 'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
      fillKey: 'USA',
      date: '1954-03-01',
      latitude: 1.415,
      longitude: 20.1619,
      borderColor: 'var(--title)',
    },
  ],
  {},
);

// Con Fig  //

var defaultOptions = {
  scope: 'world', //currently supports 'usa' and 'world', however with custom map data you can specify your own
  //returns a d3 path and projection functions
  projection: 'equirectangular', //style of projection to be used. try "mercator"
  height: null, //if not null, datamaps will grab the height of 'element'
  width: null, //if not null, datamaps will grab the width of 'element'
  responsive: true, //if true, call `resize()` on the map object when it should adjust it's size
  done: function () {}, //callback when the map is done drawing
  fills: {
    defaultFill: '#ABDDA4', //the keys in this object map to the "fillKey" of [data] or [bubbles]
  },
  dataType: 'json', //for use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
  dataUrl: null, //if not null, datamaps will attempt to fetch this based on dataType ( default: json )
  geographyConfig: {
    dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
    hideAntarctica: true,
    borderWidth: 1,
    borderOpacity: 1,
    borderColor: '#FDFDFD',
    popupTemplate: function (geography, data) {
      //this function should just return a string
      return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
    },
    popupOnHover: true, //disable the popup while hovering
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
  },
  bubblesConfig: {
    borderWidth: 2,
    borderOpacity: 1,
    borderColor: '#FFFFFF',
    popupOnHover: true,
    radius: 5,
    popupTemplate: function (geography, data) {
      return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
    },
    fillOpacity: 0.75,
    animate: true,
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
    highlightFillOpacity: 0.85,
    exitDelay: 100,
    key: JSON.stringify,
  },
};
