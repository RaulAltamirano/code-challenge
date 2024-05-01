
async function bestRestaurant(city: string, cost: number): Promise<string | null> {
    const baseUrl = `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}`;
    let page = 1;
    let totalPages = 1;

    let bestName: string | null = null;
    let highestRating = -1;
    let lowestCost = Infinity;

    try {
        while (page <= totalPages) {
            const res = await fetch(`${baseUrl}&page=${page}`);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            const data = await res.json();
            console.log({data});
            totalPages = data.total_pages;

            for (const outlet of data.data) {
                const { estimated_cost, name, user_rating } = outlet;
                const { average_rating } = user_rating;

                if (estimated_cost <= cost) {
                    if (
                        average_rating > highestRating ||
                        (average_rating === highestRating && estimated_cost < lowestCost)
                    ) {
                        highestRating = average_rating;
                        lowestCost = estimated_cost;
                        bestName = name;
                    }
                }
            }

            page++;
        }

        return bestName;

    } catch (error) {
        console.error(`Fetch failed: ${error}`);
        return null;
    }
}

// Ejemplo de cómo llamar a la función
bestRestaurant("Seattle", 120).then((res) => {
    console.log(res); // Output: Best restaurant in Seattle for under $120
  });
  
  bestRestaurant("Miami", 100).then((res) => {
    console.log(res); // Output: Best restaurant in Seattle for under $120
  });
  Miami
100