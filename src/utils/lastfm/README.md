# Getting auth token

1. Run portfolio website locally.
2. Create an ngrok tunnel directing to the port the site is running on:
`ngrok http 3000`
3. Substitute the ngrok URL and API key to the following:
`http://www.last.fm/api/auth/?api_key=[API KEY HERE]&cb=[NGROK URL HERE]/api/lastfm/auth`
For example:
http://www.last.fm/api/auth/?api_key=67ecfdacaba04cf66f4e7f0e7a202684&cb=https://12e1-103-75-11-54.ngrok-free.app/api/lastfm/auth


2. https://www.last.fm/api/accounts
1. http://www.last.fm/api/auth/?api_key=xxx