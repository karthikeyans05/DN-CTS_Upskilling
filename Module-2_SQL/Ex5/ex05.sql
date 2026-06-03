SELECT u.city,
COUNT(DISTINCT r.user_id) AS users
FROM Users u
JOIN Registrations r ON u.user_id=r.user_id
GROUP BY u.city
ORDER BY users DESC
LIMIT 5;