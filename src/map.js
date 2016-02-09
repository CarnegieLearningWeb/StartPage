var width = document.getElementById('container').offsetWidth;
      var height = document.getElementById('container').offsetHeight;

      var map = new Datamap({
          element: document.getElementById('map'),
          scope: 'usa',
          fills: {
            HAS_SCHOOLS: '#24a4cd',
            defaultFill: '#0b6481'       // the colours
        },
             data: {                     //Place data here
              NY: {
                fillKey: 'HAS_SCHOOLS'
              },
        },
          setProjection: function(element, options) {
            var projection, path;
            projection = d3.geo.albersUsa()                    
                           .translate([(width/2), (height/2)]);
            path = d3.geo.path()
                     .projection( projection );
            return {path: path, projection: projection};
          },
          done: function(datamap) {
              datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                  console.log(geography);
                  console.log(geography.properties);

                  var el = document.getElementById("state");
                  el.value = geography.properties.name;
                  el.dispatchEvent(new Event('change'));
              });
          }
      });

      // Pass empty strings to disable labels from certain states
      var newLabels = {'AK':'Alaska', 'AL':' '};
      map.labels({'customLabelText': newLabels});