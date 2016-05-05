
window.initMap = function(defaultColoring, bubblesData, states){
  var width = document.getElementById('container').offsetWidth;
  var height = document.getElementById('container').offsetHeight;
  // var defaultColoring = {
  //     AR: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     AL: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     CA: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     CO: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     DC: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     IL: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     MI: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     NJ: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     NY: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     OK: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     TX: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     UT: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     VA: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     VT: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     WV: {
  //       fillKey: 'HAS_SCHOOLS'
  //     },
  //     WY: {
  //       fillKey: 'HAS_SCHOOLS'
  //     }
  //   };

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
    geographyConfig:{
      highlightOnHover: false,
      popupOnHover: true
    },
    bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: null,
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        },
        fillOpacity: 0.75,
        animate: false,
        highlightOnHover: false,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        highlightFillOpacity: 0.85,
        exitDelay: 100,
        key: JSON.stringify
    },
    done: function(datamap) {
      datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {

        // // Select the path for the target state
        // var $this = d3.select('.'+geography.id);
        
        // // Create a new object for previousAttributes for mouseleave to use
        // var previousAttributes = {

        //         'fill':  '#fb9b3b',

        //         'stroke': $this.style("stroke"),
        //         'stroke-width': $this.style("stroke-width"),
        //         'fill-opacity': $this.style("fill-opacity")
        //       };
        
        // $this.attr('data-previousAttributes', JSON.stringify(previousAttributes));

        updateSelection(geography.id);

        var el = document.getElementById("state");
        el.value = geography.id;
        el.dispatchEvent(new Event('change'));

        // Set focus to search input
        document.getElementById("searchbox").focus();

      }); 

      datamap.svg.on('click', function() {
        console.log("CLICKED");
        console.log(d3.event.pageY);
      }); 
    
    }
  });

  window.map = map;

  // var bubblesData = [
  //  // {name: 'NY', centered: 'NY', radius: 10, fillKey: 'HAS_SCHOOLS'},
  //  {name: 'DC', centered: 'DC', radius: 10, fillKey: 'HAS_SCHOOLS'},
  //  // {name: 'AL', centered: 'AL', radius: 10, fillKey: 'HAS_SCHOOLS'}
  // ];

  function drawBubbles(bubblesData){
    map.bubbles(
      bubblesData, {
      popupTemplate: function(geo, data) {
        return "<div class='hoverinfo'>" + data.name + "";
      }
    });
  }

  drawBubbles(bubblesData);

  $(map.svg[0][0]).on('click', '.bubbles', function(e) {
    var name = e.target.__data__.name;

    var newBubbles = [
        // {name: 'NY', centered: 'NY', radius: 10, data: "OMNEGA", fillKey: (name == 'NY' ? 'SELECTED' : 'HAS_SCHOOLS')},
        {name: 'DC', centered: 'DC', radius: 10, data: "OMNEGA", fillKey: (name == 'DC' ? 'SELECTED' : 'HAS_SCHOOLS')},
        // {name: 'AL', centered: 'AL', radius: 10, data: "OMNEGA", fillKey: (name == 'AL' ? 'SELECTED' : 'HAS_SCHOOLS')}
      ];
    map.bubbles(
      newBubbles, {
      popupTemplate: function(geo, data) {
        return "<div class='hoverinfo'>" + data.name + "";
      }
    });

    // Filter list and set focus
    var el = document.getElementById("state");
    el.value = name;
    el.dispatchEvent(new Event('change'));

    // Set focus to search input
    document.getElementById("searchbox").focus();
  });


  function updateSelection(id){
    var newChloropleth = {};
    // var states = ['AR', 'AL', 'CA', 'CO', 'DC', 'IL', 'MI', 'NJ', 'NY', 'OK', 'TX', 'UT', 'VA', 'VT', 'WV', 'WY'];
    states.forEach(function(stateId){
      newChloropleth[stateId] = {
        fillKey: (id == stateId ? 'SELECTED' : 'HAS_SCHOOLS')
      };
    });
    console.log(newChloropleth);
    
    map.updateChoropleth(newChloropleth);


  }

  // Pass empty strings to disable labels from certain states
  var newLabels = {
    // 'AK': ' ',
    // 'AL': ' '
  };
  map.labels({
    customLabelText: newLabels
  });
}