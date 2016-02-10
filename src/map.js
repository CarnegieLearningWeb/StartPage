
var width = document.getElementById('container').offsetWidth;
var height = document.getElementById('container').offsetHeight;
var defaultColoring = {
    NY: {
      fillKey: 'HAS_SCHOOLS'
    }
  };

var map = new Datamap({
  element: document.getElementById('map'),
  scope: 'usa',
  fills: {
    HAS_SCHOOLS: '#24a4cd',
    SELECTED: '#fb9b3b',
    defaultFill: '#0b6481' // the colours
  },
  data: defaultColoring,
  setProjection: function(element, options) {
    var projection, path;
    projection = d3.geo.albersUsa()
      .translate([(width / 2), (height / 2)]);
    path = d3.geo.path()
      .projection(projection);
    return {
      path: path,
      projection: projection
    };
  },
  done: function(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      console.log(geography.id);
      
      var newChloropleth = {};
      newChloropleth[geography.id] = {
        fillKey: 'SELECTED'
      };

      // map.updateChoropleth(newChloropleth, {reset: true});
      map.updateChoropleth(newChloropleth);

      var el = document.getElementById("state");
      el.value = geography.properties.name;
      el.dispatchEvent(new Event('change'));


    });
  }
});

// Pass empty strings to disable labels from certain states
var newLabels = {
  'AK': 'Alaska',
  'AL': ' '
};
map.labels({
  'customLabelText': newLabels
});
