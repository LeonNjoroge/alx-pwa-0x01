# alx-project-0x14

## API Overview

The MoviesDatabase API is a comprehensive source for information on movies, TV shows, and actors. It offers access to over 9 million titles (including series and episodes) and more than 11 million actors, crew, and cast members. The API provides detailed metadata, including biographies, YouTube trailers, awards, and much more. The data is regularly updated, with recent titles refreshed weekly and ratings/episodes updated daily.

## Version

As per the documentation, the MoviesDatabase API does not state a formal version number but is actively maintained and updated weekly. Always refer to the latest documentation for accurate reference.

## Available Endpoints

| Endpoint | Description |
|---------|-------------|
| `/titles` | Returns an array of titles filtered and sorted based on query parameters. |
| `/x/titles-by-ids` | Fetch multiple titles by providing an array of IMDb IDs. |
| `/titles/{id}` | Retrieve details of a specific title by IMDb ID. |
| `/titles/{id}/ratings` | Get rating and vote count for a title. |
| `/titles/series/{id}` | Get episodes of a series with their season and episode numbers. |
| `/titles/seasons/{id}` | Get the number of seasons for a given series. |
| `/titles/series/{id}/{season}` | Get episodes for a specific season of a series. |
| `/titles/episode/{id}` | Retrieve a specific episode by IMDb ID. |
| `/titles/x/upcoming` | Get a list of upcoming titles. |
| `/titles/search/keyword/{keyword}` | Search titles using a keyword. |
| `/titles/search/title/{title}` | Search titles by exact or partial title match. |
| `/titles/search/akas/{aka}` | Search titles by alternate name (case-sensitive). |
| `/actors` | Get a list of actors using filters. |
| `/actors/{id}` | Get detailed information about a specific actor. |
| `/title/utils/titleType` | Returns the list of title types available. |
| `/title/utils/genres` | Returns a list of genres. |
| `/title/utils/lists` | Provides predefined title lists usable in queries. |

## Request and Response Format

All endpoints return a JSON object with a `results` key. Pagination-based endpoints also include `page`, `next`, and `entries`.

### Example Request

```http
GET /titles/search/title/Inception?info=base_info&limit=5
```

### Example Response (simplified)

```json
{
  "results": [
    {
      "id": "tt1375666",
      "titleText": "Inception",
      "primaryImage": { "url": "..." },
      "releaseDate": "2010-07-16",
      "genres": ["Action", "Sci-Fi"],
      "runtime": 148
    }
  ]
}
```

## Authentication

The MoviesDatabase API may require an API key to access. Authentication is typically done by including the API key in the request headers.

### Example

```http
GET /titles
Headers:
  Authorization: Bearer YOUR_API_KEY
```

Always refer to the API host’s documentation or provider for authentication specifics.

## Error Handling

Common error responses:

| HTTP Status | Meaning | How to Handle |
|-------------|---------|----------------|
| `400` | Bad Request | Check your query parameters and request formatting. |
| `401` | Unauthorized | Verify your API key or authentication method. |
| `404` | Not Found | The requested resource does not exist. |
| `500` | Server Error | Retry the request or report the issue if persistent. |

Use try-catch or `.catch()` in your request logic and conditionally handle error codes for resilience.

## Usage Limits and Best Practices

- **Rate Limiting**: Not explicitly documented. Treat the API with care — avoid excessive requests.
- **Pagination**: Use `limit` and `page` query parameters to paginate through results.
- **Filtering**: Use optional query parameters like `startYear`, `genre`, and `titleType` to refine results.
- **Efficiency**: Use the `info` query parameter to limit the amount of data returned (e.g., `mini_info`, `base_info`).
- **Caching**: Cache frequent requests (e.g., top-rated movies) to minimize traffic and latency.

---

> For more details, refer to the original [MoviesDatabase API documentation](https://www.buymeacoffee.com/SAdrian13).
