# Data Storage & Structure Lesson

## Data Structure Code Examples

### One-To-Many: Relational Database
```js
// One-to-many relationship - Relational Database Setup
// Requires two separate tables: one for research papers
// and another for footnotes. Each footnote must contain 
// a 'publicationId' field to link it to a specific paper
```

#### researchPapers:

id | title            | publicationDate |
---|------------------|-----------------|
1  | Lorem Ispum      | 2345635682547   |
2  | Dolor Set Amet   | 3568356245622   |
3  | Consequetar Adip | 5795673456278   |
 
#### footNotes:

id | page | publicationId | note
---|------|---------------|------------------------------|
1  | 26   | 1             | 'Dolor set amet consequetar' |
2  | 362  | 1             | 'Consequetar adipscing'      |
3  | 75   | 2             | 'Lorem set amet'             |


#### Extracted as JSON:

```js
// Research Papers
[{
  'id': 1,
  'title': 'Lorem Ipsum Dolor',
  'publicationDate': 2345635682547
}];

// Footnotes
[{
  'id': 1
  'pageNumber': 26,
  'note': 'Dolor set amet consequetar',
  'publicationId': 1
},
{
  'id': 2
  'pageNumber': 362,
  'note': 'Consequetar adipscing',
  'publicationId': 1
},
{
  'id': 3
  'pageNumber': 75,
  'note': 'Lorem set amet',
  'publicationId': 2
}];
```

-------------------------------------

### One-To-Many: Non-Relational Database

```js
// One-to-many relationship - Non-Relational Database Setup
// Notice: footnotes are stored as an array directly within
// the research paper object, and they no longer need a key
// to reference the publicationId

// Research Papers
[{
  'id': 1,
  'title': 'Lorem Ipsum Dolor',
  'publicationDate': 1493673656502,
  'footnotes': [{
    'id': 1
    'pageNumber': 26,
    'note': 'Dolor set amet consequetar'
  },
  {
    'id': 2
    'pageNumber': 362,
    'note': 'Consequetar adipscing'
  },
  {
    'id': 3
    'pageNumber': 75,
    'note': 'Lorem set amet'
  }]
}];
```













### Many-To-Many: Relational Database

```js
// Many-to-many - Relational Database Setup
// Requires a junction table for each relationship
```

#### researchPapers:

id | title            | publicationDate |
---|------------------|-----------------|
1  | Lorem Ispum      | 2345635682547   |
2  | Dolor Set Amet   | 3568356245622   |
3  | Consequetar Adip | 5795673456278   |
 
#### authors:

id | name       |
---|------------|
1  | Bob Loblaw |
2  | Brittany   |
3  | Robbie     |
 
#### authorPapers:

authorId | publicationId                        |
---------|--------------------------------------|
  1      |  2   # Bob wrote Dolor Set Amet      |
  1      |  3   # Bob wrote Consequetar Adip    |
  2      |  2   # Brittany wrote Dolor Set Amet |
  3      |  1   # Robbie wrote Lorem Ipsum      |
  

#### Extracted as JSON:

```js
// Research Papers
[{
  'id': 1,
  'title': 'Lorem Ipsum Dolor',
  'publicationDate': 1493673656502,
  'content': 'Set amet consequetar adipscing',
},
{
  'id': 2,
  'title': 'Set amet consequetar',
  'publicationDate': 2304976256456,
  'content': 'Lorem Ipsum Dolor',
}];

// Authors
[
  { 'id': 1, 'name': 'Bob Loblaw' },
  { 'id': 2, 'name': 'Brittany' },
  { 'id': 3, 'name': 'Robbie' }
];

// Author Papers
[
  { 'authorId': 1, 'paperId': 1 },
  { 'authorId': 1, 'paperId': 2, },
  { 'authorId': 2, 'paperId': 2 },
  { 'authorId': 3, 'paperId': 1 }
];
```


### Many-To-Many: Non-Relational Database

```js
// Many-to-many - Non-Relational Database Setup
// Lists can be stored directly in each record

// Research Papers
[{
  'id': 1,
  'title': 'Lorem Ipsum Dolor',
  'publicationDate': 1493673656502,
  'authors': [1, 2, 3]
},
{
  'id': 2,
  'title': 'Set amet consequetar',
  'publicationDate': 2304976256456,
  'authors': [1, 2]
},
{
  'id': 3,
  'title': 'Adipscing',
  'publicationDate': 2457345678657,
  'authors': [3]
}];

// Authors
[{
  'id': 1,
  'name': 'Bob Loblaw',
  'publications': [1, 2]
},
{
  'id': 2,
  'name': 'Brittany',
  'publications': [1, 2]
},
{
  'id': 3,
  'name': 'Robbie',
  'publications': [1, 3]
}];
```