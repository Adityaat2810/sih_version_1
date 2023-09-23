
## Authors

- [@irfan-iiitr](https://github.com/irfan-iiitr)

# Books Api

Api for getting access of all the study materials.


## API Reference

#### Get all items

```http
  GET /api/product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | `string` | Get all the books          |

#### Get item by Id

```http
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|           | `string` | Fetch boook ny Id                 |

#### Get item by Category

```http
  GET /api/category/${categoryName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `  `id      | `string` | Fetch Books by Category Id           |

#### Create Category


```http
  POST /api/product/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `      | `string` |   Create database of a product       |


#### Update Product

```http
  UPDATE /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `      | `string` |   Update database of a product       |

#### Delete Category

```http
  DELETE /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `      | `string` |   Delete database of a product       |
