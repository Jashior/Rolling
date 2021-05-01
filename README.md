# Deathrolling

'Deathrolling' probability RNG game: 

- Player A rolls a number from 1 to n (uniform probability distribution). 

- Player B follows by rolling a number from 1 to the result of the previous roll. 

- Whoever rolls a 1 first loses. 

# What is the probability of winning?

- This project works out the probability of winning for different starting values of n

- Each calculation is done through the sum of an infinite geometric sequences

- Prior results from calculations of earlier n values are used to work out future results

![deathrolling graph](https://i.imgur.com/gbQz2Xq.png)
