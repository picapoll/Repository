SELECT  TailNum, sum(Distance)
 FROM usairlineflights2.flights
 where Not TailNum = 'NA'
 group by TailNum
 order by sum(Distance) Desc
 Limit 10;