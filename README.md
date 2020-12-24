# Final Project Backend API
Lidemy mentor-program-4th Final Project Backend API

Base URL: http://movie-api.jas0nhuang.tw/

## GET
### movies_intheaters
Get information about movies in theaters.

URL: `/movies-intheaters`

Method: `GET`

Query Parameters:

- None

  Response: An array of movie (in theaters) information objects.
  A single object example:
  ```
  {
    "_id": "5fc9cad77642aa2e900c55dd",
    "name": "古魯家族：新石代",
    "releaseDate": 1606435200000,
    "story": "STORY TEXT",
    "imgSrc": "https://............",
    "genre": ["'動畫'","'喜劇'"],
    "runtime: "01時35分",
    "imdbRating": "7.1",
    "director": "喬伊克勞福德(JoelCrawford)",
    "actors": ["尼可拉斯凱吉(NicolasCage)","萊恩雷諾斯(RyanReynolds)"...],
    "trailer": "https://..........."
  }
  ```

- genre

  Response: Same as above but movies filtered with genre given.

  Request example:
  ```
  fetch('http://movie-api.jas0nhuang.tw/movies-intheaters?genre=喜劇')
    .then(...)
  ```

### movies_thisweek
Get information about movies relasing in the coming week.

URL: `/movies-thisweek`

Method: `GET`

Response: An array of movie information objects.
A single object example is the same as movies_intheaters.


### movie_genres
Get movie genres.

URL: `/movie-genres`

Method: `GET`

Response: An array of genre information objects.
A single object example:
```
{ "_id": "5fc9d2a210f11831c841e376", "genre": "動畫" }
```


### error
Shows when error occurs (same for all GET APIs).

Response: An object shown as below:
```
{ "ok": 0, "errorMessage": "Server error"}
```

## POST
### subscribe
Subscribe to the mailing list.

URL: `/subscribe`

Method: `POST`

Response: A MongoDB result object.

Headers: 
```
{
  "Content-Type": "application/json"
}
```

Request example:
```
fetch('http://movie-api.jas0nhuang.tw/subscribe', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    email: '12345@gmail.com'
  })
})
.then(res => res.json())
.then(data => console.log(data))
```

------------------
# Planning:

## register
Method: `POST`

## login
Method: `POST`

## unsubscribe
Method: `DELETE`

unsubscribe from the mailing list.
