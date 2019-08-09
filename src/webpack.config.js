externals,{
    'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
      serverUrl: "https://ankit-monkdesk.github.io/Test_transapp/"
    } : {
      serverUrl: "http://localhost:3000"
    })
  }
