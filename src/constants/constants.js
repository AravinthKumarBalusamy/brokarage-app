export const columns = [
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Description",
      accessor: "description",
    },
  ];
  
  export const data = [
    {
      title: "bezkoder Tut#1",
      description: "description Tut#1",
    },
    {
      title: "bezkoder Tut#2",
      description: "description Tut#2",
    },
  ];
  
  export const sideBarData = {
    beginner : {
      heading : 'Trading Course for Beginners',
      levels: [
        {
          header : [`Introduction to trading`,
        `Trading History`,
        `Types of Exchanges`,
        `Detailed Explanation about Exchanges and their products`,
        `Brokers and financial markets`,
        `Products: Equity, Currency, Options and Commodity`,
        `How to trade`,
        `Formulas and Indicators`,
        `Psychology and sentiments`,
        `Practice on real terminal`]
      },
      {
        header : [`Introduction to Technical Analysis`,
        `The principles of Technical analysis`,
        `Trading Versus Investing`,
        `Technical Analysis Versus Fundamental Analysis`,
        `Criticisms of Technical Analysis`,
        `Technical indicators`,
        {header :`Introduction to types of charts`,
      levels:[
        `Line charts`,
        `Bar charts`,
        `Candlestick analysis`,
      ]},
        `Real Life chart samples`,
        `Volume`,
        `Open Interest`,
        `Ways of using charts`
      ]
      }
      ]
    },
    intermediate: {
      heading : 'Trading Course for Intermediate',
      levels: [
        {
          header: [
          `Introduction to deep trend analysis`,
          `Support and Resistance`,
          {
            header :`Reversal Patterns`,
            levels: [
          `Head and shoulder reversal pattern`,
          `Complex ,failed and  Inverse head and shoulder`,
          `Triple top and bottom reversal patterns`,
          `Double top and bottom reversal patterns`,
          `Continuation Patterns`,
          {
            header :`Triangles`,
            levels: [
              `Symmetric Triangle`,
          `Ascending triangle`,
          `Descending Triangle`,
            ]
          }
        ]
      },{
        header : `Introduction to volumes and open interest`,
        levels: [
          `Volume`,
          `On Balance Volume`,
          `Open Interest`,
          `Strength or weakness`,
        ]
      },
       {
         header :`Moving Averages`,
        levels : [
          `Simple Moving Average`,
          `Exponential Moving Average`,
          `Bollinger bands`,
        ]
      }
      ]
    },{
      header : [
        {header : `Oscillators and Sentiment Indicators`,
        levels: [
          `Introduction`,
        `Using Oscillators in Trending markets`,
        `Momentum Indicator`,
        `Commodity Channel Index`,
        `Relative strength index`,
        `Stochastic`,
        `Moving average convergence and divergence`,
        ]
      },
      `Investor Sentiment`,
      {header : `Introduction to candlestick charting`,
        levels: [
          `Basic shapes and doji`,
        `Spinning tops and long bodies`,
        `Reversal patterns`,
        `Reversal pattern continued`,
        `Continuation Pattern`,
        ]
      },
      `Candle volume charts`,
      {header : `Cloud Charts and Ichimoku Techniques`,
        levels: [
          `Turning and standard lines`,
        `Cloud lines`,
        `Lagging lines`,
        ]
      },
      {header : `Interpretation and state of market`,
      levels: [
        `Signals`,
      `Time periods and summary principles`,
      ]
    },
      ]
    }
  ]
  },
  advanced : {
    heading : `Trading Course for Intermediate`,
    levels:[
      {
        header : [
          {
            header : `Elliot waves and cycles of time`,
        levels: [
          {
            header : `Basics of waves`,
      levels: [`Zig zags and flats`,`Triangles`]
    },
    {header : `Fibonacci numbers`,
    levels: [
      `Fibonacci retracements`,
    `Triangles`,
    ]
  }
        ]
      },
      {header : `Cycles of time ad summary of elliot wave theory`,
    levels: [
      `Cycles basics and principles`,
    `Cycles to watch for`,
    `How to find and use cycles`
    ]
  },
  {header : `Money Management and computers`,
  levels: [
    {header : `Money management: Introduction`,
    levels: [
      `Money Guidelines and diversification`,
    `Risk versus Reward and Using Stop losses`,
    `The way you think and position sizing`
    ]
  },
  `Trading Tactics`,
  {header : `Order Types`,
    levels: [
      `Trailing stop, Stop Limit order and order modifiers`,
    `Less Common orders and summary`,
    ]
  },
  `Using Computers`,
  `Mechanical Trading Systems`
  ]
},
{header : `How to build a trading system`,
    levels: [
      {header : `Introduction: The Technique`,
    levels: [
      `The Concept and rules`,
    `The entry`,
    `Sizing and exit`,
    `Paper trade`
    ]
  },
    ]
  },
  `Algo/ Robotic trading`,
  `Creating own template in charts`,
  `Trading rules and reminders`
    ]
  },
  {
    header : [
      {
        header :`	How to analyze trade using advanced signals in`,
        levels : [
          `The Stock market`,
          `Futures and Options`,
          `Commodity`,
          `Forex`,
        ]
      },
      {
        header :`	Valuing Companies`,
        levels : [
          `Fundamental analysis`,
          `Valuing Companies`,
        ]
      },
      {
        header :`	Personality traits`,
        levels : [
          `Emotionless trading`,
          `Trading Mistakes`,
        ]
      },
      {
        header :`	Triangles and Pyramids`,
        levels : [
          `Ascending triangles and self-deception`,
          `Descending triangles`,
          `Stock market manipulators`,
          `Pyramiding your position`,
        ]
      },
    ]
  },
]
}
}