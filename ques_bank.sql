
WITH incoming (
    subject_slug,
    topic_slug,
    question_text,
    options,
    correct_option,
    explanation,
    difficulty
) AS (
    VALUES
    (
        'c-programming',
        'data-types-and-operators',
        'What is the output of printf("%d", 8 / 3); in C?',
        '["2", "2.66", "3", "Error"]'::jsonb,
        0,
        'Both operands are integers, so integer division gives 2.',
        'easy'
    ),
    (
        'c-programming',
        'data-types-and-operators',
        'What is the output of printf("%d", 5 > 3); in C?',
        '["0", "1", "5", "3"]'::jsonb,
        1,
        'A true relational expression evaluates to 1 in C.',
        'easy'
    ),
    (
        'c-programming',
        'data-types-and-operators',
        'Which operator has higher precedence in C?',
        '["+", "*", "=", "||"]'::jsonb,
        1,
        'Multiplication has higher precedence than addition, assignment, and logical OR.',
        'medium'
    ),
    (
        'c-programming',
        'data-types-and-operators',
        'What is the result of 7 % 3 in C?',
        '["1", "2", "3", "0"]'::jsonb,
        1,
        'The modulo operator returns the remainder. The remainder is 1 for 7 divided by 3.',
        'easy'
    )
),
deduplicated AS (
    SELECT DISTINCT ON (
        subject_slug,
        topic_slug,
        question_text
    )
        subject_slug,
        topic_slug,
        question_text,
        options,
        correct_option,
        explanation,
        difficulty
    FROM incoming
    ORDER BY subject_slug, topic_slug, question_text
)
INSERT INTO questions (
    subject_slug,
    topic_slug,
    question_text,
    options,
    correct_option,
    explanation,
    difficulty
)
SELECT
    n.subject_slug,
    n.topic_slug,
    n.question_text,
    n.options,
    n.correct_option,
    n.explanation,
    n.difficulty
FROM deduplicated n
WHERE NOT EXISTS (
    SELECT 1
    FROM questions q
    WHERE q.subject_slug = n.subject_slug
      AND q.topic_slug = n.topic_slug
      AND q.question_text = n.question_text
);


INSERT INTO questions
(subject_slug, topic_slug, question_text, options, correct_option, explanation, difficulty)

SELECT
    v.subject_slug,
    v.topic_slug,
    v.question_text,
    v.options::jsonb,
    v.correct_option,
    v.explanation,
    v.difficulty
FROM (
    VALUES

    -- 1. ER Model
    (
        'dbms', 'er-model',
        'Which symbol represents an entity in an ER diagram?',
        '["Oval", "Rectangle", "Diamond", "Circle"]',
        1,
        'A rectangle represents an entity. An oval represents an attribute and a diamond represents a relationship.',
        'easy'
    ),
    (
        'dbms', 'er-model',
        'Which symbol is commonly used to represent a relationship in an ER diagram?',
        '["Rectangle", "Oval", "Diamond", "Triangle"]',
        2,
        'A diamond is used to represent a relationship between entities in an ER diagram.',
        'easy'
    ),

    -- 2. Relational Model
    (
        'dbms', 'relational-model',
        'In the relational model, a row in a table is called a:',
        '["Attribute", "Tuple", "Domain", "Schema"]',
        1,
        'A row is called a tuple, while a column is called an attribute.',
        'easy'
    ),
    (
        'dbms', 'relational-model',
        'Which key uniquely identifies each row in a relation?',
        '["Foreign key", "Primary key", "Non-key attribute", "Duplicate key"]',
        1,
        'A primary key uniquely identifies each row in a table.',
        'easy'
    ),

    -- 3. SQL Queries
    (
        'dbms', 'sql-queries',
        'Which SQL command is used to retrieve data from a table?',
        '["INSERT", "UPDATE", "SELECT", "DELETE"]',
        2,
        'SELECT retrieves data from one or more database tables.',
        'easy'
    ),
    (
        'dbms', 'sql-queries',
        'Which SQL clause is used to filter rows based on a condition?',
        '["ORDER BY", "WHERE", "GROUP BY", "SELECT"]',
        1,
        'The WHERE clause filters rows according to a specified condition.',
        'easy'
    ),

    -- 4. Relational Algebra
    (
        'dbms', 'relational-algebra',
        'Which relational algebra operation selects rows satisfying a condition?',
        '["Projection", "Selection", "Union", "Rename"]',
        1,
        'Selection, represented by sigma (σ), selects rows that satisfy a condition.',
        'easy'
    ),
    (
        'dbms', 'relational-algebra',
        'Which relational algebra operation selects specific columns?',
        '["Selection", "Projection", "Difference", "Cartesian product"]',
        1,
        'Projection, represented by pi (π), selects particular columns or attributes.',
        'easy'
    ),

    -- 5. Functional Dependencies
    (
        'dbms', 'functional-dependencies',
        'In a functional dependency X → Y, what does X determine?',
        '["Only the table name", "The value of Y", "The number of tables", "The database size"]',
        1,
        'X → Y means that each value of X determines exactly one value of Y.',
        'easy'
    ),
    (
        'dbms', 'functional-dependencies',
        'If A → B and B → C, which dependency follows by transitivity?',
        '["C → A", "A → C", "B → A", "C → B"]',
        1,
        'By the transitivity rule, A → B and B → C imply A → C.',
        'medium'
    ),

    -- 6. Normalization
    (
        'dbms', 'normalization',
        'Which normal form requires each attribute to contain atomic values?',
        '["1NF", "2NF", "3NF", "BCNF only"]',
        0,
        'First Normal Form (1NF) requires each attribute value to be atomic, without repeating groups.',
        'easy'
    ),
    (
        'dbms', 'normalization',
        'Which normal form removes partial functional dependencies on a candidate key?',
        '["1NF", "2NF", "3NF", "4NF"]',
        1,
        'Second Normal Form (2NF) eliminates partial dependencies of non-prime attributes on candidate keys.',
        'medium'
    ),

    -- 7. Transactions
    (
        'dbms', 'transactions',
        'Which ACID property ensures that a transaction is completed entirely or not at all?',
        '["Consistency", "Isolation", "Atomicity", "Durability"]',
        2,
        'Atomicity ensures that all operations in a transaction happen completely or none of them take effect.',
        'easy'
    ),
    (
        'dbms', 'transactions',
        'Which SQL command permanently saves a transaction?',
        '["ROLLBACK", "COMMIT", "DELETE", "SAVEPOINT"]',
        1,
        'COMMIT permanently saves the changes made by a transaction.',
        'easy'
    ),

    -- 8. Concurrency Control
    (
        'dbms', 'concurrency-control',
        'What is the main purpose of concurrency control in DBMS?',
        '["Increase table size", "Manage simultaneous transactions safely", "Delete all records", "Create database names"]',
        1,
        'Concurrency control manages simultaneous transactions while preserving database consistency and isolation.',
        'easy'
    ),
    (
        'dbms', 'concurrency-control',
        'Which technique uses shared and exclusive locks to control access to data?',
        '["Two-phase locking", "Binary search", "Normalization", "Hashing only"]',
        0,
        'Two-phase locking (2PL) uses locking rules to help ensure conflict serializability.',
        'medium'
    ),

    -- 9. Indexing
    (
        'dbms', 'indexing',
        'What is the main purpose of an index in a database?',
        '["To speed up data retrieval", "To remove all duplicate rows", "To replace SQL", "To encrypt every table"]',
        0,
        'An index can speed up data retrieval by helping the database locate records efficiently.',
        'easy'
    ),
    (
        'dbms', 'indexing',
        'Which data structure is commonly used to implement database indexes?',
        '["B-tree or B+ tree", "Stack only", "Queue only", "Linked list only"]',
        0,
        'B-trees and B+ trees are commonly used for database indexes because they support efficient searches and range queries.',
        'medium'
    )

) AS v(
    subject_slug,
    topic_slug,
    question_text,
    options,
    correct_option,
    explanation,
    difficulty
)

WHERE NOT EXISTS (
    SELECT 1
    FROM questions q
    WHERE q.subject_slug = v.subject_slug
      AND q.topic_slug = v.topic_slug
      AND q.question_text = v.question_text
);