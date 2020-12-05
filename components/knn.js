import React from 'react';
import vegaEmbed from 'vega-embed'

class Knn extends React.Component {
  render() {
    let yourVlSpec = {
      "config": {
          "view": {
              "continuousWidth": 400,
              "continuousHeight": 300
          }
      },
      "layer": [
          {
              "data": {
                  "name": "data-fdb5b94634ef001c1af92245cadf7787"
              },
              "mark": "circle",
              "encoding": {
                  "color": {
                      "type": "nominal",
                      "field": "High_Income",
                      "scale": {
                          "scheme": "set1"
                      }
                  },
                  "size": {
                      "value": 40
                  },
                  "x": {
                      "type": "quantitative",
                      "field": "Age",
                      "scale": {
                          "domain": [
                              15,
                              60
                          ]
                      }
                  },
                  "y": {
                      "type": "quantitative",
                      "field": "Years of Education",
                      "scale": {
                          "domain": [
                              4,
                              16
                          ]
                      }
                  }
              }
          },
          {
              "layer": [
                  {
                      "mark": {
                          "type": "circle",
                          "filled": false
                      },
                      "encoding": {
                          "color": {
                              "type": "nominal",
                              "field": "High_Income",
                              "scale": {
                                  "scheme": "set1"
                              }
                          },
                          "size": {
                              "type": "quantitative",
                              "field": "size",
                              "legend": null,
                              "scale": {
                                  "domain": [
                                      0,
                                      15
                                  ]
                              }
                          },
                          "x": {
                              "type": "quantitative",
                              "field": "Age"
                          },
                          "y": {
                              "type": "quantitative",
                              "field": "Years of Education"
                          }
                      },
                      "selection": {
                          "Number of Neighbours:": {
                              "type": "single",
                              "bind": {
                                  "input": "range",
                                  "max": 5,
                                  "min": 1,
                                  "step": 1
                              },
                              "fields": [
                                  "k"
                              ],
                              "init": {
                                  "k": 1
                              }
                          }
                      },
                      "transform": [
                          {
                              "filter": {
                                  "selection": "Number of Neighbours:"
                              }
                          }
                      ]
                  },
                  {
                      "mark": "square",
                      "encoding": {
                          "color": {
                              "type": "nominal",
                              "field": "High_Income",
                              "scale": {
                                  "scheme": "set1"
                              }
                          },
                          "size": {
                              "value": 30
                          },
                          "x": {
                              "type": "quantitative",
                              "field": "Age"
                          },
                          "y": {
                              "type": "quantitative",
                              "field": "Years of Education"
                          }
                      },
                      "transform": [
                          {
                              "filter": {
                                  "selection": "Number of Neighbours:"
                              }
                          }
                      ]
                  }
              ],
              "data": {
                  "name": "data-3ea31e814b31ccbe287d2767f5e53248"
              }
          },
          {
              "data": {
                  "name": "data-778ab417ffc56ae669276856ca015164"
              },
              "mark": "line",
              "encoding": {
                  "color": {
                      "value": "grey"
                  },
                  "x": {
                      "type": "quantitative",
                      "field": "Age"
                  },
                  "y": {
                      "type": "quantitative",
                      "field": "Years of Education"
                  }
              },
              "transform": [
                  {
                      "filter": {
                          "selection": "Number of Neighbours:"
                      }
                  }
              ]
          }
      ],
      "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
      "datasets": {
          "data-fdb5b94634ef001c1af92245cadf7787": [
              {
                  "Age": 38,
                  "Years of Education": 8,
                  "High_Income": false
              },
              {
                  "Age": 59,
                  "Years of Education": 13,
                  "High_Income": true
              },
              {
                  "Age": 26,
                  "Years of Education": 13,
                  "High_Income": false
              },
              {
                  "Age": 51,
                  "Years of Education": 13,
                  "High_Income": true
              },
              {
                  "Age": 34,
                  "Years of Education": 11,
                  "High_Income": false
              },
              {
                  "Age": 50,
                  "Years of Education": 15,
                  "High_Income": true
              },
              {
                  "Age": 45,
                  "Years of Education": 13,
                  "High_Income": true
              },
              {
                  "Age": 57,
                  "Years of Education": 10,
                  "High_Income": true
              },
              {
                  "Age": 23,
                  "Years of Education": 10,
                  "High_Income": false
              },
              {
                  "Age": 19,
                  "Years of Education": 6,
                  "High_Income": false
              },
              {
                  "Age": 49,
                  "Years of Education": 13,
                  "High_Income": true
              },
              {
                  "Age": 31,
                  "Years of Education": 13,
                  "High_Income": false
              },
              {
                  "Age": 51,
                  "Years of Education": 10,
                  "High_Income": true
              },
              {
                  "Age": 33,
                  "Years of Education": 13,
                  "High_Income": false
              },
              {
                  "Age": 40,
                  "Years of Education": 9,
                  "High_Income": false
              },
              {
                  "Age": 20,
                  "Years of Education": 9,
                  "High_Income": false
              },
              {
                  "Age": 42,
                  "Years of Education": 13,
                  "High_Income": true
              },
              {
                  "Age": 36,
                  "Years of Education": 7,
                  "High_Income": false
              },
              {
                  "Age": 25,
                  "Years of Education": 9,
                  "High_Income": false
              },
              {
                  "Age": 44,
                  "Years of Education": 8,
                  "High_Income": false
              },
              {
                  "Age": 38,
                  "Years of Education": 13,
                  "High_Income": false
              },
              {
                  "Age": 47,
                  "Years of Education": 9,
                  "High_Income": false
              },
              {
                  "Age": 32,
                  "Years of Education": 9,
                  "High_Income": true
              },
              {
                  "Age": 25,
                  "Years of Education": 7,
                  "High_Income": false
              },
              {
                  "Age": 30,
                  "Years of Education": 5,
                  "High_Income": false
              },
              {
                  "Age": 55,
                  "Years of Education": 13,
                  "High_Income": true
              },
              {
                  "Age": 53,
                  "Years of Education": 12,
                  "High_Income": true
              },
              {
                  "Age": 47,
                  "Years of Education": 12,
                  "High_Income": true
              },
              {
                  "Age": 55,
                  "Years of Education": 14,
                  "High_Income": true
              },
              {
                  "Age": 60,
                  "Years of Education": 11,
                  "High_Income": true
              },
              {
                  "Age": 53,
                  "Years of Education": 14,
                  "High_Income": true
              },
              {
                  "Age": 41,
                  "Years of Education": 14,
                  "High_Income": true
              }
          ],
          "data-3ea31e814b31ccbe287d2767f5e53248": [
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "High_Income": true,
                  "k": 1,
                  "size": 190
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "High_Income": true,
                  "k": 2,
                  "size": 375
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "High_Income": false,
                  "k": 3,
                  "size": 500
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "High_Income": false,
                  "k": 4,
                  "size": 700
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "High_Income": false,
                  "k": 5,
                  "size": 1030
              }
          ],
          "data-778ab417ffc56ae669276856ca015164": [
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "k": 1
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "k": 2
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "k": 3
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "k": 4
              },
              {
                  "Age": 30,
                  "Years of Education": 10,
                  "k": 5
              },
              {
                  "Age": 32,
                  "Years of Education": 9,
                  "k": 1
              },
              {
                  "Age": 34,
                  "Years of Education": 11,
                  "k": 2
              },
              {
                  "Age": 25,
                  "Years of Education": 9,
                  "k": 3
              },
              {
                  "Age": 23,
                  "Years of Education": 10,
                  "k": 4
              },
              {
                  "Age": 31,
                  "Years of Education": 13,
                  "k": 5
              }
          ]
      }
  }
  
    vegaEmbed('#vis', yourVlSpec);

    return(
      <div id="vis"></div>
    )
  }
}

export default Knn;