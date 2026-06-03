SELECT event_id,
COUNT(CASE WHEN resource_type='pdf' THEN 1 END) AS pdfs,
COUNT(CASE WHEN resource_type='image' THEN 1 END) AS images,
COUNT(CASE WHEN resource_type='link' THEN 1 END) AS links
FROM Resources
GROUP BY event_id;