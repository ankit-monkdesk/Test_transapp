externals,{
    'Config': JSON.stringify(process.env.PUBLIC_URL === 'production' ? {
      serverUrl: "https://ankit-monkdesk.github.io/Test_transapp/"
    } : {
      serverUrl: "http://localhost:3000"
    })
  }
  