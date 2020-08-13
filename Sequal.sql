-- Write a query that returns all posts posted in the past 24 hours
SELECT * FROM posts WHERE time_posted BETWEEN NOW() - INTERVAL '24 HOURS' AND NOW();

-- Write a query that returns all posts grouped by topic
SELECT * FROM posts GROUP BY topic, post_id;

-- Write a query that returns all anonymous posts posted in the last week, sorted by most recent to least recent
SELECT * 
FROM posts 
WHERE is_anonymous IS TRUE AND time_posted BETWEEN NOW() - INTERVAL '1 WEEK' AND NOW() 
ORDER BY time_posted DESC;

-- Write a query that returns posts with Love in the title
SELECT * FROM posts WHERE title LIKE '%Love%';