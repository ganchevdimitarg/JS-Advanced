function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs textarea');
   let best = document.querySelector('#bestRestaurant p');
   let workers = document.querySelector('#workers p');

   function onClick() {
      let array = JSON.parse(input.value);
      let restaurants = {};
      array.forEach(r => {
         const tokens = r.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArr) {
            const tokens = worker.split(' ');
            const salary = Number(tokens[1])
            workers.push({name: tokens[0], salary})
         }
         if (restaurants[name]){
            workers = workers.concat(restaurants[name].workers)
         }
         workers.sort((w1, w2) => w2.salary - w1.salary);
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      })
      let bestRestaurant = undefined;
      let bestRestaurantSalary = 0;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary){
            bestRestaurant = {
               name,
               workers : restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }


      }

      best.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let workersResult = [];

      bestRestaurant.workers.forEach( worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      workers.textContent = workersResult.join(' ');
   }
}