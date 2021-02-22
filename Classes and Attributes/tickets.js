function buyTicket(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    function splitLine(line){ return line.split('|')}

    function convertToTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status);
    }

    const sortByCriterion = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price- b.price,
        status: (a, b) => a.status.localeCompare(b.status)
    }
    return array.map(splitLine).map(convertToTicket).sort(sortByCriterion[criterion]);
}