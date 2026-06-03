SELECT registration_date,
COUNT(*) AS users
FROM Users
WHERE registration_date >= CURDATE()-INTERVAL 7 DAY
GROUP BY registration_date;