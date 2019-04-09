select flights.UniqueCarrier, avg(flights.ArrDelay) as Delay
from flights
where flights.ArrDelay  >10
group by UniqueCarrier	
Order by avg(flights.ArrDelay) desc;
