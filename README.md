# Final Project Backend API
Lidemy mentor-program-4th Final Project Backend API

Base URL: http://movie-api.jas0nhuang.tw/

## movies_intheaters
URL: `/`

Method: `GET`

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

## movies_thisweek
URL: `/movies-thisweek`

Method: `GET`

Response: An array of movie (releasing in the coming week) information objects.
A single object example is the same as movies_intheaters.


## movie_genres
URL: `/movie-genres`

Method: `GET`

Response: An array of genre information objects.
A single object example:
```
{ "_id": "5fc9d2a210f11831c841e376", "genre": "動畫" }
```


## error
Response: An object shown as below:
```
{ "ok": 0, "errorMessage": "Server error"}
```

-------------------
# Planning:

## register
Method: `POST`

## login
Method: `POST`

## subscribe
Method: `POST`

subscribe to news letter.

## unsubscribe
Method: `POST`

unsubscribe
