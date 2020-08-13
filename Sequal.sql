-- Write a query that returns all posts grouped by topic
SELECT * FROM posts GROUP BY topic, post_id;

-- Write a query that returns posts with Love in the title
SELECT * FROM posts WHERE title LIKE '%Love%';