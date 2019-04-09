SELECT  flights.Origin, avg (flights.DepDelay) as prom_sortides, avg(flights.ArrDelay) as prom_arribades
FROM usairlineflights2.flights
Group by flights.Origin;
