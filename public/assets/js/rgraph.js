var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
var json = {
      id: "0",
      name: "UpFinity",
      data: {},
      children: [{
        id: "0_0",
        name: "Token",
        data: {
            relation: "",
        },
        children: [{
          id: "0_0_0",
          name: "Features",
          data: {
              relation: "",
          },
          children: [{
		    id: "0_0_0_0",
            name: "Reward Systems",
            data: {},
		  }, {
		    id: "0_0_0_1",
            name: "Sell Protection Algorithms",
            data: {},
		  }, {
		    id: "0_0_0_2",
            name: "Stability Algorithms",
            data: {},
		  }, {
		    id: "0_0_0_3",
            name: "Events",
            data: {},
		  }, {
		    id: "0_0_0_4",
            name: "Advanced Tax Algorithms",
            data: {},
		  }],
		}, {
		  id: "0_0_1",
          name: "Staking",
          data: {},
		  children: [],
		}, {
          id: "0_0_2",
          name: "Swap",
          data: {
              relation: "",
          },
          children: [],
		}, {
          id: "0_0_3",
          name: "Airdrop",
          data: {
              relation: "",
          },
          children: [],
        }],
      }, {
		id: "0_1",
		name: "NFT",
		data: {
		  relation: "",
		},
		children: [{
			id: "0_1_0",
			name: "NFT Origins",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_1_1",
			name: "NFT Mystery Box",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_1_2",
			name: "NFT Avatar",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_1_3",
			name: "NFT MarketPlace",
			data: {
				relation: "",
			},
			children: [],
		}],
	  }, {
		id: "0_2",
		name: "Utility",
		data: {
		relation: "",
		},
		children: [{
			id: "0_2_0",
			name: "Coin Vote",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_2_1",
			name: "Auto Shill",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_2_2",
			name: "SAFU Checker",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_2_3",
			name: "P2E Game",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_2_4",
			name: "Swap",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_2_5",
			name: "Store",
			data: {
				relation: "",
			},
			children: [],
			}, {
			id: "0_2_6",
			name: "Merchandise",
			data: {
				relation: "",
			},
			children: [],
		}],
      }],
    };
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
		useCanvas: false,
		// background: "https://theupfinity.com/assets/img/logo.png",
		duration: 300,
		fps: 30,
		transition: $jit.Trans.Quart.easeInOut,
		theta: 1,
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#fff'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#222222',
        },
		
        Edge: {
	      type: 'line',
          color: '#C17878',
          lineWidth:1.5,
		  alpha: 0.5,
		  dim: 1000,
		  epsilon: 1,
        },

        onBeforeCompute: function(node){
            //Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            //$jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
			
            // domElement.innerHTML = node.name;
			domElement.innerHTML = "<div style='position: relative; top: -10px;'><img src='https://theupfinity.com/assets/img/new/" + node.name + ".png' style='width: 20px;'></div>" + node.name,
            domElement.onclick = function(){
                rgraph.onClick(node.id, {
                    onComplete: function() {
                        //Log.write("done");
                    }
                });
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.color = "#fff";
            if (node._depth == 0) {
              style.fontSize = "1.5em";
            } else if (node._depth == 1) {
                style.fontSize = "1em";
            } else if(node._depth == 2){
                style.fontSize = "0.7em";
                style.color = "#ccc";
            } else if(node._depth >= 3){
                style.fontSize = "0.5em";
                style.color = "#aaa";
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    // rgraph.graph.eachNode(function(n) {
      // var pos = n.getPos();
      // pos.setp(-1200, 0);
    // });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 500,
    });
	
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
