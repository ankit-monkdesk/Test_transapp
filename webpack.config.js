externals = {
    'Config' : JSON.stringify(process.env.NODE_ENV === 'production' ? {
      serverUrl: "https://master.dkbwx9mauyaxl.amplifyapp.com"
    } : {
      serverUrl: "http://localhost:3000"
    })
  }