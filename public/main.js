console.log( 'api is working' )


var ajaxRequest = new XMLHttpRequest()
ajaxRequest.open('GET', 'http://api.football-data.org/v1/competitions/426/leagueTable/' )

ajaxRequest.setRequestHeader('X-Auth-Token', 'b0c29a787e514f08a36e696f73765559')

ajaxRequest.onreadystatechange = function( ){

  var done = 4
  var ok = 200

  if ( ajaxRequest.readyState === done && ajaxRequest.status === ok ) {
    var responseData = JSON.parse( ajaxRequest.responseText )

    console.log( responseData )

    console.log('hi')

    console.log( responseData.standing[0].teamName )

  }

}

ajaxRequest.send(null)
