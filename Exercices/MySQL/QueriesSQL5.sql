SELECT 
    flights.Origin, flights.colYear, flights.colMonth, 
  
    COUNT(flights.Cancelled) as total_cancelled
FROM
    usairlineflights2.flights
WHERE
    Cancelled = 1
GROUP BY flights.Origin, flights.colYear, flights.colMonth
Order by total_cancelled Desc


