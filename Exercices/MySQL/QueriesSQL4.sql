SELECT  airports.cityName as city, flights.colYear, flights.colMonth,  flights.ArrDelay as Prom_arribades 
FROM usairlineflights2.flights
inner join  airports
on flights.Origin = airports.iata
order by flights.Origin, flights.colYear, flights.colMonth
 