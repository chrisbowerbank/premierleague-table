console.log( 'api is working' )



var ajaxRequest = new XMLHttpRequest()
ajaxRequest.open('GET', 'http://api.football-data.org/v1/competitions/426/leagueTable/' )

ajaxRequest.setRequestHeader('X-Auth-Token', 'b0c29a787e514f08a36e696f73765559')

ajaxRequest.onreadystatechange = function( ){

  var done = 4
  var ok = 200

  if ( ajaxRequest.readyState === done && ajaxRequest.status === ok ) {
    var responseData = JSON.parse( ajaxRequest.responseText )

    var teamName1 = document.getElementsByClassName('teamName1')
    teamName1.innerHTML = responseData.standing[0].teamName
    // document.querySelector('.test').innerHTML( responseData.standing[0].teamName )

    console.log( responseData )

    console.log('hi')

    console.log( responseData.standing[0].teamName )

    console.log( teamName1.innerHTML )

    console.log( teamName1 )

  }
}

var newTable = document.querySelector('table1')

// newTable.addEventListener('click',function( event ){
//
//       event.preventDefault()
//
//   for ( var e = 0 ; e < 20 ; e++ ){
//       var newRow = document.createElement( 'tr' )
//   }


  // var newElement = document.createElement('td')


//
// })


ajaxRequest.send(null)
