
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
      window.alpha = geography;
      window.beta = datamap;
      console.log(geography.id);

      // Select the path for the target state
      var $this = d3.select('.'+geography.id);
      
      // Create a new object for previousAttributes for mouseleave to use
      var previousAttributes = {

              'fill':  '#fb9b3b',

              'stroke': $this.style("stroke"),
              'stroke-width': $this.style("stroke-width"),
              'fill-opacity': $this.style("fill-opacity")
            };
      
      $this.attr('data-previousAttributes', JSON.stringify(previousAttributes));


      updateSelection(geography.id);



      
      var el = document.getElementById("state");
      el.value = geography.properties.name;
      el.dispatchEvent(new Event('change'));

      // Set focus to search input
      document.getElementById("searchbox").focus();

    });
  }
});

function updateSelection(id){

  var newChloropleth = {};
  newChloropleth[id] = {
    fillKey: 'SELECTED'
  };
  
  map.updateChoropleth(newChloropleth);
}

// Pass empty strings to disable labels from certain states
var newLabels = {
  'AK': 'Alaska',
  'AL': ' '
};
map.labels({
  'customLabelText': newLabels
});
